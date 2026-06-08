const Course = ({course}) => (
  <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total total={course.parts} />
  </div>
)

const Header = (props) => <h2>{props.course}</h2>

const Content = ({parts}) => parts.map(part => <Part key={part.id} part={part} />)

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = (props) => (
  <p><b>
    total of {props.total.reduce((acc, obj) => {
      return acc + obj.exercises
    }, 0)} exercises
  </b></p>
)

export default Course