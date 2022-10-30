import MyButton from "./UI/button/MyButton"

export const Postitem = ({post , remove, number}) => {
  
    return(
      
        <div className="intuative-checkbox  text-center justify-center align-center flex-row flex mt-5 w-full">
          <div className="border rounded-3xl p-5 b flex ">
              <ul className="p-5">
                <input className="checkbox" type="checkbox" id="cbx1" name="cbxlistfoobar" tabindex="0"/>
                <label className="font-bold leading-[3rem] text-purple-900 mt-1 text-2xl ml-20" for="cbx1">{post.name}</label>
              </ul> 
              {/* <ul className="p-5">
                <h1 className="font-bold text-xl underline underline-offset-4">ID</h1>
                <label for="cbx3" className="checked">{number} </label> 
              </ul> 
              <ul className="p-5">
                <h1 className="font-bold text-xl underline underline-offset-4">Todo</h1>
                <label for="cbx3" className="checked text-purple-900 font-bold">{post.name} </label> 
              </ul>           */}
              <MyButton onClick={() => remove(post)}>Delete</MyButton>
          </div>
      </div>
    )
}