import { mount } from "@vue/test-utils";
import Home from "@/views/home/index.vue";
import About from "@/views/about/index.vue";
import App from "@/App.vue";
import { createRouter, createMemoryHistory } from "vue-router";
import { routes } from "../../src/router";

describe("App router tests", () => {
  it("renders Home component on /", async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes,
    });
    router.push("/");
    await router.isReady();
    const wrapper = mount(App, {
      global: {
        plugins: [router],
        mocks: {
          $t: (msg: string) => msg,
        },
      },
    });
    expect(wrapper.findComponent(Home).exists()).toBe(true);
  });

  it("renders About component on /about", async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes,
    });
    router.push("/about");
    await router.isReady();
    const wrapper = mount(App, {
      global: {
        plugins: [router],
        mocks: {
          $t: (msg: string) => msg,
        },
      },
    });
    expect(wrapper.findComponent(About).exists()).toBe(true);
  });
});
