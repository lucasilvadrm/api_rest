import User from '../models/User';

class UserController {
  // post -> cria um novo usuário
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, name, email } = novoUser;
      return res.json({ id, name, email });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  // index - GET -> lista todos os usuários
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  // Show - GET -> mostra um usuário
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      const { id, nome, email } = user;

      return res.json({ id, nome, email });
    } catch (error) {
      return res.json(null);
    }
  }

  // Update - PATCH/PUT -> atualiza um usuário
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      const novosDados = await user.update(req.body);
      const { id, name, email } = novosDados;
      return res.json({ id, name, email });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  // Delete - DELETE -> apaga um usuário
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      await user.destroy();
      return res.json(null);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
