var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/quiz", function (req, res) {
    usuarioController.quiz(req, res);
});

router.get("/rankgeral", function (req, res) {
    usuarioController.rankgeral(req, res);
});

router.get("/puxarerroacerto", function (req, res) {
    usuarioController.puxarerroacerto(req, res);
});

module.exports = router;