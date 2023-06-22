import Router from 'express';

const router = Router(); // função usada no express que roteia os caminhos utilizados na API //

router.get("/", function (req, res) {       //A barra indica que é a página padrão (chamada de end point), vai sempre mostrar a mensagem de boas vindas. Ex: blablabla.com.br/ //
    res.status(200).send({                  // res = status = resposta da requisição //
        title: "Hello World! n/Bem vindas a turma Devas do Full Stack!",
        version: "1.0.0"
    })
})

export default router;