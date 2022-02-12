import React, { useState } from 'react'
import styled from 'styled-components'
import Container from './common/Container'

const Tag = () => {
  const [tag, setTag] = useState('')
  const [tags, setTags] = useState([])
  const [active, setActive] = useState(false)

  const tagChange = (e) => {
    setTag(e.target.value.trim())
  }

  const tagSubmit = (e) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      setTags((prevArray) => [...prevArray, tag])
      setTag('')
    }
  }

  const onDelete = (index) => {
    const filtering = tags.filter((_, i) => i !== index)
    setTags(filtering)
  }

  return (
    <Container title={'Tag'}>
      <TagWrapper className={`${active ? 'active' : ''}`}>
        <Ul>
          {tags.map((item, index) => (
            <Li key={index}>
              {item}
              <Button onClick={() => onDelete(index)}>✖</Button>
            </Li>
          ))}
        </Ul>
        <Input
          value={tag}
          onChange={tagChange}
          onKeyPress={tagSubmit}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          placeholder="Press enter to add tags"
        />
      </TagWrapper>
    </Container>
  )
}

export default Tag
const TagWrapper = styled.div`
  display: flex;
  width: 50%;
  height: 30px;
  margin: auto;
  padding: 10px;
  border: 1px solid #e3e3e3;
  border-radius: 10px;
  overflow: hidden;
  outline: none;
  &.active {
    outline: 1px solid purple;
  }
`
const Ul = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
`
const Li = styled.li`
  display: flex;
  margin: 0 5px;
  padding: 7px;
  align-items: center;
  background-color: purple;
  color: white;
  border-radius: 8px;
  white-space: pre;
`
const Button = styled.button`
  width: 15px;
  height: 15px;
  margin-left: 5px;
  padding: 2px 1px 1px;
  border-color: transparent;
  border-radius: 50%;
  line-height: 0;
  background-color: white;
  color: purple;
  cursor: pointer;
  font-size: 8px;
`
const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 5px;
  font-size: 15px;
  border: none;
  &:focus {
    outline: none;
  }
`
