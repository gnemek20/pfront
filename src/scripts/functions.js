import router from "@/router/index.js";

export default {
  install(Vue) {
    Vue.prototype.$push = functions.push;
    Vue.prototype.$reload = functions.reload;
    Vue.prototype.$query = functions.query;
  }
}

export const functions = {
  push: (location) => {
    return router.push(location).catch(() => {});
  },
  reload: () => {
    return router.go();
  },
  query: (location, query) => {
    return router.push({ path: location, query: query }).catch(() => {});
  }
}