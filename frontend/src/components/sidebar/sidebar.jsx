import React from 'react'

const sidebar = () => {
  return (
    <div>
        <SearchInput/>
        <div className='divider px-3'></div>
        <Conversations/>
        <Logout/>
    </div>
  )
}

export default sidebar