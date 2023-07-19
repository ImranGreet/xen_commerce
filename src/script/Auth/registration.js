import { ref } from "vue";
import { userLocation } from "./geolocation";

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
  },
  Geolocation: {
    lat: userLocation.latitude.value,
    long: userLocation.longitude.value,
  },
  phone: ref(""),
};

export { useUserDetails };
