import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import ListIn from './ListIn'
import Pagination from '../pagination/Pagination'

const Container = styled.div`
  width: 1300px;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 30px;
`
const Titlebox = styled.div`
  width: 60%;
  margin: 0 auto;
  background: #ddd;
  padding: 30px;
  h1{
    padding: 30px;
    background: #000;
    color: #fff;
    width: 70%;
    margin: auto;
    text-align: center;
  }
`
const SortBar = styled.div`
  margin-bottom: 40px;
  margin-top: 40px;
  border-bottom: 1px solid #999;
  display: flex;
  justify-content: flex-end;
  height: 70px;
  table{
    width: 40px;
    height: 40px;
    margin-left: 10px;
    td{
      margin: 3px;
      background: #999;
    }
  }
`
const SelectBox = styled.div`
  margin-left: 10px;
  padding-left: 20px;
  height: 40px;
  display: flex;
  align-items: center;
`

const List = () => {
  const [lists, setLists] = useState([]);
  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch('./json/dress.json')
      .then((res) => res.json())
      .then((data) => setLists(data));
  },[]);

  return (
    <Container>
      <Titlebox>
        <h1>DRESS</h1>
      </Titlebox>
      <SortBar>
        <a href="javascript:void(0)" title="5개씩 보기" onClick={() => setLimit(20)}>
          <table className="box5sort">
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          
        </a>
        <a href="javascript:void(0)" title="4개씩 보기" onClick={() => setLimit(16)}>
          <table className="box4sort">
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </a>
        <a href="javascript:void(0)" title="3개씩 보기" onClick={() => setLimit(12)}>
          <table className="box3sort">
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </a>
        <a href="#">
          <table className="listsort">

          </table>
        </a>
        <SelectBox>
          <select>
            <option value="01">신상품순</option>
            <option value="02">낮은 가격순</option>
            <option value="03">높은 가격순</option>
            <option value="04">인기순</option>
            <option value="05">세일순</option>
          </select>
        </SelectBox>
      </SortBar>
      <ListIn lists={lists} total={lists.length} page={Number(page)} limit={Number(limit)}/>
      <Pagination total={lists.length} page={Number(page)} setPage={setPage} limit={Number(limit)} />
    </Container>
  )
}

export default List

/* 
  1. json파일 가져오기
  2. 페이징 (한 번에 몇개씩 뿌릴지)
  3. 하단에 페이징 (페이지를 바꾸면 다음 페이지 이미지)
  4. onClick >> className 변경
*/
