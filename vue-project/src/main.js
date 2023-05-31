import "./assets/main.css";
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core CSS
import "primeicons/primeicons.css"; //icons
import Dialog from "primevue/dialog";
import { createApp } from "vue";
import App from "./App.vue";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import PrimeVue from "primevue/config"; // here



//import router from "./router";
//import store from "./store";
const app = createApp(App);
//app.use(store)
//app.use(router)
app.use(PrimeVue);
app.component("Dialog", Dialog);
app.component("Textarea", Textarea);
app.component("Button", Button);
app.mount("#app");
