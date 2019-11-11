const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());

app.use('/users', require('./api/users/user'));
app.use('/auth', require('./api/auth/auth'));

app.post('/testLogin', (req, res)=>{
    return res.status(200).json({
      'data': {
        'token': 'this_is_token',
        'refresh_token': 'this_is_refresh_token'
      },
      'status': 200,
      'msg': 'success'
  });
});

app.post('/testRefreshToken', (req, res)=>{
  return res.status(200).json({
    'data':{
      'token' : 'new_token',
    },
    'status': 200,
  });
});

app.post('/testCall', (req, res)=>{
  console.log(req.headers.token);
  if(req.headers.token!=='new_token'){
    return res.status(401).json({
      'data':{
        'data' : '인증 안됨',
      },
      'status': 401,
    });
  }
  return res.status(200).json({
    'data':{
      'data' : 'test_call_success',
    },
    'status': 200,
  });
});

app.listen(3000, () => {
  console.log('3000 포트 열기 !');
});