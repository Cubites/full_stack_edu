import './detail.css'
import Sidebar from '../../comp/sidebar/Sidebar'
import Single from '../../comp/SinglePost/SinglePost'

export default function Detail() {
  return (
    <div className='detail container'>
        <Single />
        <Sidebar />
    </div>
  )
}
