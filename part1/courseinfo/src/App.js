import React from 'react'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />



    </div>
  )
}

const Header = ({ course }) => {

  return (
    <h1>{course}</h1>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((value, index) => (
        <p key={index}>{value.name} {value.exercises}</p>
      ))}
    </div>
  )
}

const Total = ({ parts }) => {
  let sum = 0;
  parts.forEach(value => { sum += value.exercises })

  return (
    <div>
      <p>{`Total of exercises: ${sum}`}</p>
    </div>
  )
}


export default App