import classNames from 'classnames'

interface Props {
  wImg?: string
  hImg?: string
  flexDirection?: 'col' | 'row'
  avatar?: string
  name?: string
  isActive?: boolean
  activeInfo?: string
}

export default function Avatar({ isActive, avatar, name, activeInfo, flexDirection, wImg, hImg }: Props) {
  return (
    <div
      className={classNames('flex', {
        'flex-col items-center gap-y-2': flexDirection == 'col',
        'flex-row items-center gap-x-2': flexDirection == 'row'
      })}
    >
      <div className='relative w-fit'>
        {avatar ? (
          <img src={avatar} alt={name} className={`${hImg || 'h-14'} ${wImg || 'w-14'} rounded-full`} />
        ) : (
          <img
            src='https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/391693477_1340684853286440_6276600789723715784_n.jpg?stp=dst-jpg_p100x100&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pFK98y1Q-6AAX-tXJnz&_nc_ad=z-m&_nc_cid=1229&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfCTrYz8cdfG3viD5ktFiLiDAN2ELbH9kYzV0qm16ZCOkw&oe=653A5FCE'
            alt='Cil Emely'
            className='h-14 w-14 rounded-full'
          />
        )}
        {isActive && (
          <div className='absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-green-600 p-1' />
        )}
      </div>

      {activeInfo && (
        <div
          className={classNames('flex flex-col', {
            'items-start': flexDirection == 'row',
            'items-center gap-y-2': flexDirection == 'col'
          })}
        >
          <span className='text-lg font-semibold leading-5 text-[#050505]'>{name || 'Cil Emely'}</span>
          <span className='select-none text-sm leading-4 text-[#65676b]'>{activeInfo}</span>
        </div>
      )}
    </div>
  )
}
