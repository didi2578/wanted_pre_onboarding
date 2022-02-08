import React from 'react'
import styled from 'styled-components'

const Modal = ({ showModal, setShowModal }) => {
  return (
    <ModalWrapper>
      <button onClick={() => setShowModal(true)} className="openBtn">
        Open Modal
      </button>
      {showModal && (
        <Background>
          <ModalContent>
            <button onClick={() => setShowModal(false)}>✖</button>
            <p>HELLO CODESTATES!</p>
          </ModalContent>
        </Background>
      )}
    </ModalWrapper>
  )
}

export default Modal
const ModalWrapper = styled.div`
  button {
    border: none;
  }
  .openBtn {
    background-color: purple;
    color: #fff;
    padding: 20px;
    border-radius: 40px;
  }
`
const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(128, 128, 128, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5;
`

const ModalContent = styled.div`
  width: 400px;
  height: 100px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  button {
    margin: 5px auto 0;
    border: none;
    background: none;
    font-weight: bold;
    cursor: pointer;
  }
  p {
    text-align: center;
    margin: auto 0;
    font-size: 20px;
    color: purple;
  }
`
