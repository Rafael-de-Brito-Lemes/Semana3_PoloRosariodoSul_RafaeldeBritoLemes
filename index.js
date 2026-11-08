// Importa o Express
import express from 'express';

// Cria a aplicação
const app = express();

// Configura o EJS como mecanismo de visualização
app.set('view engine', 'ejs');

// Define a pasta onde estão os arquivos EJS
app.set('views', './views');

// Lista de times
const times = [
    {
        id: 1,
        nome: 'Grêmio',
        estadio: 'Arena do Grêmio',
        cidade: 'Porto Alegre'
    },
    {
        id: 2,
        nome: 'Internacional',
        estadio: 'Beira-Rio',
        cidade: 'Porto Alegre'
    },
    {
        id: 3,
        nome: 'Juventude',
        estadio: 'Alfredo Jaconi',
        cidade: 'Caxias do Sul'
    }
];

// Página inicial
app.get('/', (req, res) => {
    res.render('index', {
        mensagem: 'Bem-vindo ao Catálogo de Times!'
    });
});

// Página com a lista de times
app.get('/times', (req, res) => {
    res.render('times', {
        times: times
    });
});

// Página com os detalhes de um time
app.get('/times/:id', (req, res) => {

    const id = Number(req.params.id);

    const time = times.find((time) => time.id === id);

    if (time) {
        res.render('detalhe', {
            time: time
        });
    } else {
        res.send('Time não encontrado.');
    }

});

// Inicia o servidor
app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000!');
});