/*
    string
    number
    boolean
    null
    undefined
    bigint
    array
    object
    사용자
*/
const user: string = "hong";
let member: string[] = ['kim', 'hong', 'lee'];
let uname: {name: string} = { name: 'hong'};

let str: string | number = 123; // string 혹은 number

type mytype = string | number; // 사용자 지정 타입
let str2: mytype = 'arger';

function myfunc(x: number): number{ // return 값 타입지정
    return x * 3;
}