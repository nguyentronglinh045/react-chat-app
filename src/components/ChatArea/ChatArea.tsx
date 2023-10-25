import { useParams } from 'react-router-dom'
import ChatProfile from '../ChatProfile'
import Message from '../Message'

export default function ChatArea() {
  const { roomId } = useParams()

  return (
    <div className='flex h-full w-full grow flex-row'>
      <div className='grow bg-white p-2'>
        ChatArea {roomId}
        <Message />
        <Message isMyMessage={true} />
        <Message isTyping={true} />
      </div>
      <ChatProfile />
    </div>
  )
}
