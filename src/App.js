import React, { useState } from 'react'
import Modal from './components/Modal'
import Tab from './components/Tab'
import Toggle from './components/Toggle'

const App = () => {
  const [tabIndex, setTabIndex] = useState(0)
  const [toggled, setToggled] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Toggle
        onChange={(event) => setToggled(event.target.checked)}
        toggled={toggled}
      />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <Tab tabIndex={tabIndex} setTabIndex={setTabIndex} />
    </>
  )
}

export default App
