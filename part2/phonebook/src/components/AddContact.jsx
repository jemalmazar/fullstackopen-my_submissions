import Form from "./Form"

const AddContact = ({header, onSubmit, onChange, value}) => {
  return (
    <div>
      <h2>{header}</h2>
      <Form onSubmit={onSubmit} onChange={onChange} value={value} />
    </div>
  )
}

export default AddContact