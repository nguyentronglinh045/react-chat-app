import InputSearch from '../InputSearch'
import ChatItem from './ChatItem'

export default function ChatList() {
  return (
    <div className='flex w-[360px] flex-col border bg-white pl-2'>
      <div className='flex h-[120px] flex-col justify-center gap-y-2 pr-4'>
        <div className='flex items-center justify-between'>
          <h2 className='text-2xl font-bold text-black'>Chat</h2>
          <div className='flex items-center gap-2'>
            <button className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-100'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={24}
                height={24}
                viewBox='0 0 24 24'
                fill='none'
                stroke='black'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-settings'
              >
                <path d='M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z' />
                <circle cx={12} cy={12} r={3} />
              </svg>
            </button>
            <button className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-100'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={24}
                height={24}
                viewBox='0 0 24 24'
                fill='none'
                stroke='black'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-pen-square'
              >
                <path d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7' />
                <path d='M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z' />
              </svg>
            </button>

            <button className='h-10 w-10'>
              <img
                src='https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/391693477_1340684853286440_6276600789723715784_n.jpg?stp=dst-jpg_p100x100&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pFK98y1Q-6AAX-tXJnz&_nc_ad=z-m&_nc_cid=1229&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfCTrYz8cdfG3viD5ktFiLiDAN2ELbH9kYzV0qm16ZCOkw&oe=653A5FCE'
                alt='Cil Emely'
                className='h-full w-full rounded-full'
              />
            </button>
          </div>
        </div>
        <InputSearch />
      </div>
      <div className='flex h-[calc(100vh-120px)] flex-col overflow-y-auto pb-4 pr-2'>
        <ChatItem isSelected={true} isActive={true} />
        <ChatItem isGroup={true} />
        <ChatItem isActive={true} />
        <ChatItem />
        <ChatItem isActive={true} />
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <ChatItem key={index} isActive={index % 2 == 0} />
          ))}
      </div>
    </div>
  )
}
