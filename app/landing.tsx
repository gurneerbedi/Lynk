import { StyleSheet, Text } from "react-native";
import { H1 , H3} from "@/components/Heading";
import { GoogleSigninButton } from "@react-native-google-signin/google-signin";
import Page from "@/components/Page";
import { useUser } from "@/UserContext";

export default function Login() {
  const { signIn } = useUser();

  return (
    <Page style={styles.container}>
      <H3 style={styles.welcome}>Welcome Neighbour! 👋</H3>
      <H1 style={styles.appName}>Lynk</H1>
      <H3 style={styles.welcome}>
        Help is just next door
      </H3>

      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light} 
        onPress={signIn}
        style={styles.googleButton}
      />
    </Page>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E0F8", // soft lavender background
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  welcome: {
    fontSize: 22,
    color: "#5D4B8C", // deep purple text
    marginBottom: 8,
    fontWeight: "600",
  },
  appName: {
    fontSize: 60,
    color: "#7B5ACF", // medium purple for Lynk
    fontWeight: "900",
    marginBottom: 6,
  },

  googleButton: {
    borderRadius: 10,
    elevation: 10, 
  },
});
