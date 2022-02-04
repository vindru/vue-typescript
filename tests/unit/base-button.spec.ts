import { shallowMount } from "@vue/test-utils";
import BaseButton from "@/components/base-button/index.vue";
import TheLoader from "@/components/base-button/index.vue";

describe("Button.vue", () => {
  const i18n = {
    mocks: {
      $t: (msg: string) => msg,
    },
  };

  it("should emit onClick when button is clicked", () => {
    const wrapper = shallowMount(BaseButton, {
      props: {
        isDisabled: false,
        isLoading: false,
      },
      global: i18n,
    });
    wrapper.find("button").trigger("click");
    expect(wrapper.emitted("onClick")).toBeTruthy();
  });

  it("should not emit onClick when button is clicked", () => {
    const wrapper = shallowMount(BaseButton, {
      props: {
        isDisabled: true,
        isLoading: false,
      },
      global: i18n,
    });

    wrapper.find("button").trigger("click");
    expect(wrapper.emitted("onClick")).toBeUndefined();
  });

  it("should show loader", () => {
    const wrapper = shallowMount(BaseButton, {
      props: {
        isDisabled: false,
        isLoading: true,
      },
      global: i18n,
    });

    expect(wrapper.findComponent(TheLoader).isVisible()).toBeTruthy();
  });
});
