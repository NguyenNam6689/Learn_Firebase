//* LIB
import { createAsyncThunk } from "@reduxjs/toolkit";

//* IMPORT
import { auth } from "@/common/configs/database/firebase";

// Todo: Handle create account into firebase
export const registerInitial = createAsyncThunk(
  "auth/register",
  async ({ email, password, displayName }) => {
    try {
      // Create new account
      const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      // If account create success, assign value into variable user
      const user = userCredential.user;

      // Handle asy update full name account just created
      await user.updateProfile({
        displayName,
      });

      // return all data user redux toolkit
      return user;
    } catch (error) {
      // If error return error redux toolkit
      console.error("Error during registration:", error);
      return error;
    }
  }
);
// Todo1 : Handle login account into firebase
export const loginInitial = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // Login with email,password
      const { user } = await auth.signInWithEmailAndPassword(email, password);

      showSuccessToast("Login Success");
      // return all data user redux toolkit
      return user;
    } catch (error) {
      // Info error
      showErrorToast(handleAuthError(error));
      // If error return error redux toolkit
      console.error("Error during registration:", error);
      return rejectWithValue(error);
    }
  }
);
// Todo 3: Handle login google account into firebase
export const loginGoogleInitial = createAsyncThunk(
  "auth/login/google",
  async (_, { rejectWithValue }) => {
    try {
      // Login with email,password
      const { user } = await auth.signInWithPopup(googleAuthProvider);

      showSuccessToast("Login google Success");
      // return all data user redux toolkit
      return user;
    } catch (error) {
      // Info error
      showErrorToast(handleAuthError(error));
      // If error return error redux toolkit
      console.error("Error during registration:", error);
      return rejectWithValue(error);
    }
  }
);
