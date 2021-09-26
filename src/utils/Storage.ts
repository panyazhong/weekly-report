export const setStorage = (name: string, val: string) => {
  localStorage.setItem(name, val);
};

export const getStorage = (name: string) => {
  return localStorage.getItem(name);
};

export const removeStorage = (name: string) => {
  localStorage.removeItem(name);
};
