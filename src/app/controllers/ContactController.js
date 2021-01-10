class ContactController {
  index(request, response) {
    // listar todos os registros
    response.send('Send from contact controller');
  }

  show() {
    // obter um registro
  }

  store() {
    // criar um novo registro
  }

  update() {
    // editar um registro
  }

  delete() {
    // deletar um registro
  }
}

module.exports = new ContactController();
