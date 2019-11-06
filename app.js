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
        'token': 'this_is_token!',
        'refresh_token': 'refresh_token!'
      },
      'status': 200,
      'msg': 'success'
  });
})

app.listen(3000, () => {
  console.log('3000 포트 열기 !');
});