import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import PostCode from '../lib/PostCode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';

const Address = ({ handleInput }) => {
  // 팝업의 상태를 관리
  const [modal, setModal] = useState(false);
  // input 태그에 주소 쓰기
  const [addr, setAddr] = useState('');
  const [zip, setZip] = useState('');
  // 팝업창 열기
  const toggle = () => { setModal(!modal); }
  return (
    <>
      <div className="input-group mb-3">
        <span className="input-group-text"><FontAwesomeIcon icon={faLocationPin} /></span>
        <input type="text" className='form-control' placeholder='주소' defaultValue={zip} readOnly />
        <button type='button' className="btn btn-success" onClick={toggle}>주소검색</button>
        <input type="text" className="form-control" defaultValue={addr} readOnly onChange={handleInput} />
      </div>
      <Modal isOpen={modal} fade={true} toggle={toggle}>
        <ModalHeader toggle={toggle} />
        <ModalBody>
          <PostCode setModal={setModal} setAddr={setAddr} setZip={setZip} />
        </ModalBody>
      </Modal>
    </>
  )
}

export default Address