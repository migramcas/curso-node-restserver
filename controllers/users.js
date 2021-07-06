const { response, request } = require("express");

const getUser = (req = request, res = response) => {
  //const params = req.query;
  const { q, name, page = 1, limit = 10, apiKey } = req.query;

  res.json({
    msg: "GET APi controller",
    params,
  });
};

const patchUser = (req, res = response) => {
  res.json({
    ok: true,
    msg: "patch APi",
  });
};

const updateUser = (req, res = response) => {
  const id = req.params.id;

  res.json({
    ok: true,
    msg: "patch APi",
  });
};

const createUser = (req, res = response) => {
  const { name, age } = req.body; //se saca la data que mandó el usuario

  res.status(201).json({
    ok: true,
    name,
    age,
  });
};

const deleteUser = (req, res = response) => {
  res.json({
    ok: true,
    msg: "delete APi",
  });
};

module.exports = {
  getUser,
  patchUser,
  updateUser,
  createUser,
  deleteUser,
};
