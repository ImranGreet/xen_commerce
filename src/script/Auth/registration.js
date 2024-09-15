import { ref } from "vue";
import useLocationProperties from "./geolocation";

const useUserDetails = {
  email: ref(""),
  username: ref(""),
  password: ref(""),
  name: {
    firstname: ref(""),
    lastname: ref(""),
  },
  address: {
    city: ref(""),
    street: ref(""),
    number: ref(""),
    zipcode: ref(""),
  },
  Geolocation: {
    lat: useLocationProperties().lat,
    long: useLocationProperties().long,
  },
  phone: ref(""),
};

const loginDetails = {
  username: ref("mor_2314"),
  password: ref("83r5^_"),
};

export { useUserDetails, loginDetails };
