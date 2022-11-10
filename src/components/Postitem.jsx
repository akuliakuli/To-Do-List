import MyButton from "./UI/button/MyButton"
import React, {useState} from "react";
import settings from '../images/settings.png'
import { Modal } from "./Modal";
export const Postitem = ({post, remove, edit}) => {
    const [modal, setModal] = useState(false);
    const [item, setChangeItem] = useState();
    const [error, setError] = useState('')
    const modalActivate = () => {
      setModal(true);
    }
    const editPost = (e) => {
      e.preventDefault() 
      setError('');
      setChangeItem('');
      if(item.trim().length === 0){
        setError('Please enter valid to-do')
        return
      }
      setModal(false);
      edit(post, item);
    }
    return(
      
        <div className="intuative-checkbox  text-center justify-center align-center flex-row flex mt-5 w-full">
          <div className="border rounded-3xl p-5 b flex items-center ">
              <ul className="p-5">
                <input className="checkbox" type="checkbox" id="cbx1" name="cbxlistfoobar" tabindex="0"/>
                <label className="font-bold leading-[3rem] text-purple-900 mt-1 text-2xl ml-20" for="cbx1">{post.name}</label>
              </ul> 
              <button className="ml-14 w-7 h-7 hover:scale-110" onClick={modalActivate}><img className="w-full h-full" src={settings} alt="settings"/></button>
              <MyButton onClick={() => remove(post)}>Delete</MyButton>
          </div>
          {modal && <Modal setModal={setModal} setChangeItem={setChangeItem} editPost={editPost} post={post} error={error} item={item}/>}
      </div>
    )
}