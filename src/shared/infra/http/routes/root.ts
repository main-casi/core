import { Router } from 'express';

const root = Router();

const welcome = {
  title: 'Você está no núcleo do CASI!',
  subtitle: `Acesse uma das plataformas em "main-casi.vercelapp.com" ou "portal-casi.vercelapp.com"`,
  repositorio:
    'Acesse os arquivos e a documentação desta aplicação em https://github.com/main-casi/core',
  criadores: {
    chapa: {
      nome: 'main.CASI',
      presidente: 'Rennan Damião',
      periodo: { inicio: 2020, fim: '-' },
    },
    autores: [
      {
        nome: 'Aaron Stiebler',
        email: 'euaaron@outlook.com',
        github: 'https://github.com/euaaron',
        ingresso: 2018,
      },
      {
        nome: 'Debora Lessa',
        email: 'deboralessadefaria@gmail.com',
        github: 'https://github.com/deboralili',
        ingresso: 2018,
      },
    ],
  },
};

root.get('', (req, res) => {
  res.send(welcome);
});

export default root;
