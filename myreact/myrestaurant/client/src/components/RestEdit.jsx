import React, { useState, useEffect } from 'react'; 
import { Modal, ModalHeader, ModalBody, Container, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import DaumPostcodeEmbed from 'react-daum-postcode';
import { useParams } from 'react-router-dom';
import Paging from './Paging';
import axios from 'axios';

const RestEdit = () => {
  // state 셋팅
  const [rEdit, setREdit] = useState({
    title: '',
    titleFood: '',
    tel1: '',
    tel2: '',
    tel3: '',
    zipCode: '',
    address1: '',
    address2: '',
    radius: '',
    file: null,
    fileName: ''
  });

  const [ isOpen, setIsOpen ] = useState(false);
  const [sigun, setSigun] = useState('');
  const [oldAddress, setOldAddress] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  // math.params.id 는 match가 더 이상 사용되지 않음.
  // react-router-dom의 useParams를 이용함
  const { id } = useParams();

  // 데이터를 가져와 연결
  useEffect(() => {
    axios.get('/api/edit/' + id)
      .then(rs => {
        let newREdit = {...rEdit};
        const row = rs.data[0];
        const [tel1, tel2, tel3] = row.tel.split("-");
        const [address1, address2] = row.address.split("||");
        newREdit['title'] = row.title;
        newREdit['titleFood'] = row.title_food;
        newREdit['tel1'] = tel1;
        newREdit['tel2'] = tel2;
        newREdit['tel3'] = tel3;
        newREdit['address1'] = address1;
        newREdit['address2'] = address2;
        newREdit['radius'] = row.radius;
        newREdit['zipCode'] = row.zip;
        setOldAddress(row.addressOld);
        setLatitude(row.latitude);
        setLongitude(row.longitude);
        setREdit(newREdit);
      })
  });

  // 다음 api
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let jibunAddress = data.jibunAddress;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    
    // 좌표찾기
    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new window.kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(fullAddress, function(result, status) {

      // 정상적으로 검색이 완료됐으면 
      if (status === window.kakao.maps.services.Status.OK) {
        let coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
        setLatitude(coords.Ma);
        setLongitude(coords.La);
      }else{
        setLatitude('33.450701');
        setLongitude('26.570667');
      }
    });  
    
    const mysigun = fullAddress.split(' ');
    if(mysigun[0] === '서울' || '부산' || '대구' || '인천' || '광주' || '대전' || '울산' || '세종특별자치시'){
      setSigun(mysigun[0]);
    }else{
      setSigun(mysigun[1]);
    }

    let newREdit = { ...rEdit } // 기존 데이터들이 날아가지 않도록 state를 복제
    newREdit['zipCode'] = data.zonecode;
    newREdit['address1'] = fullAddress; // 복제한 state에 값을 변경
    setREdit(newREdit); // 변경된 내용으로 기존 state를 바꿈
    setOldAddress(jibunAddress);
    setIsOpen(false); // modal 창을 닫음
  };

  // 주소 검색창
  const handleClick = () => {
    setIsOpen(true);
  }

  const handleClose = () => {
    setIsOpen(false);
  }

  const handleInput = (e) => {
    let newREdit = {...rEdit}; // 배열 state는 바로 수정이 불가능 => 복제함
    newREdit[e.target.name] = e.target.value;
    setREdit(newREdit);
    // console.log(rEdit.title, rEdit.titleFood);
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    const filename = e.target.value;
    let newREdit = {...rEdit}; // 배열 state는 바로 수정이 불가능 => 복제함
    newREdit['file'] = file;
    newREdit['fileName'] = filename;
    setREdit(newREdit);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "/api/update";
    const tel = rEdit.tel1 + '-' + rEdit.tel2 + '-' + rEdit.tel3;
    const address = rEdit.address1 + ' || ' + rEdit.address2;
    const address_old = oldAddress + ' || ' + rEdit.address2;

    const formData = new FormData();
    formData.append('sigun', sigun);
    formData.append('title', rEdit.title);
    formData.append('tel', tel);
    formData.append('title_food', rEdit.titleFood);
    formData.append('zip', rEdit.zipCode);
    formData.append('address', address);
    formData.append('oldAddress', address_old);
    formData.append('latitude', latitude);
    formData.append('longitude', longitude);
    formData.append('radius', rEdit.radius);
    formData.append('files', rEdit.file);
    axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <Container className='writeBox'>
      <h2 className='text-center my-5'>{ id }번 상점 수정</h2>
      <Form onSubmit={ handleSubmit }>
        {/* <Input type="hidden" name="sigun" value={ sigun } />
        <Input type="hidden" name="address_old" value={ oldAddress } />
        <Input type="hidden" name="latitude" value={ latitude } />
        <Input type="hidden" name="longitude" value={ longitude } /> */}
        <FormGroup row>
          <Label for="title" sm={2}>
            상점이름
          </Label>
          <Col sm={10}>
            <Input 
              id="title" 
              name="title" 
              placeholder="상점이름" 
              type="text" 
              onChange={ handleInput }
              value={rEdit.title}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="title_food" sm={2}>
            주요메뉴
          </Label>
          <Col sm={10}>
            <Input 
              id="title_food" 
              name="titleFood" 
              placeholder="주요메뉴" 
              onChange={ handleInput }
              type="text"
              value={rEdit.titleFood}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="tel1" sm={2}>
            전화번호
          </Label>
          <Col sm={2}>
            <Input 
              id="tel1" 
              name="tel1" 
              placeholder="전화번호"
              onChange={ handleInput }
              type="number"
              value={rEdit.tel1}/>
          </Col>
          <Col sm={2}>
            <Input 
              id="tel2" 
              name="tel2"
              onChange={ handleInput }
              type="number"
              value={rEdit.tel2}/>
          </Col>
          <Col sm={2}>
            <Input 
              id="tel3" 
              name="tel3" 
              onChange={ handleInput } 
              type="number"
              value={rEdit.tel3}/>
          </Col>
          <Col sm={4}/>
        </FormGroup>
        <FormGroup row>
          <Label for="zip" sm={2}>우편번호</Label>
          <Col sm={3}>
            <Input name="zipCode" type="text" readOnly value={ rEdit.zipCode } />
          </Col>
          <Col sm={1}>
            <Button outline onClick={ handleClick }>주소검색</Button>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>주소</Label>
          <Col sm={10}>
            <Input type="text" name="address1" readOnly value={ rEdit.address1} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={2}></Col>
          <Col sm={10}>
            <Input type="text" name="address2" 
              placeholder="상세주소"
              onChange={ handleInput }/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>거리뷰</Label>
          <Col sm={3}>
            <Input type="number" name="radius" 
              placeholder="거리뷰" 
              onChange={ handleInput } value={ rEdit.radius } />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>이미지 업로드</Label>
          <Col sm={10}>
            <Input type="file" name="file" placeholder="이미지 업로드" 
              onChange={ handleFile }
              value={ rEdit.fileName } />
          </Col>
        </FormGroup>
        <FormGroup row className="my-5">
          <Col sm={2}></Col>
          <Col sm={3}><Button color="danger" block outline>취소</Button></Col>
          <Col sm={1}></Col>
          <Col sm={3}><Button type="submit" color="success" block outline>전송</Button></Col>
          <Col sm={2}></Col>
        </FormGroup>
      </Form>
      <Modal isOpen={ isOpen }>
        <ModalHeader toggle={function noRefCheck(){}} onClick={ handleClose }/>
        <ModalBody>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </ModalBody>
      </Modal>
    </Container>
  )
}

export default RestEdit