import ChatProfile from '../ChatProfile'
import Chat from '../Chat'
import ChatAreaHeader from '../ChatAreaHeader'
import ChatInput from '../ChatInput'
import TypingMessageAnimate from '../TypingMessageAnimate'

export default function ChatArea() {
  return (
    <div className='flex flex-row'>
      <div className='flex h-screen w-full flex-col'>
        <ChatAreaHeader />
        <div className='flex flex-1 flex-col-reverse overflow-y-auto bg-white p-2'>
          <div className='flex flex-col gap-y-1'>
            <Chat />
            <TypingMessageAnimate />
          </div>
        </div>

        <ChatInput />
      </div>
      <ChatProfile />
    </div>
  )
}
