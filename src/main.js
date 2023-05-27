import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import BillingDetails from "./views/BillingDetails.vue";
import Shipments from "./views/Shipments.vue";
import OrderHistory from "./views/OrderHistory.vue";
import Promotions from "./views/Promotions.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/Home",
      name: "Home",
      component: Home,
    },
    {
      path: "/BillingDetails",
      name: "BillingDetails",
      component: BillingDetails,
    },
    {
      path: "/Shipments",
      name: "Shipments",
      component: Shipments,
    },
    {
      path: "/OrderHistory",
      name: "OrderHistory",
      component: OrderHistory,
    },
    {
      path: "/Promotions",
      name: "Promotions",
      component: Promotions,
    },
  ],
});

createApp(App).use(router).mount("#app");
