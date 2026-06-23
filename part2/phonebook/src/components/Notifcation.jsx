const Notification = ({ message }) => {  
  if (message === null) {
    return null
  }

  for (const [key, value] of Object.entries(message)) {
    return (
      <div className={key}>
        {value}
      </div>
    )
  }
}

export default Notification