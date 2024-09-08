const bcript = require('bcrypt');

const password = "Mongo db";

// const bcriptedPassword = bcript.hashSync(password, 10);

console.log(bcript.compareSync(password, '$2b$10$2YVX0mxz3ew4uKmL1akWXOsAWQtx5.o9budUCS4pfRvW5/JVBkA5u'));