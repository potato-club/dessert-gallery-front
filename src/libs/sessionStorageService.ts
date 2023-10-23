const sessionStorageService = {
  set: (key:string, value:string='') => {
    return typeof window !== 'undefined' ? sessionStorage.setItem(key, value) : null;
  },
  get: (key:string = '')=> {
    return typeof window !== 'undefined' ? sessionStorage.getItem(key) : null;
  },
  delete: (key:string = '') => {
    return typeof window !== 'undefined' ? sessionStorage.removeItem(key) : null;
  },
};

export default sessionStorageService;