import React from 'react';
import Card from './Card';
import Button from './Button';

function ExerciseList(props) {
    return (
        <div>
              {props.exercises.map((exercise) => {
          return (
            <Card
              title={exercise.title}
              description={exercise.description}
              img={exercise.img}
              leftColor={exercise.leftColor}
              rightColor={exercise.rightColor}
            />
          );
        })}
        <Button />
        </div>
    )
}
export default ExerciseList;
