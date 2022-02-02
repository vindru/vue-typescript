import { shallowMount } from "@vue/test-utils";
import Button from "@/components/Button.vue";

describe("Button.vue", () => {
  const i18n = {
    mocks: {
      $t: (msg: string) => msg,
    },
  };

  it("renders message when component is created", () => {
    const wrapper = shallowMount(Button, {
      props: {
        message: "",
      },
      global: i18n,
    });
    expect(wrapper.vm.$options.name).toMatch("Button");
  });

  it("emitting onClick when button is clicked", () => {
    const wrapper = shallowMount(Button, {
      props: {
        message: "",
      },
      global: i18n,
    });
    wrapper.find("button").trigger("click");
    expect(wrapper.emitted("onClick")).toBeTruthy();
  });

  it("renders props.message when passed", () => {
    const wrapper = shallowMount(Button, {
      props: {
        message: "Test",
      },
      global: i18n,
    });
    expect(wrapper.props().message).toBe("Test");
    expect(wrapper.find("button").html()).toContain("Test");
  });
});
