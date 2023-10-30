import { Outlet, useLocation } from 'react-router-dom'
import LoginWithGithub from 'src/components/LoginWithGithub'
import LoginWithGoogle from 'src/components/LoginWithGoogle'
import { memo } from 'react'
import path from 'src/constants/path'

const HomeLayout = () => {
  const { pathname } = useLocation()
  console.log('home layout')

  return (
    <div className='flex min-h-screen justify-center bg-gray-100 text-gray-900'>
      <div className='m-0 flex max-w-screen-xl flex-1 justify-center bg-white shadow sm:m-10 sm:rounded-lg'>
        <div className='p-6 sm:p-12 lg:w-1/2 xl:w-5/12'>
          <div className='mt-12 flex flex-col items-center'>
            <h1 className='text-2xl font-extrabold xl:text-3xl'>
              {pathname === path.register ? 'Đăng ký' : 'Đăng nhập'}
            </h1>
            <div className='mt-8 w-full flex-1'>
              <div className='flex flex-col items-center'>
                <LoginWithGoogle />
                <LoginWithGithub />
              </div>

              <div className='my-6 border-b text-center'>
                <div className='inline-block translate-y-1/2 transform bg-white px-2 text-sm font-medium leading-none tracking-wide text-gray-600'>
                  Hoặc {pathname === path.register ? 'đăng ký' : 'đăng nhập'} với e-mail
                </div>
              </div>
              <Outlet />
              <div className='mt-6 flex flex-col gap-1 text-center text-xs text-gray-600'>
                <div className='text-slay-300 text-sm'>Điều khoản dịch vụ</div>
                <div className='text-slay-300 text-sm'>Về chính sách bảo mật dịch vụ</div>
              </div>
            </div>
          </div>
        </div>
        <div className='hidden flex-1 bg-indigo-100 text-center lg:flex'>
          <div className='m-12 w-full bg-contain bg-center bg-no-repeat xl:m-16'>
            <img
              src='https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg'
              alt='bg'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const Home = memo(HomeLayout)
export default Home
