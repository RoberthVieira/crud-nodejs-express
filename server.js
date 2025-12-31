import express from 'express';

const server = express();

//Permite que o express receba um json no metodo post
server.use(express.json());

const cursos = ["NodeJS", "VueJS", "TypeScript", "Nuxt"]

server.get("/cursos", (req, res) => {
    return res.json(cursos)
})

server.get("/cursos/:index", (req,res) => {

    const { index } = req.params;

    return res.json(cursos[index]);
});

//CRIANDO UM NOVO CURSO
server.post("/cursos", (req,res) => {
    const name = req.body.name;
    cursos.push(name);

    return res.json(cursos);
})

//ATUALIZANDO UM CURSO
server.put("/cursos/:index", (req, res) => {
    const index = req.params.index;
    const name = req.body;

    cursos[index] = name;
    return res.json(cursos);
})


//DELETANDO ALGUM CURSO
server.delete("/cursos/:index", (req, res) => {
    const {index} = req.params;

    cursos.splice(index, 1)
    res.send()
})

server.listen(3000)