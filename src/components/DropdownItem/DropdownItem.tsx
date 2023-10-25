interface Props {
  title: string
  subTitle?: string
  iconSvg: JSX.Element
  onClick?: () => void
}

export default function DropdownItem({ iconSvg, onClick, title, subTitle }: Props) {
  return (
    <div
      className='flex cursor-pointer items-center gap-1 py-3 pl-3 duration-200 hover:bg-[#f2f2f2]'
      onClick={onClick}
      aria-hidden
    >
      <div className='flex h-7 w-7 items-center justify-center rounded-full bg-zinc-200'>{iconSvg}</div>
      <div className='flex flex-col'>
        <span className='text-base font-semibold text-[#050505]'>{title}</span>
        <span className='text-sm font-normal text-[#7a7b7e]'>{subTitle}</span>
      </div>
    </div>
  )
}
