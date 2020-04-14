const endpoint = "http://localhost:4000/auth";

const signUp = (newUser) => {
  return fetch(`${endpoint}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const login = (currentUser) => {
  return fetch(`${endpoint}/login`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(currentUser),
  }).catch((err) => console.log(err));
};

const logout = () => {
  return fetch(`${endpoint}/logout`, {
    credentials: "include",
    method: "DELETE",
  }).catch((err) => console.log(err));
};

const verify = () => {
  return fetch(`${endpoint}/verify`, {
    credentials: "include",
    method: "GET",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export default {
  signUp,
  login,
  logout,
  verify,
};
