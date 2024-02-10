export const useLocalStorage = (key: string) => {
  const setItemToLs = (value: unknown) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      // console.log(error);
    }
  };

  const getItemFromLS = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      // console.log(error);
    }
  };

  return { setItemToLs, getItemFromLS };
};
