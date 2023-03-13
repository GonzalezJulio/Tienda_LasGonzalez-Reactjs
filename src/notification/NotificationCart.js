import { useState, createContext } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Notification = ({ message }) => {
  
    if(!message) {
      return null
    }
  
    return  (
      <div>
        {message}
      </div>
    )
  }
export const NotificationContext = createContext()
export const NotificationProvider = ({ children }) => {
    const [message] = useState('')
    
    const setNotification = (message) =>{
        toast.success('Se agregaron prodcutos al Carrito', {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
    return (
        <NotificationContext.Provider value={setNotification}>
            <Notification message={message}/>  
            { children }
        </NotificationContext.Provider>
    )
}