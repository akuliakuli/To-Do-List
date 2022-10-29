import React from "react";

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className='border rounded-2xl border-purple-900 pl-5 pr-5 pt-2 pb-2 m-5 hover:bg-purple-700 hover:text-white'>
            {children}
        </button>
    )
}

export default MyButton;