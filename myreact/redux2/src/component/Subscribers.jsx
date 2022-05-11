import React from 'react'
import { connect } from 'react-redux'
import { addSubscriber, removeSubscriber } from '../redux/subscribers/action'

const Subscribers = (props) => {
  return (
    <div className='items'>
      <p>구독자 수 : { props.count }</p>
      <button onClick={() => props.addSubscriber()}>구독자 증가</button>
      <button onClick={() => props.removeSubscriber()}>구독자 감소</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addSubscriber: () => dispatch(addSubscriber()),
    removeSubscriber: () => dispatch(removeSubscriber())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Subscribers)