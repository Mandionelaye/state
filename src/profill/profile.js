import React, {useState,useEffect} from 'react';
import propTypes from 'prop-types'; 
import image2 from "./photo.jpeg";


 function Profile({fullName, bio, profession, img}) {
  const [timer, setTimer]= useState(0);

       useEffect(()=>{
         const intervalID = setInterval(() => setTimer(timer + 1), 1000);
         return ()=>clearInterval(intervalID);
       });

    

    const stylename = {color:"rgb(120, 48, 183)",fontWeight: "bolder",fontSize: "30px",};
    const styleprfs={ color:'rgb(218, 255, 11)',fontWeight:'bolder'};
    const divestyle={  paddingTop: "10px",paddingLeft:"5px"};
    const block1 = {  display: "flex", flexDirection: "row",  paddingTop: "30px"};
    const block2 = {  display: "flex",flexDirection: "column",justifyContent: "center"};
    const img2 = { minWidth: "70px"};
    const img1 = { width: "18vmin", borderRadius: "10px"};
     const time = {color: "rgb(0, 140, 255)" };
    return(
      <>
     <div className="row">
        <div className="col col-md-12" style={block1}>
          <img src={img} style={img1} alt="img" />
        <div style={divestyle}>   
        <h1 style={stylename}>{fullName}</h1>
        <h3 style={styleprfs}>{profession}</h3>
        <p style={time}> l'intervalle de temps depuis le montage du dernier composant est de : {timer}s</p>
        </div>
        </div>
        <div className='col-md-12' style={block2}>
        <h4>{bio}</h4>
        <img src={image2} style={img2}  alt="img2" />
        </div>
    </div>
    </>
    );
}

// class Profile extends Component{
    
//   constructor(props){
//       super(props);
//     this.state = {
//       timer: 0,
//     };

//   }
   

//   componentDidMount(){
//   this.intervalID = setInterval(() => this.tictac(), 1000);
//     }
//    componentWillUnmount(){
//      clearInterval(this.intervalID);
//    }
 
//   tictac(){
//    this.setState({
//     timer: this.state.timer + 1
//    })
//   }

//   render(){


//  };
// }

Profile.propTypes={
    fullName:propTypes.string,
    bio:propTypes.string,
    profession:propTypes.string,
    handlename:propTypes.func,
    img:propTypes.string,
};
export default Profile;