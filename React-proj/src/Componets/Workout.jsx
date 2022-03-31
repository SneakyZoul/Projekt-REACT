
const Workout = ({workout}) => { 

  return (
    <div className="workIt">
     <h3>Workout: {workout.text}</h3> 
      <p> sets: {workout.sets}</p> 
    </div>
  )
}

export default Workout