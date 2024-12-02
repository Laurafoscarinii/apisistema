const express = require('express');
const alunoController = require('../controllers/alunoController');
const armarioController = require('../controllers/armarioController');
const gavetaController = require('../controllers/gavetaController');

const router = express.Router();

// Rotas para Aluno
router.put('/alunos/:id', alunoController.editarAluno);
router.delete('/alunos/:id', alunoController.deletarAluno);
router.get('/alunos', alunoController.listarAlunos);
router.post('/alunos', alunoController.criarAluno);

// Rotas para Armário
router.post('/armarios', armarioController.criarArmario);
router.put('/armarios/:id', armarioController.editarArmario);
router.delete('/armarios/:id', armarioController.deletarArmario);
router.get('/armarios', armarioController.listarArmarios);

// Rotas para Gaveta
router.post('/gavetas', gavetaController.criarGaveta);
router.put('/gavetas/:id', gavetaController.editarGaveta);
router.delete('/gavetas/:id', gavetaController.deletarGaveta);
router.get('/gavetas', gavetaController.listarGavetas);


module.exports = router;
