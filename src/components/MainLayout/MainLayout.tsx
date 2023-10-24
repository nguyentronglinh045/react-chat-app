import { memo } from 'react'
import { Outlet } from 'react-router-dom'
import ChatList from '../ChatList'

interface Props {
  children?: React.ReactNode
}
const MainLayoutInner = ({ children }: Props) => {
  return (
    <div className='flex w-full'>
      <ChatList />
      <div className='grow'>
        Chat Area
        {children}
        <Outlet />
      </div>
    </div>
  )
}

const MainLayout = memo(MainLayoutInner)
export default MainLayout
