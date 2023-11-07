
const authorization = (token:string|null) => {
  return {
    headers: {
      Authorization: `${token}`,
    },
  };
};

export default authorization;