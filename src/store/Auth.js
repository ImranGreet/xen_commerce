import axios from "axios";
import { defineStore } from "pinia";

export const useAuthentication = defineStore("registration", () => {
  async function userUserRegistration(payload) {
    axios
      .post("https://fakestoreapi.com/users", payload)
      .then((res) => {
        console.log("Registration Succesfully");
        console.log(res.json());
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function useUserLogin(payload) {
    try {
      axios
        .post("https://fakestoreapi.com/auth/login", payload)
        .then((response) => console.log(response.data, payload));
    } catch (error) {
      console.log(error);
    }
  }

  return {
    userUserRegistration,
    useUserLogin,
  };
});
