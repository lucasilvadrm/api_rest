import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Vitória',
      sobrenome: 'Costa',
      email: 'vitoria@gmail.com',
      idade: 21,
      peso: 62,
      altura: 1.61,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
