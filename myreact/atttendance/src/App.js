import React, { useState, useReducer } from 'react'
import Student from './Student';
import { Button } from 'react-bootstrap';

const reducer = (state, action) => {
  switch(action.type){
    case 'add-student':
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name,
        isHere: false
      }
      return {
        count: state.count + 1,
        students: [...state.students, newStudent]
      }
    case 'delete-student':
      return {
        count: state.count - 1,
        students: state.students.filter(student => student.id !== action.payload.id)
      }
    case 'mark-student':
      return {
        count: state.count,
        students: state.students.map((student) => {
          if(student.id === action.payload.id){
            return {...student, isHere: !student.isHere};
          }
          return student;
        })
      }
    default:
      return state;
  }
}

const initialState = {
  count: 0,
  students: []
}

const App = () => {
  const [name, setName] = useState('');
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);
  return (
    <div className='container'>
      <h1>출석부</h1>
      <p>총 학생수 : {studentsInfo.count}</p>
      <input 
        type="text" 
        placeholder="이름을 입력하시오."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button variant="outline-success" onClick={() => {
          dispatch({type: 'add-student', payload: {name}})
        }}>추가</Button>
      {
        studentsInfo.students.map((student) => {
          return <Student 
              key={student.id} 
              name={student.name} 
              dispatch={dispatch}
              id={student.id}
              isHere={student.isHere}
            />
        })
      }
    </div>
  )
}

export default App