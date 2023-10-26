import React, { useState } from 'react'

function AutoResizingTextarea() {
  const [text, setText] = useState('')
  const [rounded, setRounded] = useState('full')
  const textareaRef = React.createRef<HTMLTextAreaElement>()
  const maxTextAreaHeight = 120 // Đặt giá trị tối đa cho chiều cao

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = textareaRef.current
    setText(event.target.value)
    if (textarea) {
      if (textarea.scrollHeight <= maxTextAreaHeight) {
        textarea.style.height = 'auto'
        textarea.style.height = textarea.scrollHeight + 'px'
        console.log(textarea.scrollHeight)

        if (textarea.scrollHeight > 32 && textarea.scrollHeight <= 56) setRounded('xl')
        else if (textarea.scrollHeight > 56) setRounded('lg')
        else setRounded('full')
      }
    }
  }

  return (
    <textarea
      ref={textareaRef}
      value={text}
      onChange={handleTextareaChange}
      className={`w-full overflow-y-auto rounded-${rounded} bg-gray-200 py-1 pl-3 pr-10 text-black outline-none`}
      placeholder='Aa'
      rows={1} // Số hàng tối thiểu
      style={{ resize: 'none' }} // Chặn việc thay đổi kích thước thủ công
    />
  )
}

export default AutoResizingTextarea
