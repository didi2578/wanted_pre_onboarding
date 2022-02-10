import React from 'react'

const tabs = [
  { num: 'Tab 1', content: 'ONE' },
  { num: 'Tab 2', content: 'TWO' },
  { num: 'Tab 3', content: 'THREE' },
]

const Tab = ({ tabIndex, setTabIndex }) => {
  return (
    <>
      {tabs.map((tab, index) => (
        <button key={index} onClick={() => setTabIndex(index)}>
          {tab.num}
        </button>
      ))}
      <p>Tab menu {tabs[tabIndex].content}</p>
    </>
  )
}

export default Tab
