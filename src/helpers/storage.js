export default {
  get(key) {
    const value = localStorage.getItem(key);

    if (value === null) {
      return undefined;
    }

    try {
      return JSON.parse(value);
    } catch (error) {
      console.log(error);

      return value;
    }
  },

  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  remove(key) {
    localStorage.removeItem(key);
  },
};
