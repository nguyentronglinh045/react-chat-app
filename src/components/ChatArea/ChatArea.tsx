import { useParams } from 'react-router-dom'

export default function ChatArea() {
  const { roomId } = useParams()

  return <div>ChatArea {roomId}</div>
}
