import { useState } from 'react'

const Header = (props) => <h1>{props.header}</h1>

const Statistics = ({header, stats}) => {
  return (
    <div>
      <h2>{header}</h2>
      <StatisticLine text='good' value={stats[0]}/>
      <StatisticLine text='neutral' value={stats[1]}/>
      <StatisticLine text='bad' value={stats[2]}/>
    </div>
  )
}

const StatisticLine = ({text, value}) => <p>{text} {value}</p>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button> 

const App = () => {
  // save clicks of each button to its own state
  const header = 'give feedback'
  const statistics = 'statistics'
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <Header header={header} />
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <Statistics header={statistics} stats={[good, neutral, bad]}/>
    </div>
  )
}

export default App