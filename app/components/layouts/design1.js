import React from 'react'
import TopNav from './Topnav'
import LeftNav from './Leftnav'
import Center from './CenterSection'
import RightTop from './CenterSection/RightTop'
import RightBottom from './CenterSection/RightBottom'

export default function Design1() {
  return (
    <div className="text-black w-full max-w-[1500px] mx-auto h-full flex flex-col items-start justify-start p-4 gap-4">
    <section className="w-full h-[120px]">
      <TopNav />
    </section>
    <section className="w-full h-full flex items-start justify-start gap-4">
      <LeftNav />
      <div className="w-full h-full ">
        <div
          type={3}
          className={`w-full h-full rounded-br-[200px] duration-500 flex gap-4 items-end justify-end `}
        >
          <Center />
          <section className="flex flex-col w-[200px] h-full items-start justify-start gap-4">
            <RightTop />
            <RightBottom />
          </section>
        </div>
      </div>
    </section>
  </div>
  )
}
