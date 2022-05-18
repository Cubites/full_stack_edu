import React, { Component } from 'react'

export default class SpreadOperator extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    // javascript Array
    let varArray1 = ['num1', 'num2'];
    let varArray2 = ['num3', 'num4'];
    let sumVarArray = [varArray1[0], varArray1[1], varArray2[0], varArray2[1]];
    // let sumVarArray = [].concat(varArray1, varArray2);

    const [sum1, sum2, ...remain] = sumVarArray;
    console.log(`sum1: ${sum1}, sum2: ${sum2}, ...remain: ${remain}`);
    console.log('1. sumVarArray : ' + sumVarArray);

    // ES6 Array
    let sumArr = [...varArray1, ...varArray2];
    console.log('2. sumArr : ' + sumArr);

    /*************** object ***************/

    var obj1 = { key1: 'val1', key2: 'val2'};
    var obj2 = { key3: 'val3', key4: 'val4'};
    // javavscript object
    var sumObj = Object.assign({}, obj1, obj2);
    console.log('sumObj : ' + JSON.stringify(sumObj));

    // ES6 Object
    let sumLetObj = {...obj1, ...obj2};
    console.log('sumLetObj : ' + JSON.stringify(sumLetObj));

    const {key1, key3, ...others} = sumLetObj;
    console.log(`obkey1 : ${key1}, obkey2 : ${key3}, others: ${JSON.stringify(others)}`);
  }

  render() {
    return (
      <div>SpreadOperator</div>
    )
  }
}
