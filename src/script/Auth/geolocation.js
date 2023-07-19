import { ref } from "vue";

const userLocation = {
  latitude: ref(""),
  longitude: ref(""),
};

class Geolocation {
  constructor(lat, long) {
    userLocation.latitude.value = lat;
    userLocation.longitude.value = long;
  }
}

export { userLocation, Geolocation };
