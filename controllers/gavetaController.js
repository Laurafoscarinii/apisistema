const Gaveta = require('../models/gaveta');

exports.criarGaveta = async (req, res) => {
  try {
    const gaveta = new Gaveta(req.body);
    await gaveta.save();
    res.status(201).send(gaveta);
  } catch (error) {
    res.status(400).send({ error: 'Erro ao criar gaveta', details: error.message });
  }
};

exports.editarGaveta = async (req, res) => {
  try {
    const gaveta = await Gaveta.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!gaveta) {
      return res.status(404).send({ error: 'Gaveta não encontrada' });
    }
    res.send(gaveta);
  } catch (error) {
    res.status(400).send({ error: 'Erro ao editar gaveta', details: error.message });
  }
};

exports.deletarGaveta = async (req, res) => {
  try {
    const gavetaDeletada = await Gaveta.findByIdAndDelete(req.params.id);
    if (!gavetaDeletada) {
      return res.status(404).send({ error: 'Gaveta não encontrada' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).send({ error: 'Erro ao deletar gaveta', details: error.message });
  }
};

exports.listarGavetas = async (req, res) => {
  try {
    const gavetas = await Gaveta.find().populate('armario_id aluno_id');
    res.send(gavetas);
  } catch (error) {
    res.status(500).send({ error: 'Erro ao listar gavetas', details: error.message });
  }
};
