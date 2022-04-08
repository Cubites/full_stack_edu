import React, { Component } from 'react';
import './aside.css';

class Aside extends Component{
    render(){
        let list = [];
        let data = this.props.data;
        // for(let i = 0; i < data.length; i++){
        for(let i in data){
            list.push(<li key={data[i].id}><a href={"/content/" + data[i].id}>{data[i].title}</a></li>);
            // 여러개의 element가 자동으로 생성될 경우 각각의 리스트 항목들은 유일한 key라는 값을 가져야 함
            // 예) <li key={data[i].id}>
        }
        return (
            <aside>
            <nav>
                <ul>
                    {list}
                </ul>
            </nav>
            </aside>
        )
    }
}
  
export default Aside;