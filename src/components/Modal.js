import React, { useState } from 'react'
import styled from 'styled-components'
import Container from './common/Container'

const Modal = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <Container title={'Modal'}>
      <ModalWrapper>
        <OpenBtn onClick={() => setShowModal(true)} className="openBtn">
          Open Modal
        </OpenBtn>
        {showModal && (
          <Background>
            <InnerContent>
              <button onClick={() => setShowModal(false)}>✖</button>
              <p>HELLO CODESTATES!</p>
            </InnerContent>
          </Background>
        )}
      </ModalWrapper>
    </Container>
  )
}

export default Modal
const ModalWrapper = styled.div`
  margin: 0 auto;
  width: 50%;
  button {
    border: none;
  }
`
const OpenBtn = styled.button`
  background-color: purple;
  color: #fff;
  padding: 20px;
  border-radius: 40px;
  cursor: pointer;
`
const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
`

const InnerContent = styled.div`
  width: 300px;
  height: 100px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  button {
    margin: 10px auto 0;
    border: none;
    background: none;
    font-weight: bold;
    cursor: pointer;
  }
  p {
    text-align: center;
    margin: auto 0;
    font-size: 18px;
    color: purple;
  }
`
