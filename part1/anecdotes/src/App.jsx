import { useState } from 'react'

const Display = ({header, anecdote, upvotes}) => {
  return (
    <div>
      <h2>{header}</h2>
      <p>{anecdote}</p>
      <p>this 👆 anecdote has {upvotes} upvotes</p>
    </div>
  )
}

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button> 

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [upvotes, setUpvotes] = useState(Array(8).fill(0))

  const handleUpvoteClick = () => {
    const upvotesCopy = [...upvotes]
    upvotesCopy[selected]++
    setUpvotes(upvotesCopy) 
  }

  const handleNextAnecdoteClick = () => {
    // recursive function adapted from https://dev.to/albz/the-random-number-that-cried-again-and-how-to-stop-the-madness-3bif
    const getRandomNumber = () => {
      const randomNumber = Math.floor(Math.random() * anecdotes.length)
      // check if randomly generated number is same as current quote/index/state
      if (randomNumber === selected) {
        // if yes, rerun function to generate new random number
        return getRandomNumber()
      }
      // if no, return randomly generated number
      return randomNumber
    }
    setSelected(getRandomNumber())
  }

  return (
    <div>
      <Display header='Anecdote collection' anecdote={anecdotes[selected]} upvotes={upvotes[selected]}/>
      <Button onClick={handleUpvoteClick} text='upvote' />
      <Button onClick={handleNextAnecdoteClick} text='next anecdote' />
      <Display header='Most upvoted anecdote' anecdote={anecdotes[upvotes.indexOf(Math.max(...upvotes))]} upvotes={Math.max(...upvotes)}/>
    </div>
  )
}

export default App