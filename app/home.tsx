import Button from "@/components/Button";
import Page from "@/components/Page";
import { useUser } from "@/UserContext";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";


export default function Explore() {
  const { user, signOut } = useUser();
  if (!user) return null;

  return (
    <Page style={styles.container}>
      <View style={styles.greetingBox}>
        <Text style={styles.greeting}>Hello,</Text>
        <Text style={styles.userName}>{user.name}!</Text>
      </View>

      <Button text="Sign out" onPress={signOut} style ={styles.signOutButton} />
      <Button
        text="Go to Services"
        onPress={() => router.push("/services")} 
        style={{ marginTop: 16 }}
      />
    </Page>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E0F8", // soft lavender background
    paddingTop: 24,
    paddingHorizontal: 24,
  },
  greetingBox: {
    marginBottom: 40,
  },
  greeting: {
    fontSize: 28,
    color: "#7B5ACF", // deep purple
    fontWeight: "700",
  },
  userName: {
    fontSize: 36,
    color: "#7B5ACF", 
    fontWeight: "700",
  },
  signOutButton: {
    backgroundColor: "#7B5ACF",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
});
