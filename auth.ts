import { GoogleSignin, isErrorWithCode, isSuccessResponse, statusCodes } from "@react-native-google-signin/google-signin";

GoogleSignin.configure({
  iosClientId: "518878153535-qup71umq0h6ak8kj3vmvm5go0cpvhmlp.apps.googleusercontent.com",
});

export async function signInSilently() {
  return (await GoogleSignin.signInSilently()).data?.user;
}

export const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const response = await GoogleSignin.signIn();
    console.log(response);
    if (isSuccessResponse(response)) {
      return response.data.user;
    } else {
      // sign in was cancelled by user
    }
  } catch (error) {
    console.log(error);
    if (isErrorWithCode(error)) {
      switch (error.code) {
        case statusCodes.IN_PROGRESS:
          // operation (eg. sign in) already in progress
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          // Android only, play services not available or outdated
          break;
        default:
        // some other error happened
      }
    } else {
      // an error that's not related to google sign in occurred
    }
  }
};

export const signOut = async () => {
  try {
    await GoogleSignin.signOut();
  } catch (error) {
    console.error(error);
  }
};