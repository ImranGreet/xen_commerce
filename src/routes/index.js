import { createRouter, createWebHashHistory } from "vue-router";
/*store or state*/
import { useCategoryStore } from "../store/category";
import { useProductsByCategory } from "../store/productsbycat";
import { useProductDetails } from "../store/productDetails";
import { useProductsStore } from "../store/productstore";
import { useSortProducts } from "../store/sortProduct";

const routes = [
  {
    path: "/",
    name: "Home",
    beforeEnter: async (to, from) => {
      const { retriveCategories } = useCategoryStore();
      const { retrieveProductsCollection } = useProductsStore();
      const { retrieveProducts } = useSortProducts();

      await retriveCategories();
      await retrieveProductsCollection();
      await retrieveProducts();
    },
    component: () => import("../Layouts/User.vue"),

    children: [
      {
        path: "/",
        name: "Homeview",
        component: () => import("../Pages/HomeView.vue"),
      },

      {
        path: "/products/:category",
        name: "category",
        beforeEnter: async (to, from) => {
          const { retrieveProductsAccordingToCat } = useProductsByCategory();
          await retrieveProductsAccordingToCat(to.params.category);
        },
        component: () => import("../Pages/RetriveProductsByCat.vue"),
      },

      {
        path: "/products-information/:productId",
        name: "product-details",
        beforeEnter: async (to, from) => {
          const { retrieveProductInformation } = useProductDetails();
          await retrieveProductInformation(to.params.productId);
        },
        component: () => import("../Pages/ProductDetails.vue"),
      },

      {
        path: "/products-information/:productId",
        name: "product-details",
        beforeEnter: async (to, from) => {
          const { retrieveProductInformation } = useProductDetails();
          await retrieveProductInformation(to.params.productId);
        },
        component: () => import("../Pages/ProductDetails.vue"),
      },

      {
        path: "/products/storehouse",
        name: "storehouse",
        beforeEnter: async () => {
          const { retrieveProductsCollection } = useProductsStore();
          await retrieveProductsCollection();
        },
        component: () => import("../Pages/ProductsStore.vue"),
      },

      /*purchase*/
      // {
      //   path: "products/wish-products",
      //   name: "wish",
      //   component: () => import("../P"),
      // },

      {
        path: "/products/cart-products",
        name: "cart",
        component: () => import("../Pages/WishAndCart/CartList.vue"),
      },
      {
        path: "/products/cart-products/checkout",
        name: "checkout",
        component: () => import("../Pages/Checkout.vue"),
      },
      /*checkout*/
    ],
  },

  /*authentication*/
  {
    path: "/xenmesh/authentication",
    name: "Authentication",
    component: () => import("../Layouts/Authentication.vue"),
    children: [
      {
        path: "/authentication",
        name: "Login",
        component: () => import("../Pages/Auth/LoginAuth.vue"),
      },
      {
        path: "/Registration",
        name: "Registration",
        component: () => import("../Pages/Auth/RegistrationAuth.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
