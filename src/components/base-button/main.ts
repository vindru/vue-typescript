import { defineComponent } from "vue";
import TheLoader from "@/components/the-loader/index.vue";

// @/component/base-button
export default defineComponent({
  name: "BaseButton",
  emits: ["onClick"],
  components: { TheLoader },
  props: {
    loader: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
});
