import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }}>
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
}
