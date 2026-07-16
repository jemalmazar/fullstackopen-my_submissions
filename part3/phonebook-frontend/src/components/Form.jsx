const Form = (props) => {
  return (
    <form id="entry_form" onSubmit={props.onSubmit}>
      <div>
        <label htmlFor="name">Name: </label>
        <input 
          type="text"
          id="name"
          value={props.value.name}
          onChange={props.onChange}
          placeholder="Enter Full Name"
          autoComplete="on"
          required />
      </div>
      <div>
        <label htmlFor="number">Number: </label>
        <input 
            type="text" 
            id="number"
            value={props.value.number}
            onChange={props.onChange}
            placeholder="Enter Phone Number"
            required
          />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default Form