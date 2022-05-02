import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 1300px;
  margin: 40px auto 30px;
  height: auto;
`
const UL = styled.ul`
  margin-left: -15px;
  margin-right: -15px;
  padding: 0;
  display: flex;
  flex-flow: row wrap;
  list-style-type: none;
`
const Li = styled.li`
  flex: 20%;
  padding: 15px;
`
const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const BottomIn = ({ bottom, loading }) => {

  function commas(num){
    return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <>
    {
      loading &&
        <div> 로딩중 ... </div>
    }
    <Container>
      <UL>
        {
          bottom.map(bt => (
            <Li key={bt.id}>
              <div className="card-img">
                <img src={"./pdimages/" + bt.image} alt={bt.title} />
              </div>
              <h3 className="card-title">{bt.title}</h3>
              <p className="card-desc">{bt.desc}</p>
              <div className="card-footer">
                <p className="or-price"><del>{commas(bt.price)} 원</del></p>
                <p className="sale-price">{commas(bt.price * bt.sale / 10)} 원 ({bt.sale/10})</p>
              </div>
            </Li>
          ))
        }
      </UL>
    </Container>
    </>
  )
}

export default BottomIn