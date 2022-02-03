import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { messages, defaultLocale } from "@/i18n";
import { createI18n } from "vue-i18n";

export const i18n = createI18n({
  messages,
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
  globalInjection: true,
});

const app = createApp(App);
app.use(i18n);
app.use(router);
app.mount("#app");
