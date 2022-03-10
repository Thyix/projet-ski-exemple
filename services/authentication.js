export const login = async (email, password) => {
  return await fetch("https://ski-api.herokuapp.com/login", {
    body: {
      user: email,
      password,
    },
  });
};
