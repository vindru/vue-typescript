import { defineComponent, ref } from "vue";
import BaseInputField from "@/components/base-input-field/index.vue";
import BaseButton from "@/components/base-button/index.vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import { User } from "@/types/interface";
import { ScreenState } from "@/types/enums";

export default defineComponent({
  name: "Home",
  components: {
    BaseInputField,
    BaseButton,
  },
  setup() {
    const user = ref<User>({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    const state = ref<ScreenState>(ScreenState.DEFAULT);
    return {
      user,
      v$: useVuelidate(),
      state,
    };
  },
  methods: {
    updateUser(value: string, type: string) {
      switch (type) {
        case "firstName":
          this.user.firstName = value;
          break;
        case "lastName":
          this.user.lastName = value;
          break;
        case "email":
          this.user.email = value;
          break;
        case "password":
          this.user.password = value;
          break;
        case "confirmPassword":
          this.user.confirmPassword = value;
          break;
      }
    },
    registerUser() {
      this.state = ScreenState.LOADING;
      this.v$.$touch();
      if (this.v$.$invalid) {
        return false;
      }
      alert("Done!");
      this.state = ScreenState.LOADED;
      return true;
    },
  },
  validations() {
    return {
      user: {
        firstName: { required },
        lastName: { required },
        email: { required, email },
        password: { required, minLength: minLength(6) },
        confirmPassword: {
          required,
          minLength: minLength(6),
          sameAsPassword: sameAs(this.user.password),
        },
      },
    };
  },
});
