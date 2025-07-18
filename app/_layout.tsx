import { UserProvider, useUser } from "@/UserContext";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}

const App = () => {
 
  const router = useRouter();
  const {status} =useUser();

  useEffect(() => {
    if (status == "authenticated") {
      router.replace("/home");
    }

    if (status === "unauthenticated") {
      router.replace("/landing");
    }
  }, [status]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="home"
        options={{
          title: "Home Sweet Home",
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#4B9CD3",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack>
  );
};