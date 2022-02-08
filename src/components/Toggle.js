import React from 'react'
import styled from 'styled-components'

const Toggle = ({ onChange, toggled }) => {
  return (
    <>
      <InputWrapper>
        <Input type="checkbox" onChange={onChange} />
        <Slider />
      </InputWrapper>
      <p>Toggle switch {toggled ? 'ON' : 'OFF'} </p>
    </>
  )
}

export default Toggle

const InputWrapper = styled.label`
  position: relative;
`
const Input = styled.input`
  position: absolute;
  left: -9999px;
  top: -9999px;

  &:checked + span {
    &:before {
      left: 27px;
    }
    &:after {
      width: 50px;
    }
  }
`

const Slider = styled.span`
  display: flex;
  overflow: hidden;
  cursor: pointer;
  width: 50px;
  height: 25px;
  border-radius: 100px;
  background-color: #bfbfbf;
  position: relative;
  transition: background-color 0.5s;
  &:before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 21px;
    height: 21px;
    border-radius: 21px;
    transition: 0.5s;
    background: #fff;
  }
  &:after {
    content: '';
    transition: 0.5s;
    width: 0;
    height: 100%;
    background-color: purple;
  }
`
