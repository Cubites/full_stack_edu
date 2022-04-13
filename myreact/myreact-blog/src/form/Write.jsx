import './write.css'
import Sidebar from '../comp/sidebar/Sidebar'
import SingleForm from '../comp/singleform/SingleForm'

export default function Write() {
  return (
    <div className="write container">
        <SingleForm />
        <Sidebar />
    </div>
  )
}
