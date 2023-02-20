import Aluno from '../models/Aluno';

class AlunoController {
  async index(_, res) {
    try {
      const alunos = await Aluno.findAll();
      return res.json(alunos);
    } catch (error) {
      return res.status(400).json({
        errors: ['Não foi possível buscar alunos'],
      });
    }
  }

  async store(req, res) {
    try {
      const novoAluno = await Aluno.create(req.body);
      return res.status(200).json(novoAluno);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando id'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe!'],
        });
      }

      return res.status(200).json(aluno);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando id'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe!'],
        });
      }

      await aluno.destroy();
      return res.json(1);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando id'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe!'],
        });
      }

      const novosDados = await aluno.update(req.body);
      return res.json(novosDados);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}

export default new AlunoController();
