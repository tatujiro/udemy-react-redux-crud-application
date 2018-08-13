import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return<div><h1>hello world</h1></div>
//   }
// }
// class App extends Component {
// render(){
//   return React.createElement(
//      "h1",
//      null,
//      "hello world!"
//   );
// }
// }
// class App extends Component {
//   render(){
//    return(
//      <React.Fragment>
//      <label>far</label>
//      <input type="text" onClick={()=>{console.log("hello ! clicked")}}/> ;
//      </React.Fragment>
//    )
// }
// }

class App extends Component{
  render(){
  return(
    <React.Fragment>
      <Cat />
      <Cat />
      <Cat />
  </React.Fragment>
  )
}
}
// const App = () => {
//   return(
//     <div>
//       <Cat />
//       <Cat />
//       <Cat />
//   </div>
//   )
// }
const Cat = () => {
  return <div>Meow!</div>
}
export default App;
