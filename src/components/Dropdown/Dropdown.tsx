import classNames from 'classnames'
import { useState } from 'react'

interface Props {
  title: string
  children?: React.ReactNode
}
export default function Dropdown({ title, children }: Props) {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <div className='w-full cursor-pointer overflow-hidden rounded'>
      <div
        className='flex flex-row items-center justify-between px-1 duration-200 hover:bg-[#f2f2f2]'
        onClick={() => setShowDropdown(!showDropdown)}
        aria-hidden
      >
        <div className='px-2 py-3 text-base font-semibold text-[#050505]'>{title}</div>
        <div
          className={classNames('duration-100', {
            'rotate-90': showDropdown
          })}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            viewBox='0 0 24 24'
            fill='none'
            stroke='#050505'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
            className='lucide lucide-chevron-right'
          >
            <path d='m9 18 6-6-6-6' />
          </svg>
        </div>
      </div>
      <div
        className={classNames('flex w-full flex-col', {
          'h-auto': showDropdown,
          'h-0': !showDropdown
        })}
      >
        {children}
      </div>
    </div>
  )
}
