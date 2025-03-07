import { useEffect, useState } from 'react'
import { MdClose } from 'react-icons/md'
const Toast = ({
  message,
  type,
  onClose,
  containerStyles,
  messageStyles,
  iconStyles,
  id,
}) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    // Trigger the show effect after the component is mounted
    setShow(true)
  }, [])

  const toastTypes = {
    success: { backgroundColor: '#28a745' },
    error: { backgroundColor: '#dc3545' },
    info: { backgroundColor: '#17a2b8' },
    warning: { backgroundColor: '#ffc107' },
  }

  return (
    <div
      className={`toast ${show ? 'show' : ''}`}
      style={{ ...toastTypes[type], ...containerStyles }}
    >
      <span style={{ ...messageStyles }}>{message}</span>

      <MdClose
        style={{ ...iconStyles }}
        className='close-btn'
        onClick={() => onClose(id)}
      />
    </div>
  )
}

export default Toast
