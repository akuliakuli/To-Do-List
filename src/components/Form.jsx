import React from "react"
import { useState, useEffect } from "react"

export const Form = ({create}) => {
    const [error, setError] = useState('')
    const [disableda, setDisabled] = useState('enabled')
    const [post, setPost] = useState({
        name: '',
      })
      const AddNewPost = (e) => {
        e.preventDefault();
        setError('');
        if(post.name.trim().length === 0){
            setError('Please enter valid to-do')
            return
        }
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({
          name: '',
        })
      }
    return(
        <form className="flex flex-col text-purple-900 w-auto mb-14 flex flex-col items-center mt-10 text-center justify-center text-base">
            {error && <h2 className="font-bold text-red-700">{error}</h2> }
            <ul className="flex">
                <li className="flex m-4 flex-col items-start">
                <label className="ml-2"><b>Write your todo</b></label>
                <input 
                value={post.name}
                onChange={e => setPost({...post, name: e.target.value})}
                className="border border-purple-900 rounded-2xl bg-transparent p-2" type="text" placeholder="Here" name="Todo" />
                </li>
            </ul>
            <button onClick={AddNewPost} className="border w-96 rounded-2xl border-purple-900 pl-5 pr-5 pt-2 pb-2 m-5 hover:bg-purple-700 hover:text-white" type="submit">Create</button>
            
            </form>
    )
}