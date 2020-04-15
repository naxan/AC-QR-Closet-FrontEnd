const endpoint = "http://localhost:4000/api/v1/users";

const getAll = () => {
  return fetch(`${endpoint}`, {
    credentials: "include",
    method: "GET",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const getOne = (userId) => {
  return fetch(`${endpoint}/${userId}`, {
    credentials: "include",
    method: "GET",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const update = (userId, editedUser) => {
  return fetch(`${endpoint}/${userId}`, {
    credentials: "include",
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(editedUser),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const destroy = (userId) => {
  return fetch(`${endpoint}/${userId}`, {
    credentials: "include",
    method: "DELETE",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export default {
  getAll,
  getOne,
  update,
  destroy,
};
