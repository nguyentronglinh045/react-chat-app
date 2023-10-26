import Message from 'src/Message'
import chat from 'src/constants/chat'

export default function Chat() {
  return (
    <>
      {chat.map((message, index) => (
        <Message key={index} message={message} isMyMessage={message._id == 2} />
      ))}
    </>
  )
}
