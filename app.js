const express = require('express');
const app = express();


app.post('/users/register', (req, res) =>{
  // 유저 등록
});
app.delete('/users/:id', (req, res) =>{
  // 유저 삭제
});
app.post('/auth/login', (req, res) =>{
  // 로그인 인증
});
app.get('/auth/check', (req, res) =>{
  // 인증 확인
})

app.listen(3000, () => {
  console.log('3000 포트 열기 !');
});