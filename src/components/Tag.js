import React, { useState } from 'react'
import styled from 'styled-components'

const Tag = () => {
  const [tag, setTag] = useState('')
  const [tags, setTags] = useState([])
  const [active, setActive] = useState(false)

  const tagChange = (e) => {
    setTag(e.target.value)
  }

  const tagSubmit = (e) => {
    e.preventDefault()
    if (e.key !== 'Enter') {
      return
    }

    if (tags.includes(tag)) {
      alert('이미 존재하는 태그입니다.')
      setTag('')
      return
    } else if (tag.trim() === '') {
      setTag('')
      return
    }
    setTags((prevArray) => [...prevArray, tag])
    setTag('')
  }

  const onDelete = (item) => {
    const filtering = tags.filter((tag) => tag !== item)
    setTags(filtering)
    console.log(item)
  }

  return (
    <div>
      <Container className={`${active ? 'active' : ''}`}>
        <TagList>
          {tags.map((item) => (
            <TagBox key={item}>
              {item}
              <Button onClick={() => onDelete(item)}>✖</Button>
            </TagBox>
          ))}
        </TagList>
        <Input
          value={tag}
          onChange={tagChange}
          onKeyPress={tagSubmit}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          placeholder="Press enter to add tags"
        />
      </Container>
    </div>
  )
}

export default Tag
const Container = styled.div`
  display: flex;
  width: 50%;
  height: 52px;
  margin: auto;
  padding: 10px;
  border: 1px solid #e3e3e3;
  border-radius: 10px;
  overflow: hidden;
  outline: none;
  &.active {
    outline: 1px solid #4800ce;
  }
`
const TagList = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
`
const TagBox = styled.li`
  display: flex;
  margin: 0 5px;
  padding: 8px 8px 7px;
  align-items: center;
  background-color: #4800ce;
  color: white;
  border-radius: 8px;
  white-space: pre;
`
const Button = styled.button`
  width: 17px;
  height: 17px;
  margin-left: 5px;
  padding: 0 0 1px;
  border-color: transparent;
  border-radius: 50%;
  line-height: 0;
  background-color: white;
  color: #4800ce;
  cursor: pointer;
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
