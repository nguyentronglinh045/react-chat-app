import { useParams } from 'react-router-dom'
import ChatProfile from '../ChatProfile'

export default function ChatArea() {
  const { roomId } = useParams()

  return (
    <div className='flex h-full w-full grow flex-row'>
      <div className='grow bg-slate-600'>ChatArea {roomId}</div>
      <ChatProfile />
    </div>
  )
}
