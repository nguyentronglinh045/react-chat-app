import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import path from 'src/constants/path'
import { AuthenSchema, authenSchema } from 'src/utils/rule'
import { yupResolver } from '@hookform/resolvers/yup'
import Input from '../Input'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { setProfileToLS } from 'src/utils/auth'
import { User } from 'src/types/user.type'
import { useContext } from 'react'
import { AppContext } from 'src/contexts/app.context'
import { FirebaseError } from 'firebase/app'

type FormData = Pick<AuthenSchema, 'email' | 'password' | 'confirm_password'>
type Data = Pick<AuthenSchema, 'email' | 'password'>
const registerSchema = authenSchema.pick(['email', 'password', 'confirm_password'])
export default function RegisterForm() {
  const { isAuthenticated, setIsAuthenticated, profile, setProfile } = useContext(AppContext)
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors }
  } = useForm<FormData>({ resolver: yupResolver(registerSchema) })

  const handleRegister = async (data: Data) => {
    const auth = getAuth()
    try {
      const { user } = await createUserWithEmailAndPassword(auth, data.email, data.password)
      console.log('Tài khoản đã được tạo thành công: ', user)
      if (user) {
        const userData: User = {
          uid: user.uid || '',
          email: user.email || '',
          displayName: user.displayName || '',
          photoURL: user.photoURL || '',
          providerId: user.providerData[0]?.providerId || ''
        }
        setProfile(userData)
        setProfileToLS(userData)
        setIsAuthenticated(true)
      }
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.error('Lỗi khi tạo tài khoản: ', error.code)
        switch (error.code) {
          case 'auth/email-already-in-use':
            setError('email', { type: 'manual', message: 'Địa chỉ email này đã được sử dụng.' })
            break
          case 'auth/invalid-email':
            setError('email', { type: 'manual', message: 'Địa chỉ email không hợp lệ.' })
            break
          case 'auth/operation-not-allowed':
            setError('email', { type: 'manual', message: 'Đăng ký tài khoản chưa được kích hoạt.' })
            break
          default:
            setError('email', { type: 'manual', message: error.message })
        }
      }
    }
  }
  console.log('isAuthenticated', isAuthenticated)
  console.log('profile', profile)

  return (
    <form onSubmit={handleSubmit(handleRegister)} className='mx-auto flex max-w-xs flex-col gap-2'>
      <Input
        className='min-w-[320px]'
        classNameInput='w-full rounded-lg border border-gray-200 bg-gray-100 px-4 py-4 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none'
        name='email'
        placeholder='Email'
        register={register}
        errorMessage={errors.email?.message}
      />
      <Input
        className='min-w-[320px]'
        classNameInput='w-full rounded-lg border border-gray-200 bg-gray-100 px-4 py-4 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none'
        name='password'
        type='password'
        placeholder='Mật khẩu'
        register={register}
        errorMessage={errors.password?.message}
      />
      <Input
        className='min-w-[320px]'
        classNameInput='w-full rounded-lg border border-gray-200 bg-gray-100 px-4 py-4 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none'
        type='password'
        placeholder='Nhập lại Mật khẩu'
        register={register}
        name='confirm_password'
        errorMessage={errors.confirm_password?.message}
      />

      <button className='focus:shadow-outline mt-1 flex w-full items-center justify-center rounded-lg bg-indigo-500 py-4 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out hover:bg-indigo-700 focus:outline-none'>
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

        <span className='ml-3'>Đăng ký</span>
      </button>
      <div className='text-slay-500 mt-5 flex gap-2 text-base font-semibold'>
        Đã có tài khoản?
        <Link to={path.home} className='text-blue-700 underline'>
          Đăng nhập
        </Link>
      </div>
    </form>
  )
}
