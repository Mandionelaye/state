import React, {Component} from 'react';
import Profile from './profill/profile';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

export default class App extends Component {
   constructor(props){
     super(props);
     this.state={person:{
      FullName:"Seydina Mandione mbaye", 
      Bio:"Developpeur Full Stack et aussi etudiant en informatique de developpement d'application web mobile a l'Universite Virtuelle du Senegal et a Gomycode. J'ai 24ans et je suis en 2e annee de licence.", 
      imgSrc: '/img1.jpg', 
      Profession:"Developpeur Full Stack",
      show:false, }
   }}
   modif=()=>this.setState({show:!this.state.show});
 
  render(){
  return (
    <>
    <div className="body">
    <div className="container">
      <button className='btn btn-outline-primary m-3'onClick={this.modif} >bascule</button>
         { this.state.show ? 
              <Profile fullName={this.state.person.FullName} bio={this.state.person.Bio} profession={this.state.person.Profession} img={this.state.person.imgSrc}></Profile>
          :null
         }
         </div>
         </div>
    </>

  );
}
}
