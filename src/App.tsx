import BoardingPass from './boardingPass/BoardingPass'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import IconButton from '@mui/material/IconButton';
import { useEffect, useState } from 'react';
import useNotificaitons from './notifications/useNotifications';


function App() {
  return (
    <div className='flex flex-col'>
      <AppHeader />
      <div className='flex justify-center'>
        <BoardingPass />
      </div>
    </div>
  )
}

const AppHeader = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false)

  const { enableNotifications, checkNotification, sendNotifications } = useNotificaitons();

  useEffect(() => {
    const notificationsEnabled = checkNotification()
    setNotificationsEnabled(notificationsEnabled)
  }, [checkNotification])

  const toggleNotification = async () => {
    if (notificationsEnabled === false) {
      const granted = await enableNotifications()
      setNotificationsEnabled(granted)
    }
    if (notificationsEnabled) {
      setTimeout(() => {
        sendNotifications("Your boarding pass is ready")
      }, 3000)
    }
  }

  return (
    <div className='bg-gray-200 mb-8'>
      <IconButton onClick={() => void toggleNotification()}>{
        notificationsEnabled ?
          <NotificationsActiveIcon /> :
          <NotificationsOffIcon />
      }</IconButton>
    </div>
  )
}



export default App
