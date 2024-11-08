import ReactDOM from 'react-dom/client';

import "./style.css"

import one from "./assests/images/search.png";

import two from "./assests/images/p1.png"
import three from "./assests/images/p2.jpg"
import four from "./assests/images/p3.jpg"
import star from "./assests/images/star-24.ico"
import five from "./assests/images/p5.avif"
import six from "./assests/images/p6.jpg"


const root = ReactDOM.createRoot(document.getElementById('root'));


function Search(){
  return(
    <div style={{padding:"10px",display:"flex", justifyContent:"space-around",backgroundColor:"white", width:"400px", margin:"10px", border:'2px solid black'}}>
      <input style={{border:"none", color:"whitesmoke",width:"100%"}} placeholder="Search ..."></input>
      <img src={one} alt='see'></img>

    </div>
    

  )
}


function Content(props)
{
  return(
    <div style={{backgroundColor:"white",marginLeft:"10px", padding:"10px", display:'flex',justifyContent:"space-around" ,alignItems:'center', width:"400px",border:"2px solid black"}}>
      <div >
      <img style={{width:"70px", height:"70px",borderRadius:"100px"}} src={props.photo} alt='pick'></img>

      </div>
      <div style={{}} >
      <h2 style={{color:"darkslategrey"}}>{props.name}</h2>
      <p>{props.content}</p>

      </div>
      <div>
        <p> {props.time} </p>
        <img src={star} alt="star" />
      </div>
       
     

    </div>

  )
}


var details =[
  {
    photo:two,
    name:"Jessica Koel",
    content:"Hey,Joel,i here to help you out please..",
    time:"10.30"
  },

{
  photo:three,
  name:"Komeial Bolger",
  content:"I will send all documents as soon as..",
  time:"12.16"
},
{
  photo:four,
  name:"Tamaara Suiale",
  content:"Are you going business trip next week..",
  time:"2.45"
},
{
  photo:five,
  name:"Sam Nielson",
  content:"I suggest to start new business soon",
  time:"3.50"
},
{
  
  photo:six,
  name:"Patrick  Koeler",
  content:"Welcome to our Business",
  time:"6.30"
}
]


root.render(
  <div>
    {
      <Search></Search>

    }
    {
      details.map(function(item)
    {
      return <div>
         
      <Content photo={item.photo} name={item.name} content={item.content}  time={item.time}></Content>
      </div>
    })
    }
  </div>
  )