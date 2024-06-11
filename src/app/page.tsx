'use client'
import { useDynamicFont } from './use-dynamic-font'

export default function Home() {
  const fontClass = useDynamicFont(250)

  return (
    <div className={fontClass.className}>
      <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
      <div
        className={`h-screen w-screen grid grid-cols-3 grid-rows-3 text-5xl overflow-hidden`}
      >
        <div className="flex items-center justify-center col-start-1 row-start-1">
          <span className="transform -rotate-45 text-yak">WORK</span>
        </div>
        <div className="flex items-center justify-center col-start-2 row-start-2">
          <span className="transform -rotate-45 text-yak">IN</span>
        </div>
        <div className="flex items-center justify-center col-start-3 row-start-3">
          <span className="transform -rotate-45 text-yak">PROGRESS</span>
        </div>
      </div>
    </div>
  )
}
