export default function InputSearch() {
  return (
    <div className='relative flex w-full items-center'>
      <input
        type='text'
        name='search'
        className='w-full rounded-full bg-gray-100 py-2 pl-10 pr-2 text-black outline-none'
        placeholder='Search for messages'
      />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='none'
        stroke='black'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='lucide lucide-search absolute left-3'
      >
        <circle cx='11' cy='11' r='8' />
        <path d='m21 21-4.3-4.3' />
      </svg>
    </div>
  )
}
