import { useStaticRendering } from "mobx-react";
// import AuthStore from "./authStore";

const isServer = typeof window === "undefined";
useStaticRendering(isServer);

let store = null;

export default function initializeStore(initialData) {
  if (isServer) {
    return {
      // authStore: new AuthStore()
    };
  }
  if (store === null) {
    store = {
      // authStore: new AuthStore()
    };
  }

  return store;
}
