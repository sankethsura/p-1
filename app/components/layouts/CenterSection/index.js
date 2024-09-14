import NeomorphicTable from '@/app/comps/NeomorphicTable'
import React from 'react'

export default function Center() {
  return (
    <section className="w-full h-full ">
    <NeomorphicTable type={1} className={`relative overflow-hidden`}>
      {/* <img
        src="./spider.png"
        className="absolute top-1 duration-300 right-1 w-[50px]"
      /> */}
    </NeomorphicTable>
  </section>
  )
}
