import './contact.css';
import Sidebar from '../../comp/sidebar/Sidebar'

export default function Contact() {
  return (
    <div className="contact">
        <div className='contactBox'>
            {/* div.contactBox */}
            <div className="contactMain">
                <div className="contactBoxEmail">
                    <label>Email</label>
                    <input type="text" className='contactEmail' />
                </div>
                <div className="contactBoxMessage">
                    <label>Message</label>
                    <input type="text" className='contactMessage' />
                </div>
            </div>
            <button className='contactSend'> Send </button>
        </div>
        {/* <Sidebar /> */}
    </div>
  )
}
