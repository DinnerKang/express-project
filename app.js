const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const dbConfig = require('./config');
const connection = mysql.createConnection(dbConfig.SQL);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());

app.get('/', (req, res) => {
  connection.query(`SELECT * from user`, function (error, results, fields) {
    if (error) {
      console.log(error);
    }
    return res.json(results);
  });
});

app.post('/users/register', (req, res) => {
  // 유저 등록
  connection.query(`INSERT INTO `)
});
app.delete('/users/:id', (req, res) => {
  // 유저 삭제
});
app.post('/auth/login', (req, res) => {
  // 로그인 인증
});
app.get('/auth/check', (req, res) => {
  // 인증 확인
})

app.listen(3000, () => {
  console.log('3000 포트 열기 !');
});