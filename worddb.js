
var mysql = require('mysql')
    , DATABASE = 'japenWord'
    , word_TABLE = 'japenWord'
    , NUM = 1
    , client = mysql.createConnection({
    host: 'localhost'
    , port: '3306'
    , user: 'root'
    , password: '168520'
});
client.connect();
client.query('USE ' + DATABASE);



var mysqlUtil = module.exports = {

   seletTable : function (book, res) {
       console.log("gogo");
       client.query('SELECT * FROM japenWord', function (error, result, fields) {
           if (error) {
               console.log(error);
               console.log('쿼리 문장에 오류가 있습니다.');
           } else {
               console.log(result);
           }
       });
      //client.query(
      //    'SELECT * FROM ' + book_TABLE + ' WHERE name = ?'
      //  , [book.name]
      //  , function (err, results, fields) {
      //      if (err) {
      //          throw err;
      //      }
      //      if (results.length > 0) {
      //          res.render('bookAddFail', {
      //              title: 'bookAddFail'
      //          });
      //      } else {
      //          mysqlUtil.hasBookName(book, res);
      //      }
      //  });
  }

};