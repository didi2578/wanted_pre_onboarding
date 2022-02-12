import React, { useState } from 'react'
import AutoComplete from './components/AutoComplete'
import ClickToEdit from './components/ClickToEdit'
import Modal from './components/Modal'
import Tab from './components/Tab'
import Tag from './components/Tag'
import Toggle from './components/Toggle'

const App = () => {
  const [toggled, setToggled] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Toggle
        onChange={(event) => setToggled(event.target.checked)}
        toggled={toggled}
      />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <Tab />
      <Tag />
      <AutoComplete />
      <ClickToEdit />
    </>
  )
}

export default App
