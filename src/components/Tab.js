import React, { useState } from 'react'
import Container from './common/Container'
import styled from 'styled-components'

const tabs = [
  { num: 'Tab 1', content: 'ONE' },
  { num: 'Tab 2', content: 'TWO' },
  { num: 'Tab 3', content: 'THREE' },
]

const Tab = () => {
  const [tabIndex, setTabIndex] = useState(0)

  const handleActive = (index) => {
    setTabIndex(index)
  }

  return (
    <Container title={'Tab'}>
      {tabs.map((tab, index) => (
        <Button
          key={index}
          onClick={() => handleActive(index)}
          className={`${tabIndex === index ? 'active' : ''}`}
        >
          {tab.num}
        </Button>
      ))}
      <p>Tab menu {tabs[tabIndex].content}</p>
    </Container>
  )
}

export default Tab

const Button = styled.button`
  border: none;
  width: 10%;
  height: 40px;
  color: #898888;
  font-size: 15px;
  font-weight: bold;
  background-color: #dadada;
  cursor: pointer;
  transition: all 0.2s;
  margin-bottom: 10px;
  &.active {
    background-color: purple;
    color: #fff;
  }
`
