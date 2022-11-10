import React from "react"
import MyButton from "./UI/button/MyButton"

export const Header = ({title, post, removeAllPost}) => {
    return (
    <div className='width[100%] text-center items-center flex justify-center p-5 flex space-x-80 text-base md:space-x-50'>
        <h2 className='font-bold text-4xl text-purple-900'>Count: {post.length}</h2>
        <h2 className='font-bold text-4xl text-purple-900'>{title}</h2>
        <MyButton onClick={removeAllPost}><h2 className="text-2xl">Delete All</h2></MyButton>
      </div>
    )
}