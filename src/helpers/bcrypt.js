const bcrypt = require('bcrypt');

const hashPassword = (password) => {
  if (!password) {
    throw new Error('error getting password');
  }

  const salt = bcrypt.genSaltSync(10);

  return bcrypt.hashSync(password, salt);
};

const comparePassword = (providedPassword, hash) => bcrypt.compareSync(providedPassword, hash);
module.exports = { hashPassword, comparePassword };
