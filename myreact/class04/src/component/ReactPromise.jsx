import React, { useEffect } from 'react'

/*
  * promise
    - 대기, 이행, 거부의 개념이 있음. 
    - 대기에서 이행 상태로 변할 때 then() 함수 안의 코드가 실행됨
    - Promise 객체생성 (promise 사용) => 파라미터로 하나의 함수(resolve)만 받을 경우 이행함수로 사용됨

    1. timeout함수가 실행되는 동안 대기 1.5초후 
    2. resolve 함수 실행
    3. 첫번째 then 함수 실행 return 되는 순간
    4. 마지막 then 함수 실행
*/

const ReactPromise = () => {
  useEffect(() => {
    new Promise(resolve => {
      setTimeout(function(){
        resolve('react');
      }, 1500);
    })
      .then(function(result){
        console.log(result);
        return result + 200;
      })
      .then(result => {
        console.log(result);
      })
  }, []);
  return (
    <div>ReactPromise</div>
  )
}

export default ReactPromise