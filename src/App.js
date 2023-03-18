import React, {useState, useEffect,useRef} from 'react';
import Profile from './profill/profile';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

export default function App(){
   
const [FullName,setFullName]= useState("Seydina Mandione mbaye");
const [Bio,setBio]= useState("Developpeur Full Stack et aussi etudiant en informatique de developpement d'application web mobile a l'Universite Virtuelle du Senegal et a Gomycode. J'ai 24ans et je suis en 2e annee de licence.");
const [imgSrc,setimgSrc]= useState('/img1.jpg');
const [Profession,setProfession]= useState("Developpeur Full Stack");
const [show,setShow]= useState(false);
const modif=()=>setShow(!show);
const showdefault = useRef(false);


  return (
    <>
    <div className="body">
    <div className="container">
      <button className='btn btn-outline-primary m-3'onClick={modif} >bascule</button>
         { show ? 
              <Profile fullName={FullName} bio={Bio} profession={Profession} img={imgSrc}></Profile>
          :null
         }
         </div>
         </div>
    </>

  );
}

// export default class App extends Component {
//    constructor(props){
//      super(props);
//      this.state={person:{
//       FullName:"Seydina Mandione mbaye", 
//       Bio:"Developpeur Full Stack et aussi etudiant en informatique de developpement d'application web mobile a l'Universite Virtuelle du Senegal et a Gomycode. J'ai 24ans et je suis en 2e annee de licence.", 
//       imgSrc: '/img1.jpg', 
//       Profession:"Developpeur Full Stack",
//       show:false, }
//    }}
//    modif=()=>this.setState({show:!this.state.show});
 
//   render(){

// }
// }
