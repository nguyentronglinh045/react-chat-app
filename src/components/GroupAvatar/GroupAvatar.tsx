import classNames from 'classnames'

interface GroupAvatarProps {
  sizeContainer?: number
  sizeImg?: number
  listAvatar?: Array<{ src?: string; name?: string }>
  activeInfo?: string
  name?: string
  flexDirection?: 'col' | 'row'
}

export default function GroupAvatar({
  listAvatar,
  sizeContainer,
  sizeImg,
  activeInfo,
  name,
  flexDirection
}: GroupAvatarProps) {
  const defaultGroup = {
    name: 'Group Chat',
    avatarGroup:
      'https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/391693477_1340684853286440_6276600789723715784_n.jpg?stp=dst-jpg_p100x100&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pFK98y1Q-6AAX-tXJnz&_nc_ad=z-m&_nc_cid=1229&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfCTrYz8cdfG3viD5ktFiLiDAN2ELbH9kYzV0qm16ZCOkw&oe=653A5FCE'
  }

  return (
    <div
      className={classNames('flex', {
        'flex-col items-center gap-y-2': flexDirection == 'col',
        'flex-row items-center gap-x-2': flexDirection == 'row'
      })}
    >
      <div
        className={`relative flex h-${sizeContainer || 14} w-${sizeContainer || 14}
         flex-wrap items-center justify-center gap-1`}
      >
        {listAvatar ? (
          listAvatar?.map((avatar, index) => (
            <img
              key={index}
              src={avatar.src}
              alt={avatar.name}
              className={`h-${sizeImg || 6} w-${sizeImg || 6} rounded-full`}
            />
          ))
        ) : (
          <>
            <img
              src={defaultGroup.avatarGroup}
              alt={defaultGroup.name}
              className={`w-${sizeImg || 6} h-${sizeImg || 6} rounded-full`}
            />
            <img
              src={defaultGroup.avatarGroup}
              alt={defaultGroup.name}
              className={`w-${sizeImg || 6} h-${sizeImg || 6} rounded-full`}
            />
            <img
              src={defaultGroup.avatarGroup}
              alt={defaultGroup.name}
              className={`w-${sizeImg || 6} h-${sizeImg || 6} rounded-full`}
            />
          </>
        )}

        <div className={`w-${sizeImg || 6} h-${sizeImg || 6} rounded-full border`}>
          <span
            className={`flex text-[8px] text-black w-${sizeImg || 6} h-${sizeImg || 6} items-center justify-center`}
          >
            +0
          </span>
        </div>
        {/* {isActive && (
            <div className='absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-green-600 p-1' />
          )} */}
      </div>
      {activeInfo && (
        <div
          className={classNames('flex flex-col', {
            'items-start': flexDirection == 'row',
            'items-center gap-y-2': flexDirection == 'col'
          })}
        >
          <span className='text-lg font-semibold leading-5 text-[#050505]'>{name || defaultGroup.name}</span>
          <span className='select-none text-sm leading-4 text-[#65676b]'>{activeInfo}</span>
        </div>
      )}
    </div>
  )
}
