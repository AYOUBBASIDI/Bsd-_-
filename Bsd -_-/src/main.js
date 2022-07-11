import { createApp } from "vue";
import App from "./App.vue";
import VueKinesis from "vue-kinesis";




const app = createApp(App);
app.use(VueKinesis);
app.mount("#app");
