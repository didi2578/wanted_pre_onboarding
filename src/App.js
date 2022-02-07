import React, { useState } from 'react'

const content = [
  { tab: 'Tab 1', content: 'ONE' },
  { tab: 'Tab 2', content: 'TWO' },
  { tab: 'Tab 3', content: 'THREE' },
]
const useTab = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab)
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  }
}

const App = () => {
  const { currentItem, changeItem } = useTab(0, content)
  return (
    <>
      {content.map((tabs, index) => (
        <button onClick={() => changeItem(index)}>{tabs.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </>
  )
}

export default App
