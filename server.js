const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
  res.send([
    {
     'id': 1,
     'image': 'https://placeimg.com/64/64/any',
     'name': '키아나',
     'birthday': '950518',
     'gender' : '여자',
     'job' : '의적'
    },
    {
      'id': 2,
      'image': 'https://placeimg.com/32/32/any',
      'name': '뚱이',
      'birthday': '910609',
      'gender' : '남자',
      'job' : '포켓몬트레이너'
     },
     {
      'id': 3,
      'image': 'https://placeimg.com/64/64/any',
      'name': '다니엘',
      'birthday': '640529',
      'gender' : '남자',
      'job' : '프론트엔드 개발자'
     }
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

