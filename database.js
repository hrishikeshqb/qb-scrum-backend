const mongoose = require('mongoose');
const url = 'mongodb://qbscrum:qburst123@ds261660.mlab.com:61660/qbscrum';

class Database {
  constructor() {
    this._connect()
  }
_connect() {
     mongoose.connect(url)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}
module.exports = new Database()
