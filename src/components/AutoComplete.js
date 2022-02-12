import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import CityData from '../MOCK_DATA.json'

const AutoComplete = () => {
  const [search, setSearch] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [display, setDisplay] = useState(false)
  const wrapperRef = useRef(null)

  const handleSearch = (e) => {
    setSearch(e.target.value)
    const newFilter = CityData.filter((data) => {
      return data.city.toLowerCase().includes(e.target.value.toLowerCase())
    })

    if (e.target.value === '') {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
    }
  }
  const onDelete = () => {
    setSearch('')
    setDisplay(false)
  }

  const onSuggestionClick = (label) => {
    setSearch(label)
    setDisplay(false)
  }

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('mousedown', handleClickOutside)
    }
  })
  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef
    if (wrap && !wrap.contains(event.target)) {
      setSearch('')
      setDisplay(false)
    }
  }

  return (
    <>
      <SearchInputContainer ref={wrapperRef}>
        <SearchInput
          value={search}
          onChange={handleSearch}
          onClick={() => setDisplay(!display)}
        />
        <Button onClick={() => onDelete()}>✖</Button>
        {display && (
          <AutoContainer>
            {filteredData.length !== 0 && (
              <Ul>
                {filteredData.map((value) => {
                  return (
                    <Li
                      key={value.id}
                      onClick={() => onSuggestionClick(value.city)}
                    >
                      {value.city}
                    </Li>
                  )
                })}
              </Ul>
            )}
          </AutoContainer>
        )}
      </SearchInputContainer>
    </>
  )
}

export default AutoComplete

const SearchInputContainer = styled.div`
  width: 50%;
  height: 30px;
  display: flex;
  align-items: center;
  position: relative;
  margin: 0 auto;
`
const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.14);
  border-radius: 15px;
  font-size: 15px;
  color: #12112e;
  font-weight: 500;
  background-color: transparent;
  padding: 10px 15px;

  &:focus {
    border: none;
    box-shadow: 0 7px 3px 0px rgba(0, 0, 0, 0.14);
  }
`
const Button = styled.button`
  color: #bebebe;
  font-size: 15px;
  vertical-align: middle;
  border: none;
  color: #000;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  right: 15px;
`
const AutoContainer = styled.div`
  position: absolute;
  border: none;
  right: 0px;
  top: 30px;
  width: 100%;
  background-color: #fff;
  border-radius: 0 0 15px 15px;
  box-shadow: 0 7px 3px 0px rgba(0, 0, 0, 0.14);
`

const Ul = styled.ul`
  display: flex;
  width: 500px;
  padding: 5px;
  flex-direction: column;
`
const Li = styled.li`
  padding: 3px 10px;
  text-align: left;
  list-style: none;

  &:hover {
    background-color: #eeeeee;
    cursor: pointer;
  }
`
