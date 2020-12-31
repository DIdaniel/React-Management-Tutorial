import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
// import { Button, Progress } from 'semantic-ui-react';


const customers = [
  {
   'id': 1,
   'image': 'http://placeimg.com/64/64/any',
   'name': '키아나',
   'birthday': '950518',
   'gender' : '여자',
   'job' : '의적'
  },
  {
    'id': 2,
    'image': 'http://placeimg.com/64/64/2',
    'name': '뚱이',
    'birthday': '910609',
    'gender' : '남자',
    'job' : '포켓몬트레이너'
   },
   {
    'id': 3,
    'image': 'http://placeimg.com/64/64/3',
    'name': '다니엘',
    'birthday': '640529',
    'gender' : '남자',
    'job' : '프론트엔드 개발자'
   }
]

class App extends Component {
  render(){
    return (
      <>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
      </>
     );
  }
}

export default App;
