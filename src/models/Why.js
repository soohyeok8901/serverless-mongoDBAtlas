const mongoose = require('mongoose');
const Why = new mongoose.Schema({
  title: String,
  description: String
});
// global.Todo = global.Todo || mongoose.model('Todo', Todo);
// module.exports = global.Todo;
module.exports = mongoose.model('Why', Why);
