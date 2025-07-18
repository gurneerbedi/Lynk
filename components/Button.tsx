import { Pressable, StyleSheet, Text } from "react-native";

type ButtonProps = {
  text: string;
  onPress?: () => void;
};

export default function Button({ text, onPress = () => {} }: ButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && { backgroundColor: "#E6E0F8" }, // red when pressed
      ]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: "#7B5ACF",
    borderRadius: 6,
    borderColor: "#7B5ACF",
    borderWidth: 2,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 16,
  },
});