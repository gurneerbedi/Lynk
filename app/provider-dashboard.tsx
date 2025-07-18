
import Button from "@/components/Button";
import Page from "@/components/Page";
import { useUser } from "@/UserContext";
import { StyleSheet, Text, View } from "react-native";

export default function ProviderDashboard() {
  const { user , signOut} = useUser();

  return (
    <Page style={styles.container}>
      <Text style={styles.header}>Welcome, {user?.name || "Provider"}!</Text>
      <Text style={styles.subtext}>This is your provider dashboard.</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Upcoming Appointments</Text>
        
        <Text>No appointments yet.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Your Availability</Text>
    
        <Text>Set your schedule in your profile.</Text>
      </View>
       <Button text="Sign out" onPress={signOut} style ={styles.signOutButton} />
      
    </Page>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#F4F2FD",
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    color: "#5D4B8C",
    marginBottom: 8,
  },
  subtext: {
    fontSize: 16,
    marginBottom: 24,
    color: "#7B5ACF",
  },
  signOutButton: {
    backgroundColor: "#7B5ACF",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },
});
