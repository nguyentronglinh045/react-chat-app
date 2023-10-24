import { memo } from 'react'
import { Outlet } from 'react-router-dom'

interface Props {
  children?: React.ReactNode
}
const MainLayoutInner = ({ children }: Props) => {
  return (
    <div className='flex w-full'>
      <div className='w-[360px] shrink-0'>ChatList</div>
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
