import axiosInstance from "../../utils/axios";

export const createUser = async (userData) => {
  try {
    const response = await axiosInstance.post("/user/signUp", userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};


export const loginUser = async (userData) => {
  try {
    const response = await axiosInstance.post("/user/login", userData);
    // console.log(response)
    return response.data;
  } catch (error) {
    // console.log(error)
    throw error.response.data;
  }
};

export const fetchUserById = async (id) => {
  try {
    const response = await axiosInstance.get(`/user/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
