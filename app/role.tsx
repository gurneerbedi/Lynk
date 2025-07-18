import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Page from "@/components/Page";
import { useUser } from "@/UserContext";
import { useRouter } from "expo-router";

export default function RoleSelection() {
  const { setRole, user } = useUser();
  const router = useRouter();

  async function handleRoleSelect(role: string) {
    try {
      await setRole(role);
      if (role === "provider") {
        router.replace("/provider-dashboard");
      } else {
        router.replace("/home");
      }
    } catch (error) {
      console.error("Failed to set role:", error);
    
    }
  }

  return (
    <Page style={styles.container}>
      <Text style={styles.title}>Select Your Role</Text>

      <TouchableOpacity
        style={[styles.button, styles.memberButton]}
        onPress={() => handleRoleSelect("member")}
      >
        <Text style={styles.buttonText}>Community Member</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.providerButton]}
        onPress={() => handleRoleSelect("provider")}
      >
        <Text style={styles.buttonText}>Service Provider</Text>
      </TouchableOpacity>
    </Page>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E0F8",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    marginBottom: 40,
    color: "#7B5ACF",
    fontWeight: "700",
  },
  button: {
    width: "80%",
    paddingVertical: 16,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  memberButton: {
    backgroundColor: "#7B5ACF",
  },
  providerButton: {
    backgroundColor: "#5D4B8C",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});

