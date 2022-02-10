// @/component/base-button
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseInputField",
  props: {
    data_cy: {
      required: false,
      type: String,
    },
    placeholder: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    type: {
      required: true,
      type: String,
    },
    invalidInput: {
      required: true,
      type: Boolean,
    },
    errorMessage: {
      default: "",
      type: String,
    },
  },
  emits: ["changeValue"],
});
