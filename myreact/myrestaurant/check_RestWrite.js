import React, { useState } from 'react'
import {  Modal, ModalHeader, ModalBody, Container, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap'
import DaumPostcodeEmbed from 'react-daum-postcode';

const RestWrite = () => {
  //state 셋팅 
  const [ rWrite, setRWrite ] = useState({
    title: '',
    titleFood: '',
    tel1:'',
    tel2:'',
    tel3:'',
    zipCode: '',
    address1:'',
    address2:'',
    radius:'',
    file: null,  
    fileName:''
  });  
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [oldAddress, setOldAddress] = useState('');
  const [ isOpen, setIsOpen ] = useState(false);

  //다음 api
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let jibunAddress =  data.jibunAddress;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
      jibunAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    //위도 경도 찾기
    //1. 주소-좌표 변환객체 생성
    let geocoder = new window.kakao.maps.services.Geocoder();
    //2. 주소로 좌표 검색
    geocoder.addressSearch(fullAddress, (result, status)=>{
       //성공
       if(status === window.kakao.maps.services.Status.OK) {
           let coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
           setLatitude(coords.La);
           setLongitude(coords.Ma);
          
       }else{
           console.log('실패');
       }
    });
      let newRWrite = { ...rWrite }  //기존 데이터들이 날아가지 않도록 state를 복제
      newRWrite['zipCode'] = data.zonecode;
      newRWrite['address1'] = fullAddress;  //복제한 state에 값을 변경
      setRWrite(newRWrite);  //변경된 내용으로 기존 state를 바꿈
      setOldAddress(jibunAddress);
      setIsOpen(false); //modal 창을 닫음
  };

  //주소 검색창
  const handleClick = ()=>{
     setIsOpen(true);
  }

  const handleClose = ()=>{
     setIsOpen(false);
  }

  const handleInput = (e) => {
     let newRWrite = {...rWrite}; //바로 수정이 불가능하니까 복제함.
     newRWrite[e.target.name] = e.target.value;
     setRWrite(newRWrite);
     //console.log(rWrite.title, rWrite.titleFood);
  }

  const handleFile = (e)=>{
     const file = e.target.files[0];
     const filename = e.target.value;
     let newRWrite = {...rWrite}; //바로 수정이 불가능하니까 복제함.
     newRWrite['file'] = file;
     newRWrite['fileName'] = filename;
     setRWrite(newRWrite);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
     const url ="/api/write";
     const sigun = rWrite.address1.split(' ');
     const formData = new FormData();
     formData.append('sigun', sigun);
     formData.append('title', rWrite.title);
     formData.append('tel', rWrite.tel1+"-"+rWrite.tel2+"-"+rWrite.tel3);
     formData.append('title_food', rWrite.titleFood);
     formData.append('zip', rWrite.zipCode);
     formData.append('address', rWrite.address1+' '+rWrite.address2);
     formData.append('address_old', rWrite.address1+' '+rWrite.address2);
     formData.append('radius', rWrite.radius);
     formData.append('files', rWrite.fileName);
     for (let value of formData.values()){
        console.log(value);
     }
  }

  return (
    <Container className="wirteBox">
        <h2 className="text-center my-5">새로운 상점 등록</h2>
    <Form name='form' action="/write" onSubmit={ handleSubmit }>
        <FormGroup row>
            <Label for="title" sm={2}>
               상점이름
            </Label>
            <Col sm={10}>
                <Input id="title" 
                       name="title" 
                       placeholder="상점이름" 
                       type="text" 
                       onChange={ handleInput }
                       value={ rWrite.title } />
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label for="title_food" sm={2}>
               주요메뉴
            </Label>
            <Col sm={10}>
                <Input id="title_food" 
                       name="titleFood" 
                       placeholder="주요메뉴" 
                       onChange={ handleInput }  
                       type="text"
                       value={ rWrite.titleFood } />
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label for="tel1" sm={2}>
               전화번호
            </Label>
            <Col sm={2}>
                <Input id="tel1" 
                       name="tel1" 
                       placeholder="전화번호" 
                       onChange={ handleInput }  
                       type="number"
                       value={ rWrite.tel1 } />
            </Col>
            <Col sm={2}>
                <Input id="tel2" 
                       name="tel2" 
                       onChange={ handleInput }  
                       type="number"
                       value={ rWrite.tel2 } />
            </Col>
            <Col sm={2}>
                <Input id="tel3" name="tel3" onChange={ handleInput }  
                       type="number" value={ rWrite.tel3 } />
            </Col>
            <Col sm={4}/>
        </FormGroup>
        <FormGroup row>
            <Label for="zip" sm={2}>우편번호</Label>
            <Col sm={3}>
                <Input name="zipCode" type="text" readOnly value={ rWrite.zipCode } />
            </Col>
            <Col sm={1}>
                <Button outline onClick={ handleClick }>주소검색</Button>
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label sm={2}>
               주소
            </Label>
            <Col sm={10}>
              <Input type="text" name="address1" readOnly value={ rWrite.address1 } />
            </Col>
        </FormGroup>
        <FormGroup row>
            <Col sm={2}></Col>
            <Col sm={10}>
               <Input type="text" name="address2" 
                 placeholder="상세주소" 
                 onChange={ handleInput }
                 value={ rWrite.address2 } />  
               <Input type="hidden" name="address_old" />  
               <Input type="hidden" name="latitude" value={ latitude } />
               <Input type="hidden" name="longitude" value={ longitude } />  
               <Input ypte="hidden" name="oldAddress" value={ oldAddress } /> 
            </Col>    
        </FormGroup>  
        <FormGroup row>
            <Label sm={2}>거리뷰</Label>
            <Col sm={3}>
               <Input type="number" name="radius" placeholder="거리뷰" 
                onChange={ handleInput } value={ rWrite.radius } /> 
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label sm={2}>이미지업록드</Label>
            <Col sm={10}>
               <Input type="file" name="file" placeholder="이미지업로드" 
                onChange={ handleFile }
                value={ rWrite.fileName }
               /> 
            </Col>
        </FormGroup>
        <FormGroup row className="my-5">
            <Col sm={3}></Col>
            <Col sm={3}><Button color="danger" block outline>취소</Button></Col>
            <Col sm={1}/>
            <Col sm={3}><Button color="success" block outline>전송</Button></Col>
            <Col sm={2}></Col>
        </FormGroup>
    </Form>
    <Modal isOpen={ isOpen }>
        <ModalHeader  toggle={function noRefCheck(){}} onClick={ handleClose } />
        <ModalBody>
            <DaumPostcodeEmbed onComplete={handleComplete} />
        </ModalBody>
    </Modal>
    </Container>
  )
}

export default RestWrite