import React, { useState } from 'react'
import Container from './common/Container'
import styled from 'styled-components'

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
  }
  const handleChange = (e) => {
    e.preventDefault()
    setInputChange(values)
  }

  return (
    <Container title={'Click To Edit'}>
      <form>
        <Label htmlFor="이름">
          이름
          <input
            name="name"
            value={values.name}
            onChange={handleInput}
            onBlur={handleChange}
          />
        </Label>
        <Label htmlFor="나이">
          나이
          <input
            name="age"
            value={values.age}
            onChange={handleInput}
            onBlur={handleChange}
          />
        </Label>
      </form>
      <p>
        이름 {inputChange.name}
        &nbsp;나이 {inputChange.age}
      </p>
    </Container>
  )
}

export default ClickToEdit

const Label = styled.label`
  display: block;
  padding-bottom: 10px;
  input {
    width: 10%;
    height: 30px;
    text-align: center;
    margin-left: 5px;
    &:focus {
      background-color: transparent;
    }
  }
`
