import { useParams } from 'react-router-dom'

export default function ChatAreaHeader() {
  const { roomId } = useParams()

  return (
    <div className='flex h-[60px] items-center justify-between border-b border-r px-4 py-2'>
      <div className='flex items-center gap-x-2'>
        <div className='relative'>
          <img
            src='https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/391693477_1340684853286440_6276600789723715784_n.jpg?stp=dst-jpg_p100x100&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pFK98y1Q-6AAX-tXJnz&_nc_ad=z-m&_nc_cid=1229&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfCTrYz8cdfG3viD5ktFiLiDAN2ELbH9kYzV0qm16ZCOkw&oe=653A5FCE'
            alt='Cil Emely'
            className='h-10 w-10 rounded-full'
          />

          <div className='absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border-2 border-white bg-green-600 p-1' />
        </div>
        <div className='flex flex-col'>
          <p className='m-0 p-0 text-lg font-semibold leading-6 text-black'>Cil Emely roomId: {roomId}</p>
          <span className='text-xs text-gray-500'>Hoạt động 8 phút trước</span>
        </div>
      </div>
      <div className='flex gap-x-2'>
        <button className='rounded-full p-3 hover:bg-gray-200'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={16}
            height={16}
            fill='#0084ff'
            viewBox='0 0 512 512'
            className=''
          >
            <path d='M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z' />
          </svg>
        </button>
        <button className='rounded-full p-2 hover:bg-gray-200'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='#0084ff'
            width={24}
            height={24}
            viewBox='0 0 576 512'
            className=''
          >
            <path d='M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z' />
          </svg>
        </button>
        <button className='rounded-full p-2 hover:bg-gray-200'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='#0084ff'
            width={24}
            height={24}
            viewBox='0 0 512 512'
            className='rounded-full shadow-[0_0_6px_#0084ff]'
          >
            <path d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z' />
          </svg>
        </button>
      </div>
    </div>
  )
}
