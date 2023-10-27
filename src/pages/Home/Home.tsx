import LoginWithGithub from 'src/components/LoginWithGithub'
import LoginWithGoogle from 'src/components/LoginWithGoogle'

export default function Home() {
  return (
    <div className='flex min-h-screen justify-center bg-gray-100 text-gray-900'>
      <div className='m-0 flex max-w-screen-xl flex-1 justify-center bg-white shadow sm:m-10 sm:rounded-lg'>
        <div className='p-6 sm:p-12 lg:w-1/2 xl:w-5/12'>
          <div className='mt-12 flex flex-col items-center'>
            <h1 className='text-2xl font-extrabold xl:text-3xl'>Đăng nhập</h1>
            <div className='mt-8 w-full flex-1'>
              <div className='flex flex-col items-center'>
                <LoginWithGoogle />

                <LoginWithGithub />
              </div>

              <div className='my-12 border-b text-center'>
                <div className='inline-block translate-y-1/2 transform bg-white px-2 text-sm font-medium leading-none tracking-wide text-gray-600'>
                  Hoặc đăng nhập với e-mail
                </div>
              </div>

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
                <div className='mt-6 text-center text-xs text-gray-600'>
                  <div className='border-b border-dotted border-gray-500'>Điều khoản dịch vụ</div>

                  <div className='border-b border-dotted border-gray-500'>Về chính sách bảo mật dịch vụ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='hidden flex-1 bg-indigo-100 text-center lg:flex'>
          <div className='m-12 w-full bg-contain bg-center bg-no-repeat xl:m-16'>
            <img
              src='https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  )
}
