const express = require('express');
const cors = require('cors');

const server = express();
server.use(express.json());
server.use(cors());

const TaskRoutes = require('./routes/TaskRoutes');
server.use('/task', TaskRoutes);

server.listen(3333, () => {
    console.log('Pau Na Maquina');
});