const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts} />
    </div>
  )
}

const Header = (props) => <h2>{props.course}</h2>

const Content = ({parts}) => parts.map(part => <Part key={part.id} part={part} />)

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Total = (props) => {
  return (
    <p><b>
      total of {props.total.reduce((acc, obj) => {
        return acc + obj.exercises
      }, 0)} exercises
    </b></p>
  )
}

export default Course