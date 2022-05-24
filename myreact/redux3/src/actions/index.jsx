// strAddButton 컴포넌트에서 add 함수를 실행하면 type 변수에 ADD 변수값을 할당해 return
export const ADD = 'ADD';
export const add = () => {
    return {
        type: ADD
    }
}