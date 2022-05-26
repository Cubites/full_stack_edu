# 전개연산자
* ... (ES6)
  * <code>let sumArr = [...varArray1, ...varArray2];</code>

# 반복문
* for
  > <code>for(let i = 0; i < number; i++) { ... }</code>
* for in
  > <code>for(let i in Array){ ... }</code>
  > * i 는 배열의 key 값
* for of
  > <code>for(let i of Array){ ... }</code>
  > * i 는 배열의 값
* forEach
  > <code>Array.forEach((item, index, arr) => { ... })</code>
  > * item : 배열 값
  > * index : 배열 key 값
  > * arr : 배열 전체
* map
  > <code>Array.map((item, index) => { ... })</code>
  > * item : 배열 값
  > * index : 배열 key 값