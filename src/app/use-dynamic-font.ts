import { useState } from 'react'

import { Roboto, Open_Sans } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '400',
})

const fonts = [roboto, openSans]

export const useDynamicFont = (intervalTime: number) => {
  const [fontClass, setFontClass] = useState(fonts[0])

  useState(() => {
    const interval = setInterval(() => {
      setFontClass(fonts[(fonts.indexOf(fontClass) + 1) % fonts.length])
    }, intervalTime)

    return () => clearInterval(interval)
  })

  console.log(fontClass)
  return fontClass
}
