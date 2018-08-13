import React, { } from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    {name:"Taro" ,age:20},
    {name:"Hanako", age:10},
  ]
  return(
    <div>
      {
        profiles.map((profiles,index)=>{
          return <User name={profiles.name} age={profiles.age} key={index}/>
        })
      }
    </div>
  )
}
const User = (props) => {
  return <div>Hi! I am {props.name} , {props.age} years old!</div>
}
User.propTypes ={
  name:PropTypes.string,
  age:PropTypes.number.isRequired
}
export default App;
