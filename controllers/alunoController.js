const mongoose = require('mongoose');
const Aluno = require('../models/aluno'); // Verifique se o caminho está correto

// Criar Aluno
exports.criarAluno = async (req, res) => {
  try {
    const { nome, email, matricula, telefone, status_pagamento } = req.body;

    // Verificação básica
    if (!nome || !email || !matricula) {
      return res.status(400).json({ erro: 'Dados inválidos ou incompletos.' });
    }

    // Verifica se o aluno já existe
    const alunoExistente = await Aluno.findOne({ email });
    if (alunoExistente) {
      return res.status(400).json({ erro: 'Usuário já cadastrado.' });
    }

    // Criação do aluno
    const novoAluno = new Aluno({
      nome,
      email,
      matricula,
      telefone: telefone || null, // Adiciona telefone apenas se fornecido
      status_pagamento: status_pagamento || false, // Define false se não fornecido
    });

    await novoAluno.save();

    res.status(201).json({ mensagem: 'Aluno cadastrado com sucesso!', aluno: novoAluno });
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: 'Erro no servidor.' });
  }
};



exports.editarAluno = async (req, res) => {
  try {
    const aluno = await Aluno.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!aluno) {
      return res.status(404).send({ error: 'Aluno não encontrado' });
    }
    res.send(aluno);
  } catch (error) {
    res.status(400).send({ error: 'Erro ao editar aluno', details: error.message });
  }
};

exports.deletarAluno = async (req, res) => {
  try {
    const alunoDeletado = await Aluno.findByIdAndDelete(req.params.id);
    if (!alunoDeletado) {
      return res.status(404).send({ error: 'Aluno não encontrado' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).send({ error: 'Erro ao deletar aluno', details: error.message });
  }
};

exports.listarAlunos = async (req, res) => {
  try {
    const alunos = await Aluno.find();
    res.send(alunos);
  } catch (error) {
    res.status(500).send({ error: 'Erro ao listar alunos', details: error.message });
  }
};


