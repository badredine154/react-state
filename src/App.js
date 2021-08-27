
import './App.css';
import badr from './badr.jpg'
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      fullName: '',
      bio: '',
      imgSrc: '',
      profession: ''
    }
  }
  show() {
    this.setState({
      fullName: 'Badredine Dhaoui',
      bio: 'Hello i am Badr',
      imgSrc: { badr },
      profession: 'Developer'
    })
  }
  render() {
    return (

      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Name : {this.state.fullName} </h1>
            <p>bio : {this.state.bio}</p>
            <img src={this.state.imgSrc}></img>
            <h2>profession : {this.state.profession}</h2>
            <button onClick={()=> this.show()}> Click here to show profile</button>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
