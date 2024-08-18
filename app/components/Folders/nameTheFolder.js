import React from 'react'

export default function NameTheFolder({folderName}) {
  return (
    <div className='text-xs font-semibold'>{folderName || "untitled"}</div>
  )
}
