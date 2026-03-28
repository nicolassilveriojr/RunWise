const express = require('express');
const cors = require('cors'); // <--- Importante
const app = express();

app.use(cors()); // <--- Isso libera o acesso para o Frontend
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ mensagem: 'API e Frontend conectados!' });
});

app.listen(3000, () => console.log('Servidor ON'));
