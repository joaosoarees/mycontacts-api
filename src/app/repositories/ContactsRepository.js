const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'João',
    email: 'jsoareez@gmail.com',
    phone: '16992883774',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
