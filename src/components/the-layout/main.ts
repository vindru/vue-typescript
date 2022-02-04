import { defineComponent } from "vue";
import TheContainer from "@/components/the-container/index.vue";
import TheFooter from "@/components/the-footer/index.vue";
import TheHeader from "@/components/the-header/index.vue";

export default defineComponent({
  name: "TheLayout",
  components: {
    TheContainer,
    TheFooter,
    TheHeader,
  },
});
