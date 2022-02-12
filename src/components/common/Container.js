import React from 'react'
import styled from 'styled-components'

const Containers = styled.div`
  padding: 30px;
`

const Title = styled.div`
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
`

const Section = styled.div`
  padding: 80px;
  text-align: center;
`

const Container = ({ title, children }) => {
  return (
    <Containers>
      <Title>{title}</Title>
      <Section>{children}</Section>
    </Containers>
  )
}

export default Container
