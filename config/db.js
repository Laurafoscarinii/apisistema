const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const dbURI = 'mongodb+srv://sistema_armarios:armario123@sistemaarmarios.egllx.mongodb.net/seu_banco_de_dados';  // A string de conexão diretamente aqui

    // Conectar ao MongoDB
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Conexão com o MongoDB estabelecida com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
    process.exit(1);  // Encerra a aplicação em caso de erro
  }
};

module.exports = connectDB;
