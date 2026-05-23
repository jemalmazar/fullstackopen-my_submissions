import { useState } from 'react'

const Header = (props) => <h1>{props.header}</h1>

const Statistics = ({header, stats}) => {
  return (
    <div>
      <h2>{header}</h2>
      <StatisticLine text='good:' value={stats[0]}/>
      <StatisticLine text='neutral:' value={stats[1]}/>
      <StatisticLine text='bad:' value={stats[2]}/>
      <StatisticLine text='total:' value={stats[3]}/>
      <StatisticLine text='average:' value={stats[4]}/>
      <StatisticLine text='positive:' value={stats[5]}/>
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
  const [feedbackScore, setScore] = useState(0)
  const feedbackTotal = good + neutral + bad
  const avgFeedbackScore = feedbackScore/feedbackTotal
  const positive = `${(good/feedbackTotal) * 100} %`

  const handleGoodClick = () => {
    setGood(good + 1)
    setScore(feedbackScore + 1)
  }

  const handleNeutralClick = () => setNeutral(neutral + 1)
  
  const handleBadClick = () => {
    setBad(bad + 1)
    setScore(feedbackScore - 1)
  }  

  return (
    <div>
      <Header header={header} />
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <Statistics header={statistics} stats={[good, neutral, bad, feedbackTotal, avgFeedbackScore, positive]}/>
    </div>
  )
}

export default App