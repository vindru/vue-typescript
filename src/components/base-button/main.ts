import { defineComponent } from "vue";
import TheLoader from "@/components/the-loader/index.vue";

// @/component/base-button
export default defineComponent({
  name: "BaseButton",
  emits: ["onClick"],
  components: { TheLoader },
  props: {
    testid:{
      type: String,
      required: true
    },
    loader: {
      type: Boolean,
      default: true,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
});
