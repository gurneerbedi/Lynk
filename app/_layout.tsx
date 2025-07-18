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
  const {status, role} = useUser();

  useEffect(() => {
    if (status === "authenticated") {
      if (role === null) {
        router.replace("/role");
      } else {
        router.replace(role === "provider" ? "/provider-dashboard" : "/home");
      }
    }
  
    if (status === "unauthenticated") {
      router.replace("/landing");
    }
  }, [status, role]);
  
  // useEffect(() => {
  //   if (status == "authenticated") {
  //     router.replace("/home");
  //   }

  //   if (status === "unauthenticated") {
  //     router.replace("/landing");
  //   }
  // }, [status]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#7B5ACF",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
        <Stack.Screen
        name="services"
        options={{
          title: "Services",
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#7B5ACF",
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