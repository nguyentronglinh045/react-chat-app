import classNames from 'classnames'
import TypingMessageAnimate from './TypingMessageAnimate'

interface MessageProps {
  isMyMessage?: boolean
  isTyping?: boolean
}

export default function Message({ isMyMessage, isTyping }: MessageProps) {
  const messages = [
    '.',
    '..',
    '...',
    'Đây',
    'Đây là',
    'Đây là tín',
    'Đây là tín hiệu',
    'Đây là tín hiệu từ',
    'Đây là tín hiệu từ vũ',
    'Đây là tín hiệu từ vũ trụ'
  ]
  return (
    <>
      {isTyping ? (
        <div className='flex items-center gap-2'>
          <div className='h-7 w-7'>
            <img
              src='https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/391693477_1340684853286440_6276600789723715784_n.jpg?stp=dst-jpg_p100x100&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pFK98y1Q-6AAX-tXJnz&_nc_ad=z-m&_nc_cid=1229&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfCTrYz8cdfG3viD5ktFiLiDAN2ELbH9kYzV0qm16ZCOkw&oe=653A5FCE'
              alt='Cil Emely'
              className='h-full w-full rounded-full'
            />
          </div>
          <div className='h-fit w-fit rounded-3xl bg-gray-200 px-6 py-3.5'>
            <TypingMessageAnimate />
          </div>
        </div>
      ) : (
        <div
          className={classNames('flex items-end gap-2', {
            'flex-row-reverse': isMyMessage
          })}
        >
          <div className='mb-5 h-7 w-7'>
            <img
              src='https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/391693477_1340684853286440_6276600789723715784_n.jpg?stp=dst-jpg_p100x100&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pFK98y1Q-6AAX-tXJnz&_nc_ad=z-m&_nc_cid=1229&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfCTrYz8cdfG3viD5ktFiLiDAN2ELbH9kYzV0qm16ZCOkw&oe=653A5FCE'
              alt='Cil Emely'
              className='h-full w-full rounded-full'
            />
          </div>
          <div className='flex max-w-[50%] flex-col gap-y-1'>
            <span className={classNames('text-xs', { hidden: isMyMessage })}>Cil Emely</span>
            <ul className={classNames('flex flex-col gap-y-0.5', { 'items-end': isMyMessage })}>
              {messages.map((message, index) => (
                <li
                  key={index}
                  className={classNames('w-fit px-4 py-2', {
                    'rounded-l-md rounded-r-3xl bg-gray-200 first:rounded-tl-3xl last:rounded-bl-3xl': !isMyMessage,
                    'rounded-l-3xl rounded-r-md bg-blue-600 first:rounded-tr-3xl last:rounded-br-3xl': isMyMessage
                  })}
                >
                  <span className={classNames('text-black', { 'text-white': isMyMessage })}>{message}</span>
                </li>
              ))}
            </ul>
            <div className='flex justify-between gap-x-2'>
              <span className='text-xs'>19:50 thứ 3 ngày 24 tháng 10 năm 2023</span>
              {isMyMessage && (
                <div className='flex items-center gap-2'>
                  <span className='text-xs'>Đã gửi</span>
                  <div className='flex items-center'>
                    <img
                      src='https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/391693477_1340684853286440_6276600789723715784_n.jpg?stp=dst-jpg_p100x100&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pFK98y1Q-6AAX-tXJnz&_nc_ad=z-m&_nc_cid=1229&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfCTrYz8cdfG3viD5ktFiLiDAN2ELbH9kYzV0qm16ZCOkw&oe=653A5FCE'
                      alt='Cil Emely'
                      className='h-3 w-3 rounded-full'
                    />
                    <img
                      src='https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/391693477_1340684853286440_6276600789723715784_n.jpg?stp=dst-jpg_p100x100&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pFK98y1Q-6AAX-tXJnz&_nc_ad=z-m&_nc_cid=1229&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfCTrYz8cdfG3viD5ktFiLiDAN2ELbH9kYzV0qm16ZCOkw&oe=653A5FCE'
                      alt='Cil Emely'
                      className='h-3 w-3 rounded-full'
                    />
                    <img
                      src='https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/391693477_1340684853286440_6276600789723715784_n.jpg?stp=dst-jpg_p100x100&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pFK98y1Q-6AAX-tXJnz&_nc_ad=z-m&_nc_cid=1229&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfCTrYz8cdfG3viD5ktFiLiDAN2ELbH9kYzV0qm16ZCOkw&oe=653A5FCE'
                      alt='Cil Emely'
                      className='h-3 w-3 rounded-full'
                    />
                    <div className='flex items-center justify-center rounded-full'>
                      <span className='text-[10px]'>+4</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
