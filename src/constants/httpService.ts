const config = {
  authorization: (token: string) => {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  },
};

export default config;