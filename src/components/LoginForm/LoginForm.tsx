import { Link } from 'react-router-dom'
import path from 'src/constants/path'
import Input from '../Input'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthenSchema, authenSchema } from 'src/utils/rule'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { AppContext } from 'src/contexts/app.context'
import { FirebaseError } from 'firebase/app'
import { setProfileToLS } from 'src/utils/auth'
import { User } from 'src/types/user.type'

type LoginData = Pick<AuthenSchema, 'email' | 'password'>
const loginSchema = authenSchema.pick(['email', 'password'])
export default function LoginForm() {
  const { setIsAuthenticated, setProfile } = useContext(AppContext)
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors }
  } = useForm<LoginData>({ resolver: yupResolver(loginSchema) })

  const handleRegister = async (data: LoginData) => {
    const auth = getAuth()
    try {
      const { user } = await signInWithEmailAndPassword(auth, data.email, data.password)
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
        switch (error.code) {
          case 'auth/invalid-email':
            setError('email', { type: 'manual', message: 'Địa chỉ email không hợp lệ.' })
            break
          case 'auth/user-disabled':
            setError('email', { type: 'manual', message: 'Tài khoản của bạn đã bị vô hiệu hóa.' })
            break
          case 'auth/user-not-found':
            setError('email', { type: 'manual', message: 'Không tìm thấy tài khoản với địa chỉ email này.' })
            break
          case 'auth/wrong-password':
            setError('password', { type: 'manual', message: 'Mật khẩu không chính xác.' })
            break
          case 'auth/invalid-login-credentials':
            setError('email', { type: 'manual', message: 'Email hoặc mật khẩu không chính xác.' })
            setError('password', { type: 'manual', message: 'Email hoặc mật khẩu không chính xác.' })
            break
          default:
            setError('email', { type: 'manual', message: error.message })
        }
      }
    }
  }
  return (
    <form className='mx-auto flex max-w-xs flex-col gap-2' onSubmit={handleSubmit(handleRegister)}>
      <Input
        className='min-w-[320px]'
        classNameInput='w-full rounded-lg border border-gray-200 bg-gray-100 px-4 py-4 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none'
        type='email'
        placeholder='Email'
        name='email'
        register={register}
        errorMessage={errors.email?.message}
      />
      <Input
        className='min-w-[320px]'
        classNameInput='w-full rounded-lg border border-gray-200 bg-gray-100 px-4 py-4 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none'
        type='password'
        name='password'
        placeholder='Mật khẩu'
        register={register}
        errorMessage={errors.password?.message}
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

        <span className='ml-3'>Đăng nhập</span>
      </button>
      <div className='text-slay-500 mt-5 flex gap-2 text-base font-semibold'>
        Chưa có tài khoản
        <Link to={path.register} className='text-blue-700 underline'>
          Đăng ký
        </Link>
      </div>
    </form>
  )
}
