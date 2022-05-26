import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const ReactStrapModal = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  }
  return (
    <div>
      <Button color="info" onClick={toggle}>ReactStrapModal</Button>
      <Modal isOpen={modal} fade={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal Header</ModalHeader>
        <ModalBody>
          <p>테스트 문구 입니다.테스트 문구 입니다.테스트 문구 입니다.테스트 문구 입니다.</p>
          <p>테스트 문구 입니다.테스트 문구 입니다.테스트 문구 입니다.테스트 문구 입니다.</p>
          <p>테스트 문구 입니다.테스트 문구 입니다.테스트 문구 입니다.테스트 문구 입니다.</p>
        </ModalBody>
        <ModalFooter style={{border: 'none'}}>
          <Button color="danger" onClick={toggle}>닫기</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ReactStrapModal