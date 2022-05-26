import React from 'react'
import $ from 'jquery'

const Jquery = () => {
  const input_alert = (e) => {
    let input_val = $('#inputId').val();
    alert(input_val);
  }
  return (
    <div>
      <h2>This is Jquery</h2>
      <input id="inputId" name="inputName" />
      <button id="buttonId" onClick={ e => input_alert(e)}>alert button</button>
    </div>
  )
}

export default Jquery