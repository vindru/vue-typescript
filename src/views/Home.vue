<template>
  <div class="home">
    <div class="input">
      <InputField
        type="text"
        placeholder="First Name"
        @changeValue="updateFirstName"
        :validInput="v$.firstName.$invalid"
        :errorMessage="`${$t('error.firstName')}`"
      />
    </div>
    <div class="input">
      <InputField
        type="text"
        placeholder="Last Name"
        @changeValue="updateLastName"
        :validInput="v$.lastName.$invalid"
      />
    </div>
    <div class="input">
      <InputField
        type="email"
        placeholder="Email"
        @changeValue="updateEmail"
        :validInput="v$.email.$invalid"
      />
    </div>
    <div class="input">
      <InputField
        type="password"
        placeholder="Password"
        @changeValue="updatePassword"
        :validInput="v$.password.$invalid"
      />
    </div>
    <div class="input">
      <InputField
        type="password"
        placeholder="Confirm Password"
        @changeValue="updateConfirmPassword"
        :validInput="v$.confirmPassword.$invalid"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import InputField from "@/components/InputField.vue";
import useVuelidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";

export default defineComponent({
  name: "Home",
  components: {
    InputField,
  },
  setup() {
    const firstName = ref<string>("");
    const lastName = ref<string>("");
    const password = ref<string>("");
    const confirmPassword = ref<string>("");
    const email = ref<string>("");
    return {
      firstName,
      lastName,
      password,
      confirmPassword,
      email,
      v$: useVuelidate(),
    };
  },
  methods: {
    updateFirstName(firstName: string) {
      this.firstName = firstName;
    },
    updateLastName(lastName: string) {
      this.lastName = lastName;
    },
    updateEmail(email: string) {
      this.email = email;
    },
    updatePassword(password: string) {
      this.password = password;
    },
    updateConfirmPassword(confirmPassword: string) {
      this.confirmPassword = confirmPassword;
    },
  },
  validations() {
    return {
      firstName: {
        required: helpers.withMessage("This field cannot be empty", required),
      },
      lastName: { required },
      email: { required, email },
      password: { required },
      confirmPassword: { required },
    };
  },
});
</script>
<style scoped>
.input {
  margin-bottom: 20px;
  width: 200px;
}
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
