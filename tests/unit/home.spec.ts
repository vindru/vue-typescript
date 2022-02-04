import { shallowMount } from "@vue/test-utils";
import Home from "@/views/home/index.vue";
import InputField from "@/components/base-input-field/index.vue";
import BaseButton from "@/components/base-button/index.vue";
import useVuelidate from "@vuelidate/core";
import { User } from "@/types/interface";
import { ref } from "vue";
import { ScreenState } from "@/types";

describe("Home.vue", () => {
  const i18n = {
    mocks: {
      $t: (msg: string) => msg,
    },
  };

  it("renders message when component is created", () => {
    const wrapper = shallowMount(Home, { global: i18n });
    expect(wrapper.vm.$options.name).toMatch("Home");
  });

  it("should submit if all fields are valid", async () => {
    const wrapper = shallowMount(Home, {
      setup() {
        const user = ref<User>({
          firstName: "test",
          lastName: "test",
          email: "test@test.com",
          password: "asdasd",
          confirmPassword: "asdasd",
        });
        const state = ref<ScreenState>(ScreenState.DEFAULT);
        return {
          user,
          v$: useVuelidate(),
          state,
        };
      },
      global: i18n,
    });

    expect(wrapper.vm.registerUser()).toBe(true);
  });

  it("should not submit if all fields are empty", async () => {
    const wrapper = shallowMount(Home, {
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
      global: i18n,
    });

    expect(wrapper.vm.registerUser()).toBe(false);
  });

  it("should not submit if email is invalid", async () => {
    const wrapper = shallowMount(Home, {
      setup() {
        const user = ref<User>({
          firstName: "test",
          lastName: "test",
          email: "test",
          password: "asdasd",
          confirmPassword: "asdasd",
        });
        const state = ref<ScreenState>(ScreenState.DEFAULT);
        return {
          user,
          v$: useVuelidate(),
          state,
        };
      },
      global: i18n,
    });
    expect(wrapper.vm.registerUser()).toBe(false);
  });

  it("should not submit if password length is less that 6", async () => {
    const wrapper = shallowMount(Home, {
      setup() {
        const user = ref<User>({
          firstName: "test",
          lastName: "test",
          email: "test@test.com",
          password: "asdas",
          confirmPassword: "asdas",
        });
        const state = ref<ScreenState>(ScreenState.DEFAULT);
        return {
          user,
          v$: useVuelidate(),
          state,
        };
      },
      global: i18n,
    });

    expect(wrapper.vm.registerUser()).toBe(false);
  });

  it("should not submit if confirm password do not match", async () => {
    const wrapper = shallowMount(Home, {
      setup() {
        const user = ref<User>({
          firstName: "test",
          lastName: "test",
          email: "test@test.com",
          password: "asdasd",
          confirmPassword: "asdasf",
        });
        const state = ref<ScreenState>(ScreenState.DEFAULT);
        return {
          user,
          v$: useVuelidate(),
          state,
        };
      },
      global: i18n,
    });

    expect(wrapper.vm.registerUser()).toBe(false);
  });

  it("should not submit if first name is invalid", async () => {
    const wrapper = shallowMount(Home, {
      setup() {
        const user = ref<User>({
          firstName: "",
          lastName: "test",
          email: "test@test.com",
          password: "asdasd",
          confirmPassword: "asdasd",
        });
        const state = ref<ScreenState>(ScreenState.DEFAULT);
        return {
          user,
          v$: useVuelidate(),
          state,
        };
      },
      global: i18n,
    });

    expect(wrapper.vm.registerUser()).toBe(false);
  });

  it("should not submit if last name is invalid", async () => {
    const wrapper = shallowMount(Home, {
      setup() {
        const user = ref<User>({
          firstName: "test",
          lastName: "",
          email: "test@test.com",
          password: "asdasd",
          confirmPassword: "asdasd",
        });
        const state = ref<ScreenState>(ScreenState.DEFAULT);
        return {
          user,
          v$: useVuelidate(),
          state,
        };
      },
      global: i18n,
    });

    expect(wrapper.vm.registerUser()).toBe(false);
  });

  it("should submit on button click event", async () => {
    const wrapper = shallowMount(Home, {
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
      global: i18n,
    });

    await wrapper.findComponent(BaseButton).vm.$emit("onClick");
    expect(wrapper.vm.state).toBe(ScreenState.LOADING);
  });

  it("should update first name on event from firstName InputField", async () => {
    const wrapper = shallowMount(Home, {
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
      global: i18n,
    });

    await wrapper
      .findComponent(InputField)
      .vm.$emit("changeValue", "test", "firstName");
    expect(wrapper.vm.user.firstName).toBe("test");
  });

  it("should update last name on event from lastName InputField", async () => {
    const wrapper = shallowMount(Home, {
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
      global: i18n,
    });

    await wrapper
      .findComponent(InputField)
      .vm.$emit("changeValue", "test", "lastName");
    expect(wrapper.vm.user.lastName).toBe("test");
  });

  it("should update email on event from email InputField", async () => {
    const wrapper = shallowMount(Home, {
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
      global: i18n,
    });

    await wrapper
      .findComponent(InputField)
      .vm.$emit("changeValue", "test@test.com", "email");
    expect(wrapper.vm.user.email).toBe("test@test.com");
  });

  it("should update password on event from password InputField", async () => {
    const wrapper = shallowMount(Home, {
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
      global: i18n,
    });

    await wrapper
      .findComponent(InputField)
      .vm.$emit("changeValue", "asdasd", "password");
    expect(wrapper.vm.user.password).toBe("asdasd");
  });

  it("should update confirmPassword on event from confirmPassword InputField", async () => {
    const wrapper = shallowMount(Home, {
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
      global: i18n,
    });

    await wrapper
      .findComponent(InputField)
      .vm.$emit("changeValue", "asdasd", "confirmPassword");
    expect(wrapper.vm.user.confirmPassword).toBe("asdasd");
  });
});
