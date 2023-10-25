import { useState } from 'react'
import Dropdown from '../Dropdown'
import DropdownItem from '../DropdownItem'

export default function ChatProfile() {
  const [notificationStatus, setNotificationStatus] = useState(true)
  return (
    <div className='h-screen w-[380px] max-w-[380px] shrink-0 overflow-y-auto'>
      <div className='flex flex-col gap-5 p-4'>
        <div className='flex flex-col gap-2'>
          <div className='relative h-20 w-20 shrink-0 self-center overflow-hidden rounded-full'>
            <img
              src='https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/391693477_1340684853286440_6276600789723715784_n.jpg?stp=dst-jpg_p100x100&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pFK98y1Q-6AAX-tXJnz&_nc_ad=z-m&_nc_cid=1229&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfCTrYz8cdfG3viD5ktFiLiDAN2ELbH9kYzV0qm16ZCOkw&oe=653A5FCE'
              alt='avt'
              className='absolute inset-0 object-cover'
            />
          </div>
          <span className='self-center text-lg font-semibold leading-5 text-[#050505]'>Cil Emely</span>
          <span className='select-none self-center text-sm font-semibold leading-4 text-[#65676b]'>Đang hoạt động</span>
        </div>
        <div className='flex flex-row flex-wrap justify-center'>
          <div className='flex w-[70px] shrink-0 flex-col items-center gap-[2px]'>
            <div
              aria-hidden
              className='flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200 duration-200 hover:bg-neutral-300'
              onClick={() => setNotificationStatus(!notificationStatus)}
            >
              {notificationStatus ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width={20}
                  height={20}
                  viewBox='0 0 24 24'
                  fill='#050505'
                  stroke='currentColor'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-bell'
                >
                  <path d='M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9' />
                  <path d='M10.3 21a1.94 1.94 0 0 0 3.4 0' />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width={20}
                  height={20}
                  viewBox='0 0 24 24'
                  fill='#050505'
                  stroke='currentColor'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-bell-off'
                >
                  <path d='M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5' />
                  <path d='M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7' />
                  <path d='M10.3 21a1.94 1.94 0 0 0 3.4 0' />
                  <path d='m2 2 20 20' />
                </svg>
              )}
            </div>
            <div className='line-clamp-2 select-none text-center text-sm font-normal'>
              {notificationStatus ? 'Tắt thông báo' : 'Bật lại'}
            </div>
          </div>
          <div className='flex w-[70px] shrink-0 flex-col items-center gap-[2px]'>
            <div
              aria-hidden
              className='flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200 duration-200 hover:bg-neutral-300'
              onClick={() => console.log('Mời')}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={20}
                height={20}
                viewBox='0 0 24 24'
                fill='#050505'
                stroke='currentColor'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-user-plus'
              >
                <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
                <circle cx={9} cy={7} r={4} />
                <line x1={19} x2={19} y1={8} y2={14} />
                <line x1={22} x2={16} y1={11} y2={11} />
              </svg>
            </div>
            <div className='line-clamp-2 select-none text-center text-sm font-normal'>Mời</div>
          </div>
          <div className='flex w-[70px] shrink-0 flex-col items-center gap-[2px]'>
            <div
              aria-hidden
              className='flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200 duration-200 hover:bg-neutral-300'
              onClick={() => console.log('Tìm kiếm')}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={18}
                height={18}
                viewBox='0 0 24 24'
                fill='none'
                stroke='#050505'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-search'
              >
                <circle cx={11} cy={11} r={8} />
                <path d='m21 21-4.3-4.3' />
              </svg>
            </div>
            <div className='line-clamp-2 select-none text-center text-sm font-normal'>Tìm kiếm</div>
          </div>
        </div>
        {/* <div className='w-full overflow-hidden rounded'>
          <div
            className='flex flex-row items-center justify-between px-1 duration-200 hover:bg-[#f2f2f2]'
            onClick={() => setShowDropdown(!showDropdown)}
            aria-hidden
          >
            <div className='px-2 py-3 text-base font-semibold text-[#050505]'>Thông tin đoạn chat</div>
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
            className={classNames('flex w-full flex-col duration-200 hover:bg-[#f2f2f2]', {
              'h-auto': showDropdown,
              'h-0': !showDropdown
            })}
          >
            <div className='flex gap-1 py-3 pl-3'>
              <div className='flex h-7 w-7 items-center justify-center rounded-full bg-zinc-200'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width={18}
                  height={18}
                  viewBox='0 0 24 24'
                  fill='#050505'
                  stroke='currentColor'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-pin'
                >
                  <line x1={12} x2={12} y1={17} y2={22} />
                  <path d='M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z' />
                </svg>
              </div>
              <span className='text-base font-semibold text-[#050505]'>Xem tin nhắn đã ghim</span>
            </div>
          </div>
        </div> */}
        <div className='flex flex-col'>
          <Dropdown title='Thôn tin về đoạn chat'>
            <DropdownItem
              title='Xem tin nhắn đã ghim'
              iconSvg={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width={18}
                  height={18}
                  viewBox='0 0 24 24'
                  fill='#050505'
                  stroke='currentColor'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-pin'
                >
                  <line x1={12} x2={12} y1={17} y2={22} />
                  <path d='M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z' />
                </svg>
              }
              onClick={() => console.log('click')}
            />
          </Dropdown>
          <Dropdown title='Tuỳ chỉnh đoạn chat'>
            <DropdownItem
              title='Đổi tên đoạn chat'
              iconSvg={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width={16}
                  height={16}
                  viewBox='0 0 24 24'
                  fill='#050505'
                  stroke='currentColor'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-pencil'
                >
                  <path d='M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z' />
                  <path d='m15 5 4 4' />
                </svg>
              }
            />
            <DropdownItem
              title='Thay đổi ảnh đại diện'
              iconSvg={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width={18}
                  height={18}
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-image'
                >
                  <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
                  <circle cx={9} cy={9} r={2} />
                  <path d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21' />
                </svg>
              }
            />
          </Dropdown>
          <Dropdown title='Quyền riêng tư và hỗ trợ'>
            <DropdownItem
              title='Báo cáo'
              subTitle='Đóng góp ý kiến và báo cáo cuộc trò chuyện'
              iconSvg={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width={20}
                  height={20}
                  viewBox='0 0 24 24'
                  fill='#050505'
                  stroke='white'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-alert-triangle'
                >
                  <path d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z' />
                  <path d='M12 9v4' />
                  <path d='M12 17h.01' />
                </svg>
              }
            />
            <DropdownItem
              title='Rời nhóm'
              iconSvg={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width={18}
                  height={18}
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-log-out'
                >
                  <path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4' />
                  <polyline points='16 17 21 12 16 7' />
                  <line x1={21} x2={9} y1={12} y2={12} />
                </svg>
              }
            />
          </Dropdown>
        </div>
      </div>
    </div>
  )
}
