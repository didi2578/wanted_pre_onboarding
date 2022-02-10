import React, { useState } from 'react'

const ClickToEdit = () => {
  const [values, setValues] = useState({
    name: '김코딩',
    age: 20,
  })
  const [inputChange, setInputChange] = useState(values)

  const handleInput = (e) => {
    const { name, value } = e.target
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))

    console.log(values)
  }
  const handleChange = (e) => {
    e.preventDefault()
    setInputChange(values)
  }

  return (
    <div>
      <form>
        <label htmlFor="이름">이름</label>
        <input
          name="name"
          value={values.name}
          onChange={handleInput}
          onBlur={handleChange}
        />
        <label htmlFor="나이">나이</label>
        <input
          name="age"
          value={values.age}
          onChange={handleInput}
          onBlur={handleChange}
        />
      </form>
      <p>
        이름 {inputChange.name}
        나이 {inputChange.age}
      </p>
    </div>
  )
}

export default ClickToEdit
