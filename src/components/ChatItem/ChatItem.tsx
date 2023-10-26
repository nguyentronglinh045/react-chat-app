import { Link } from 'react-router-dom'
import classNames from 'classnames'
import GroupAvatar from '../GroupAvatar'
import Avatar from '../Avatar'

interface ChatItemProps {
  isSelected?: boolean
  isGroup?: boolean
  isActive?: boolean
}

export default function ChatItem({ isSelected, isGroup, isActive }: ChatItemProps) {
  return (
    <Link
      to='/t/12312312'
      className={classNames(
        'group relative flex cursor-pointer items-center gap-x-2 rounded-lg p-2 hover:bg-gray-100',
        {
          'bg-sky-100': isSelected,
          'bg-white': !isSelected
        }
      )}
    >
      <button className='absolute right-5 hidden h-10 w-10 items-center justify-center rounded-full bg-white group-hover:flex'>
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
      </button>
      {isGroup ? <GroupAvatar /> : <Avatar isActive={isActive} />}

      <div className='flex flex-col'>
        <p className='font-bold text-black'>Cil Emely</p>
        <div className='flex items-center'>
          <p className='max-w-[60%] truncate text-xs text-gray-400'>Chờ đợi tín hiệu từ vũ trụ</p>
          <span className='text-xs text-gray-400'>&nbsp;- 2 hours ago</span>
        </div>
      </div>
    </Link>
  )
}
