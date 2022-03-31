import { useState,useEffect,setState } from 'react'
import './Style/App.css'
import AnimatedBg from "react-animated-bg";
import Wrapper from './Componets/AnimeatedBG';
import Workouts from './Componets/Workouts';
import Button from './Componets/Button';

// by default delay = 0 and duration = 0.2s
const App =() => {
const [showWorkout, setShowWorkout] = useState(true)

  const [workout,setWorkout]=useState([]);
  const fetchWorkOut= async () => {
    const res = await fetch('http://localhost:5000/workout')
    const data = await res.json();
    return data;
    }
 
useEffect(() => {
  const getWorkout = async() =>{
 const workoutFromServer = await fetchWorkOut()
  setWorkout(workoutFromServer)
  }
  getWorkout();
 },[])
 //fetching from api



const onClick = (()=>{
  console.log('click');
})


  return (
    <div className="App">
    {showWorkout && workout.length > 0 ?
    <Workouts workouts={workout}/>
     : 'Press to show Workouts'} 
     <Button 
     text={"Show"} 
     color={'green'} 
     onClick={onClick} 
     onShow={()=>setShowWorkout(!showWorkout)}/>




     {/* <Wrapper/>  */}

    </div>
  )

}

export default App
