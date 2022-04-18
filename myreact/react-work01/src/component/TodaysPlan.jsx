import React from 'react';
// prop-types 라이브러리를 PropTypes라는 이름으로 import
import PropTypes from 'prop-types';

// export default function TodaysPlan() {
//   return (
//     <>
//         <div>{this.props.message}</div>
//     </>
//   )
// }

// 위 export와 아래 export는 같은 의미

// export default class TodaysPlan extends Component {
// render(){
//     return (
//       <div>TodaysPlan</div>
//     )
//   }
// }

class TodaysPlan extends React.Component {
    render(){
        return (
            <div>{this.props.message}</div>
        )
    }
}

// 자료형 선언
// TodaysPlan의 propTypes라는 특수변수(prop-types의 변수, Prop-types와 다름)를 사용하여 프로퍼티의 자료형 저장
TodaysPlan.propTypes = {
    message : PropTypes.string
}

export default TodaysPlan;