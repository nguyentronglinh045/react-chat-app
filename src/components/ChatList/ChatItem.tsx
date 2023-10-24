import { Link } from 'react-router-dom'
import path from 'src/constants/path'

interface ChatItemProps {
  isSelected?: boolean
  isGroup?: boolean
  isActive?: boolean
}

export default function ChatItem({ isSelected, isGroup, isActive }: ChatItemProps) {
  return (
    <Link
      to='/t/12312312'
      className={`flex cursor-pointer items-center gap-x-2 p-2 hover:bg-gray-100 ${
        isSelected ? 'bg-sky-100' : 'bg-white'
      } group relative rounded-lg`}
    >
      <Link
        to={path.user}
        aria-hidden={true}
        onClick={() => alert('Chat')}
        className='absolute right-5 hidden h-10 w-10 items-center justify-center rounded-full bg-white group-hover:flex'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width={20}
          height={20}
          viewBox='0 0 24 24'
          fill='none'
          stroke='black'
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
          className='lucide lucide-more-horizontal'
        >
          <circle cx={12} cy={12} r={1} />
          <circle cx={19} cy={12} r={1} />
          <circle cx={5} cy={12} r={1} />
        </svg>
      </Link>
      {isGroup ? (
        <div className='flex h-14 w-14 max-w-[56px] flex-wrap items-center justify-center gap-1'>
          <img
            src='https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/391693477_1340684853286440_6276600789723715784_n.jpg?stp=dst-jpg_p100x100&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pFK98y1Q-6AAX-tXJnz&_nc_ad=z-m&_nc_cid=1229&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfCTrYz8cdfG3viD5ktFiLiDAN2ELbH9kYzV0qm16ZCOkw&oe=653A5FCE'
            alt='Cil Emely'
            className='h-6 w-6 rounded-full'
          />
          <img
            src='https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/391693477_1340684853286440_6276600789723715784_n.jpg?stp=dst-jpg_p100x100&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pFK98y1Q-6AAX-tXJnz&_nc_ad=z-m&_nc_cid=1229&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfCTrYz8cdfG3viD5ktFiLiDAN2ELbH9kYzV0qm16ZCOkw&oe=653A5FCE'
            alt='Cil Emely'
            className='h-6 w-6 rounded-full'
          />
          <img
            src='https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/391693477_1340684853286440_6276600789723715784_n.jpg?stp=dst-jpg_p100x100&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pFK98y1Q-6AAX-tXJnz&_nc_ad=z-m&_nc_cid=1229&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfCTrYz8cdfG3viD5ktFiLiDAN2ELbH9kYzV0qm16ZCOkw&oe=653A5FCE'
            alt='Cil Emely'
            className='h-6 w-6 rounded-full'
          />
          <div className='flex h-6 w-6 items-center justify-center rounded-full border'>
            <span className='text-[8px] text-black'>+0</span>
          </div>
        </div>
      ) : (
        <div className='relative'>
          <img
            src='https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/391693477_1340684853286440_6276600789723715784_n.jpg?stp=dst-jpg_p100x100&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pFK98y1Q-6AAX-tXJnz&_nc_ad=z-m&_nc_cid=1229&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfCTrYz8cdfG3viD5ktFiLiDAN2ELbH9kYzV0qm16ZCOkw&oe=653A5FCE'
            alt='Cil Emely'
            className='h-14 w-14 rounded-full'
          />
          {isActive ? (
            <div className='absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-green-600 p-1'></div>
          ) : (
            ''
          )}
        </div>
      )}

      <div className='flex flex-col'>
        <p className='font-bold text-black'>Cil Emely</p>
        <div className='flex items-center'>
          <p className='max-w-[60%] truncate text-xs text-gray-400'>Hello World Hello World Hello World</p>
          <span className='text-xs text-gray-400'>&nbsp;- 2 hours ago</span>
        </div>
      </div>
    </Link>
  )
}
