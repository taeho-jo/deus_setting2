import { useStaticRendering } from "mobx-react";

const isServer = typeof window === "undefined";
useStaticRendering(isServer);

let store = null;

export default function initializeStore(initialData) {
  if (isServer) {
    return {};
  }
  if (store === null) {
    store = {};
  }

  return store;
}
