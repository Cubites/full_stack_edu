import React, { Component } from 'react';
import Swal from 'sweetalert2';
import { Button } from 'reactstrap';

export default class SweetalertBasic extends Component {
  // viewAlert = (flag, positionflag, e) => {
  //   Swal.fire({
  //     position: positionflag,
  //     icon: 'success',
  //     title: flag + '됐습니다.',
  //     showConfirmButton: false,
  //     timer: 1500
  //   })
  // }

  confirmAlert = (e) => {
    Swal.fire({
      title: '정말 삭제하시겠습니까?',
      icon: 'question',
      showCancelButton: 'true',
      confirmButtonColor: '#4B088A',
      cancelButtonColor: '#01DF01',
      confirmButtonText: '예',
      cancelButtonText: '아니오'
    }).then((rs) =>{
      if(rs.value){
        document.getElementById('deleteId').remove();
        Swal.fire(
          'Deleted',
          'sweetalert2 삭제 완료',
          'success'
        )
      }
    })
  }

  // componentDidMount(){
  //   // Swal.fire('1. SweetAlert');
  //   // alert('2. alert');
  //   Swal.fire('1. SweetAlert').then((result) => {
  //     alert('2. result.value : ' + result.value);
  //   })
  // }
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1 id="deleteId">alert 버튼 누르기</h1>
        <Button color="primary" onClick={e => this.viewAlert('저장', 'center')}>버튼1</Button>        
        <Button color='info' onClick={e => this.viewAlert('수정', 'bottom-end')}>버튼2</Button>
        <Button color='danger' onClick={e => this.confirmAlert()}>삭제</Button>
      </div>
    )
  }
}
