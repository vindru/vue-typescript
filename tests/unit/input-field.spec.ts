import { shallowMount } from "@vue/test-utils";
import InputField from "@/components/InputField.vue";

describe("InputField.vue", () => {
  const i18n = {
    mocks: {
      $t: (msg: string) => msg,
    },
  };

  it("renders message when component is created", () => {
    const wrapper = shallowMount(InputField, {
      props: {
        placeholder: "Test",
        name: "testing",
        type: "text",
        invalidInput: false,
        errorMessage: "Error",
      },
      global: i18n,
    });
    expect(wrapper.vm.$options.name).toMatch("InputField");
  });

  it("renders props when passed", () => {
    const wrapper = shallowMount(InputField, {
      props: {
        placeholder: "Test",
        name: "testing",
        type: "text",
        invalidInput: false,
        errorMessage: "Error",
      },
      global: i18n,
    });
    expect(wrapper.props().placeholder).toBe("Test");
    expect(wrapper.props().type).toBe("text");
    expect(wrapper.props().invalidInput).toBe(false);
    expect(wrapper.props().errorMessage).toBe("Error");
    expect(wrapper.props().name).toBe("testing");
  });

  it("emitting changeValue with input field value on change of input value", async () => {
    const wrapper = shallowMount(InputField, {
      props: {
        placeholder: "Test",
        type: "text",
        name: "testing",
        invalidInput: false,
        errorMessage: "Error",
      },
      global: i18n,
    });
    wrapper.find("input").trigger("input");
    expect(wrapper.emitted("changeValue")).toBeTruthy();
    const textInput = wrapper.find("input");
    await textInput.setValue("test value");
    expect(wrapper.find("input").element.value).toBe("test value");
    expect(wrapper.emitted("changeValue")?.length).toBe(2);
    expect(wrapper.emitted().changeValue[1]).toEqual(["test value", "testing"]);
  });

  it("renders error message if validInput is passed true", () => {
    const wrapper = shallowMount(InputField, {
      props: {
        placeholder: "Test",
        type: "text",
        name: "testing",
        invalidInput: true,
        errorMessage: "Error Message",
      },
      global: i18n,
    });
    expect(wrapper.find("span").html()).toContain("Error Message");
  });

  it("renders error message if validInput is passed false", () => {
    const wrapper = shallowMount(InputField, {
      props: {
        placeholder: "Test",
        type: "text",
        invalidInput: false,
        errorMessage: "Error Message",
        name: "testing",
      },
      global: i18n,
    });
    expect(wrapper.find(".errorMessage")).toBeTruthy();
    expect(wrapper.find(".errorMessage").exists()).toBe(false);
  });
});
