<template>
  <div class="home">
    <div class="input">
      <InputField
        type="text"
        placeholder="First Name"
        name="firstName"
        :invalid-input="submitted && v$.user.firstName.$invalid"
        :error-message="`${$t('validationError.firstName')}`"
        @changeValue="updateUser"
      />
    </div>
    <div class="input">
      <InputField
        type="text"
        placeholder="Last Name"
        name="lastName"
        :invalid-input="submitted && v$.user.lastName.$invalid"
        :error-message="`${$t('validationError.lastName')}`"
        @changeValue="updateUser"
      />
    </div>
    <div class="input">
      <InputField
        type="email"
        placeholder="Email"
        name="email"
        :invalid-input="submitted && v$.user.email.$invalid"
        :error-message="`${$t('validationError.email')}`"
        @changeValue="updateUser"
      />
    </div>
    <div class="input">
      <InputField
        type="password"
        placeholder="Password"
        name="password"
        :invalid-input="submitted && v$.user.password.$invalid"
        :error-message="`${$t('validationError.password')}`"
        @changeValue="updateUser"
      />
    </div>
    <div class="input">
      <InputField
        type="password"
        placeholder="Confirm Password"
        name="confirmPassword"
        :invalid-input="submitted && v$.user.confirmPassword.$invalid"
        :error-message="`${$t('validationError.confirmPassword')}`"
        @changeValue="updateUser"
      />
    </div>
    <Button :message="`${$t('button.register')}`" @onClick="registerUser" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import InputField from "@/components/InputField.vue";
import Button from "@/components/Button.vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import { User } from "@/types/interface";

export default defineComponent({
  name: "Home",
  components: {
    InputField,
    Button,
  },
  setup() {
    const user = ref<User>({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    const submitted = ref<boolean>(false);
    return {
      user,
      v$: useVuelidate(),
      submitted,
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
      this.submitted = true;
      this.v$.$touch();
      if (this.v$.$invalid) {
        return false;
      }
      alert("Done!");
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
</script>
<style scoped>
.input {
  margin-bottom: 20px;
}
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
