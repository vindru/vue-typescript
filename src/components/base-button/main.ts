import { defineComponent } from "vue";
import TheLoader from "@/components/the-loader/index.vue";

// @/component/base-button
export default defineComponent({
  name: "BaseButton",
  emits: ["onClick"],
  components: { TheLoader },
  props: {
    data_cy:{
      type: String,
      required: false
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
