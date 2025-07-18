import Page from "@/components/Page";
import { Ionicons } from '@expo/vector-icons';
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";

const services = [
  { id: "1", name: "Cleaning", icon: "ios-broom" },
  { id: "2", name: "Gardening", icon: "ios-leaf" },
  { id: "3", name: "Plumbing", icon: "ios-flash" },
  { id: "4", name: "Tutoring", icon: "ios-book" },
  { id: "5", name: "Pet Care", icon: "ios-paw" },
  { id: "6", name: "Delivery", icon: "ios-bicycle" },
];

export default function Services() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.serviceCard} activeOpacity={0.7}>
      <Ionicons name={item.icon} size={48} color="#7B5ACF" style={{ marginBottom: 12 }} />
      <Text style={styles.serviceName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <Page style={styles.container}>
      <Text style={styles.title}>Available Services</Text>

      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </Page>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E0F8",
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  title: {
    fontSize: 28,
    color: "#7B5ACF",
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 20,
  },
  serviceCard: {
    backgroundColor: "#fff",
    flex: 1,
    marginHorizontal: 8,
    borderRadius: 12,
    paddingVertical: 24,
    alignItems: "center",
    shadowColor: "#7B5ACF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#5D4B8C",
  },
});
