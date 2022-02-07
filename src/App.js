import React, { useState } from 'react'

const tabs = [
  { num: 'Tab 1', content: 'ONE' },
  { num: 'Tab 2', content: 'TWO' },
  { num: 'Tab 3', content: 'THREE' },
]

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <>
      {tabs.map((tab, index) => (
        <button onClick={() => setCurrentIndex(index)}>{tab.num}</button>
      ))}
      <p>Tab menu {tabs[currentIndex].content}</p>
    </>
  )
}

export default App
