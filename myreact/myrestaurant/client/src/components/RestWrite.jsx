import React, { useState } from 'react'; 
import { Container, Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import { useDaumPostcodePopup } from 'react-daum-postcode';

const RestWrite = () => {
  const [rWrite, setRWrite] = useState({
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

  // 모달창 고나리
  const [isModal, setIsModal] = useState(false);

  const scriptUrl = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
  const open = useDaumPostcodePopup(scriptUrl);

  const Postcode = () => {
    const handleComplete = (data) => {
      let fullAddress = data.address;
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
  
      console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    };
  };

  const handleInput = (e) => {
    let newRWrite = {...rWrite}; // 배열 state는 바로 수정이 불가능 => 복제함
    newRWrite[e.target.name] = e.target.value;
    setRWrite(newRWrite);
    console.log(rWrite.title, rWrite.titleFood);
  };

  return (
    <Container className='writeBox'>
      <h2 className='text-center my-5'>새로운 상점 등록</h2>
      <Form>
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
              value={rWrite.title}/>
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
              value={rWrite.titleFood}/>
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
              value={rWrite.tel1}/>
          </Col>
          <Col sm={2}>
            <Input 
              id="tel2" 
              name="tel2"
              onChange={ handleInput }
              type="number"
              value={rWrite.tel2}/>
          </Col>
          <Col sm={2}>
            <Input 
              id="tel3" 
              name="tel3" 
              onChange={ handleInput } 
              type="number"
              value={rWrite.tel3}/>
          </Col>
          <Col sm={4}/>
        </FormGroup>
        <FormGroup row>
          <Label for="zip" sm={2}>우편번호</Label>
          <Col sm={3}>
            <Input name="zipCode" type="text" readOnly />
          </Col>
          <Col sm={1}>
            <Button outline onClick={ handleAddress }>주소검색</Button>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>주소</Label>
          <Col sm={10}>
            <Input type="text" name="address1" readOnly />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={2}></Col>
          <Col sm={10}>
            <Input name="number" type="radius" placeholder="상세주소" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>거리뷰</Label>
          <Col sm={3}>
            <Input type="number" name="radius" placeholder="거리뷰" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>이미지 업로드</Label>
          <Col sm={10}>
            <Input type="file" name="file" placeholder="이미지 업로드" />
          </Col>
        </FormGroup>
        <FormGroup row className="my-5">
          <Col sm={2}></Col>
          <Col sm={3}><Button color="danger" block outline>취소</Button></Col>
          <Col sm={1}></Col>
          <Col sm={3}><Button color="success" block outline>전송</Button></Col>
          <Col sm={2}></Col>
        </FormGroup>
      </Form>
    </Container>
  )
}

export default RestWrite