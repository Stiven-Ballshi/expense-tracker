export const useLocalStorage = (key: string) => {
  const setItemToLs = (value: unknown) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      // console.log(error);
    }
  };

  const getItemFromLS = (customKey?: string) => {
    try {
      const item = localStorage.getItem(key ? key : (customKey as string));
      return item ? JSON.parse(item) : null;
    } catch (error) {
      // console.log(error);
    }
  };

  return { setItemToLs, getItemFromLS };
};
