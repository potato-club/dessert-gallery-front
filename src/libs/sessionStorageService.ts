const sessionStorageService = {
  set: (key:string, value:string='') => {
    return typeof window !== 'undefined' ? sessionStorage.setItem(key, value) : null;
  },
  get: (key:string = '')=> {
    const data = typeof window !== 'undefined' ? sessionStorage.getItem(key) : null;
    if(data){
      const storedObject = JSON.parse(data);
      const accessToken = storedObject?.JWTDataState?.accessToken;
      if (accessToken) {
        return accessToken
      }
    }
    return typeof window !== 'undefined' ? sessionStorage.getItem(key) : null;
  },
  delete: (key:string = '') => {
    return typeof window !== 'undefined' ? sessionStorage.removeItem(key) : null;
  },
};

export default sessionStorageService;