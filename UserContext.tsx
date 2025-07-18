import { signIn as googleSignIn, signOut as googleSignOut, signInSilently } from "@/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

type User = any;

type AuthStatus = "loading" | "unauthenticated" | "authenticated";

type UserContextType = {
  user: User | null | undefined;
  signIn: () => void;
  signOut: () => void;
  status: AuthStatus;
  setRole: (role: string) => Promise<void>;
  role: string | null;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

const USER_STORAGE_KEY = "user";


export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const [status, setStatus] = useState<AuthStatus>("loading");

  const fetchUser = async () => {
    try {
      // Try to load user from AsyncStorage first
      const savedUserString = await AsyncStorage.getItem(USER_STORAGE_KEY);
      let savedUser = savedUserString ? JSON.parse(savedUserString) : null;

      // Try silent Google sign-in (refresh token etc)
      const current = await signInSilently();

      // Prefer fresh Google user if available, else fallback to saved user
      const finalUser = current || savedUser;

      if (finalUser) {
        setUser(finalUser);
        setStatus("authenticated");
      } else {
        setUser(null);
        setStatus("unauthenticated");
      }
    } catch (err) {
      console.error("Failed to get current user:", err);
      setUser(null);
      setStatus("unauthenticated");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const signIn = async () => {
    try {
      const user = await googleSignIn();
      if (user) {
        // Try to load saved role for this user from AsyncStorage
        const savedUserString = await AsyncStorage.getItem(USER_STORAGE_KEY);
        const savedUser = savedUserString ? JSON.parse(savedUserString) : null;

        // Merge role from saved user if exists, else undefined
        const role = savedUser?.role;

        const userWithRole = {
          ...user,
          role,
        };

        setUser(userWithRole);
        setStatus("authenticated");
        await AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userWithRole));
      }
    } catch (err) {
      console.error("Sign in failed", err);
    }
  };

  const setRole = async (role: string) => {
    if (!user) return;
    const updatedUser = { ...user, role };
    setUser(updatedUser);
    await AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(updatedUser));
  };

  const signOut = async () => {
    await googleSignOut();
    setUser(null);
    setStatus("unauthenticated");
    await AsyncStorage.removeItem(USER_STORAGE_KEY);
  };

  return (
    <UserContext.Provider value={{ user, signIn, signOut, status, setRole, role: user?.role ?? null }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used within UserProvider");
  return ctx;
};
