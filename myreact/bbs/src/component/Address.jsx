import React, { useState } from 'react';
import PopupDom from '../lib/PopupDom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import PostCode from '../lib/PostCode';

const Address = () => {
  // 팝업의 상태를 관리
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // input 태그에 주소 쓰기
  const [addr, setAddr] = useState('');
  const [zip, setZip] = useState('');
  // 팝업창 열기
  const openPop = () => {
    setIsPopupOpen(true);
  }
  const closePop = () => {
    setIsPopupOpen(false);
  }
  return (
    <>
      <div className="input-group mb-3">
        <span className="input-group-text"><FontAwesomeIcon icon={faLocationPin} /></span>
        <input type="text" className='form-control' placeholder='주소' defaultValue={zip} readOnly />
        <button className="btn btn-success" onClick={openPop}>주소검색</button>
        <input type="text" className="form-control" defaultValue={addr} />
      </div>
      <div id="popupDom">
        {
          isPopupOpen && (
            <PopupDom>
              <PostCode onClose={closePop} setAddr={setAddr} setZip={setZip} />
            </PopupDom>
          )
        }
      </div>
    </>
  )
}

export default Address