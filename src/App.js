import React from 'react'
import AutoComplete from './components/AutoComplete'
import ClickToEdit from './components/ClickToEdit'
import Modal from './components/Modal'
import Tab from './components/Tab'
import Tag from './components/Tag'
import Toggle from './components/Toggle'

const App = () => {
  return (
    <>
      <Toggle />
      <Modal />
      <Tab />
      <Tag />
      <AutoComplete />
      <ClickToEdit />
    </>
  )
}

export default App
