import { Link } from 'react-router-dom'
import path from 'src/constants/path'

export default function LoginForm() {
  return (
    <div className='mx-auto max-w-xs'>
      <input
        className='w-full rounded-lg border border-gray-200 bg-gray-100 px-8 py-4 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none'
        type='email'
        placeholder='Email'
      />
      <input
        className='mt-5 w-full rounded-lg border border-gray-200 bg-gray-100 px-8 py-4 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none'
        type='password'
        placeholder='Mật khẩu'
      />
      <button className='focus:shadow-outline mt-5 flex w-full items-center justify-center rounded-lg bg-indigo-500 py-4 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out hover:bg-indigo-700 focus:outline-none'>
        <svg
          className='-ml-2 h-6 w-6'
          fill='none'
          stroke='currentColor'
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2' />
          <circle cx='8.5' cy={7} r={4} />
          <path d='M20 8v6M23 11h-6' />
        </svg>

        <span className='ml-3'>Đăng nhập</span>
      </button>
      <div className='text-slay-500 mt-5 flex gap-2 text-base font-semibold'>
        Chưa có tài khoản
        <Link to={path.register} className='text-blue-700 underline'>
          Đăng ký
        </Link>
      </div>
    </div>
  )
}
