const endpoint = "http://localhost:4000/api/v1/patterns";

const getAll = () => {
  return fetch(`${endpoint}`, {
    credentials: "include",
    method: "GET",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const getOne = (patternId) => {
  return fetch(`${endpoint}/${patternId}`, {
    credentials: "include",
    method: "GET",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const create = (userId, newPattern) => {
  return fetch(`${endpoint}/new/${userId}`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPattern),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const update = (patternId, updatedPattern) => {
  return fetch(`${endpoint}/${patternId}`, {
    credentials: "include",
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedPattern),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const destroy = (patternId) => {
  return fetch(`${endpoint}/${patternId}`, {
    credentials: "include",
    method: "DELETE",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export default {
  getAll,
  getOne,
  create,
  update,
  destroy,
};
