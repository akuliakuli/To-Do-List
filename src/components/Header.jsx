import React from "react"

export const Header = ({title, post}) => {
    return (
    <div className='width[100%] p-5 flex items-center justify-center space-x-80 text-base'>
        <h2 className='font-bold text-4xl text-purple-900'>{title}</h2>
        <h2 className='font-bold text-4xl text-purple-900'>Count: {post.length}</h2>
      </div>
    )
}