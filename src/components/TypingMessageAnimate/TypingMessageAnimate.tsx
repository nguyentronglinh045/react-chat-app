interface Props {
  name?: string
  avatar?: string
}

export default function TypingMessageAnimate({ name, avatar }: Props) {
  const defaut: Props = {
    name: 'Cil Emely',
    avatar:
      'https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/391693477_1340684853286440_6276600789723715784_n.jpg?stp=dst-jpg_p100x100&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pFK98y1Q-6AAX-tXJnz&_nc_ad=z-m&_nc_cid=1229&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfCTrYz8cdfG3viD5ktFiLiDAN2ELbH9kYzV0qm16ZCOkw&oe=653A5FCE'
  }
  return (
    <div className='flex items-center gap-2'>
      <div className='h-7 w-7'>
        <img src={avatar || defaut.avatar} alt={name || defaut.name} className='h-full w-full rounded-full' />
      </div>
      <div className='h-fit w-fit rounded-3xl bg-gray-200 px-6 py-3.5'>
        <div
          className='relative -left-[9999px] h-1 w-1 
                    animate-[dot-typing_1s_infinite_linear] rounded-full 
                  bg-gray-100 shadow-[9992px_0_0_0_#9880ff_,_9999px_0_0_0_#9880ff_,_10014px_0_0_0_#9880ff]'
        />
      </div>
    </div>
  )
}
