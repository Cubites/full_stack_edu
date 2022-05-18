import React, { Component } from 'react'

export default class ForEach extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    let thisArray = ['사과', '바나나', '귤', '수박', '참외'];
    // for(let i = 0; i < thisArray.length; i++) console.log(thisArray[i]);

    // for(let fruit of thisArray) console.log(fruit);

    // for(let key in thisArray) console.log(key);

    // thisArray.forEach((item, index, arr) => {
    //   console.log(item, index, arr);
    // })
    // let myArray = thisArray.map(x => '과일' + x);
    // console.log(myArray);

    let myWork = [
      {key: 'react', value: '200'},
      {key: '리액트', value: 'TwoHundred'}
    ];
    let myObj = myWork.map((obj, index) => {
      console.log((index) + ".obj : " + JSON.stringify(obj));
      var Obj = {};
      Obj[obj.key] = obj.value;
      return Obj;
    })
    console.log("myObj :" + JSON.stringify(myObj));
  }

  render() {
    return (
      <div>ForEach</div>
    )
  }
}
