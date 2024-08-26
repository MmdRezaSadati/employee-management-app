const setItem = (key: string, value: any) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
};
const getItem = (key: string) => {
  if (typeof window !== "undefined") {
    if (window.localStorage.getItem(key))
      return JSON.parse(window.localStorage.getItem(key)!);
  }
  return false;
};
const getItemGeneric = (key: string) => {
  if (typeof window !== "undefined") {
    if (window.localStorage.getItem(key))
      return window.localStorage.getItem(key);
  }
  return false;
};
const setItemGeneric = (key: string, value: any) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(key, value);
  }
};
const removeItem = (key: string) => {
  if (typeof window !== "undefined") {
    if (getItem(key) === false) return false;
    window.localStorage.removeItem(key);
  }
};
const clearStorage = () => {
  if (typeof window !== "undefined") {
    window.localStorage.clear();
  }
};

export {
  setItem,
  getItem,
  removeItem,
  clearStorage,
  getItemGeneric,
  setItemGeneric,
};
