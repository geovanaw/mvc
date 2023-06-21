import express from 'express';
import index from './routes/index.js'

const app = express(); // esta variável recebe o express e será usada em outros arquivos //

app.use(express.json());
app.use("/", index); // essa barra significa que o index será a "página inicial/padrão", //


export default app // usado para exportar a const app//