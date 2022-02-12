import React from 'react'
import styled from 'styled-components'
import Container from './common/Container'

const Toggle = ({ onChange, toggled }) => {
  return (
    <Container title={'Toggle'}>
      <InputWrapper>
        <Input type="checkbox" onChange={onChange} />
        <Slider />
      </InputWrapper>
      <p>Toggle switch {toggled ? 'ON' : 'OFF'} </p>
    </Container>
  )
}

export default Toggle

const InputWrapper = styled.label`
  position: relative;
`
const Input = styled.input`
  position: absolute;

  &:checked + span {
    &:before {
      left: 55px;
    }
    &:after {
      width: 100px;
    }
  }
`

const Slider = styled.span`
  display: flex;
  overflow: hidden;
  cursor: pointer;
  width: 100px;
  height: 50px;
  margin: 0 auto;
  border-radius: 100px;
  background-color: #bfbfbf;
  position: relative;
  transition: background-color 0.5s;
  &:before {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    width: 40px;
    height: 40px;
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
