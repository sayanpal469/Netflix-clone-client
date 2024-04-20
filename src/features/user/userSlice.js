import { createUser, fetchUserById, loginUser } from "./userApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
  isUser: false,
  isLoading: false,
  isError: false,
  error: null,
  response: null,
};

export const createUserAsync = createAsyncThunk(
  "user/createUser",
  async (userData) => {
    const response = await createUser(userData);
    return response;
  }
);

export const loginUserAsync = createAsyncThunk(
  "user/loginUser",
  async (userData) => {
    const response = await loginUser(userData);
    console.log(response)
    return response;
  }
);

export const fetchLoggedInUserAsync = createAsyncThunk(
  "user/fetchUserById",
  async (id) => {
    const response = await fetchUserById(id);
    return response;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state) => {
      state.isUser = false;
      state.userInfo = null;
      state.response = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isUser = true;
        state.response = action.payload;
        if (state.response.success) {
          state.userInfo = state.response.user;
          localStorage.setItem("user", JSON.stringify(state.userInfo));
        } else {
          state.userInfo = null;
        }
        state.isError = false;
        state.error = null;
      })
      .addCase(createUserAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.isUser = false;
        // console.log(action)
        state.response = null;
        state.userInfo = null;
      })
      .addCase(loginUserAsync.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isUser = true;
        state.response = action.payload;
        if (state.response.success) {
          state.userInfo = state.response.user;
          localStorage.setItem("user", JSON.stringify(state.userInfo));
        } else {
          state.userInfo = null;
        }
        state.isError = false;
        state.error = null;
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.isUser = false;
        // console.log(action)
        state.response = null;
        state.userInfo = null;
      })
      .addCase(fetchLoggedInUserAsync.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchLoggedInUserAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isUser = true;
        state.response = action.payload;
        if (state.response.success) {
          state.userInfo = state.response.user;
          // localStorage.setItem("user", JSON.stringify(state.userInfo));
        } else {
          state.userInfo = null;
        }
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchLoggedInUserAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.isUser = false;
        state.response = null;
        state.userInfo = null;
      });
  },
});

export const { logOut } = userSlice.actions;

export default userSlice.reducer;
