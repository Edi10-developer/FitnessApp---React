import React, { Component } from "react";
import ExerciseList from "../components/ExerciseList";
import Welcome from "../components/Welcome";
import Button from "./../components/Button";
import Loading from '../components/Loading';

class Exercise extends React.Component {
  state = {
    data: [
      
      {
        id: 1,
        title: "Technique Guides",
        description: "Learn amazing street workout and calisthenics",
        img:
          "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06",
        leftColor: "#A74CF2",
        rightColor: "#617BFB",
      },
      {
        id: 2,
        title: "Skills Training",
        description: "Learn the secrets of bodyweight techniques",
        img:
          "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercises02.png?alt=media&token=a5d55381-5f3e-4f25-92dd-560775f96aa2",
        leftColor: "#17EAD9",
        rightColor: "#6078EA",
      },
      {
        id: 3,
        title: "Strength Training",
        description: "Train anytime, everywere and become a superhero!",
        img:
          "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise03.png?alt=media&token=8e5301c0-151e-415d-bd2c-655235d9c916",
        leftColor: "#FAD961",
        rightColor: "#F76B1C",
      },
      
    ],
    loading: true,
    error: null
  };
   /*
async componentDidMount(){
  await this.fetchExercises()
}

fetchExercises = async () => {
  let res = await fetch('http://localhost:2000/api/exercises');
  let data = await res.json();

  this.setState({
    data
  });
  console.log(data);
}
 
  fetch('https://github.com/Edi10-developer/FitnessApp---React/blob/master/REST_API/data.json')
  .then(response => response.json())
  .then(data => console.log('data'))
  */


  render() {
    setTimeout(() => {
      <Loading/>
    }, 3);
    return (
      <div>
        <Welcome username="Edi" />
        <ExerciseList exercises={this.state.data} />
        <Button />
      </div>
    );
  }
}

export default Exercise;
