import { createApp } from "vue";

import App from "./App.vue";
import router from "./routes";
import { createPinia } from "pinia";
/*form kit*/
import { plugin, defaultConfig } from "@formkit/vue";

import "./assets/css/style.css";

/*font awesome */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faStar, faHeart, faBell } from "@fortawesome/free-regular-svg-icons";

import {
  faCartPlus,
  faChevronLeft,
  faChevronRight,
  faUsers,
  faMagnifyingGlass,
  faGlobe,
  faBars,
  faLock,
  faXmark,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faFacebook,
  faStar,
  faHeart,
  faCartPlus,
  faChevronLeft,
  faChevronRight,
  faUsers,
  faMagnifyingGlass,
  faBell,
  faGlobe,
  faBars,
  faLock,
  faXmark,
  faHome
);
/*font awesome end*/

/*global compos*/
import cartUtility from "./components/Slots/cartUtility.vue";
import ProductInfo from "./components/Global/ProductInfo.vue";
/*global copos*/

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("cartUtility", cartUtility);
app.component("ProductInfo", ProductInfo);
app.use(plugin, defaultConfig);
app.mount("#app");
