const bcrypt = require('bcryptjs');

const users = [
   {
      name: 'Admin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('admin!@#123', 10),
      isAdmin: true,
   },
   {
      name: 'John Doe',
      email: 'john@example.com',
      password: bcrypt.hashSync('john!@#123', 10),
   },
   {
      name: 'Jane Doe',
      email: 'jane@example.com',
      password: bcrypt.hashSync('jane!@#123', 10),
   },
   {
      name: 'Phyntom A',
      email: 'phyntom@gmail.com',
      password: bcrypt.hashSync('Mespeloua!@#123', 10),
   },
];

module.exports = users;
