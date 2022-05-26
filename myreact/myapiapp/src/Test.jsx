import React, { useState, useEffect } from 'react';
import key from './key.json';
import List from './components/List';

const Test = () => {
    const [dt, setDt] = useState([]);
    const [postNum, setPostNum] = useState(10);
    const [pageNum, setPageNum] = useState(1);
    useEffect(()=>{ 
        fetch(`https://openapi.gg.go.kr/KintexEventFixatn?key=${key.key}&type=json&pIndex=1&pSize=120`).then(rs=>rs.json())
            .then(rs => setDt(...dt, rs.KintexEventFixatn[1].row))
            .catch() // <-- 에러 처리할 경우 (안써도 되고...)
    }, []);
    console.log(dt);
    
    return (
    <div> 
        <List eventList={dt} postNum={postNum} pageNum={pageNum}/>
        {
            // dt가 배열이니 여기서도 하나씩 풀어줘야 함 for 문사용해도 되지만
            // react에선 주로 map 이용       
            // dt.map( d=>(
            //     {d.값}  {d.값2}  이런식으로... 출력하거나 
            //     <다른컴포넌트 key={d.값} 값={d.값2} /> 이런 식으로 props 로 넘김
            // ))
        }
    </div>
    
    )
}

export default Test