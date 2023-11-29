import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
      <div
        className={`h-screen w-screen grid grid-cols-3 grid-rows-3 ${dmSans.className} text-5xl overflow-hidden`}
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
    </>
  )
}
