import MyButton from "./UI/button/MyButton"

export const Postitem = ({post , remove, number}) => {
    return(
        <div className="text-center justify-center align-center flex-row flex mt-5 w-full">
          <div className="border rounded-3xl p-5 b flex ">
          <ul className="p-5">
                <h1 className="font-bold text-xl underline underline-offset-4">ID</h1><p className="text-purple-900 font-bold">{number} </p> 
              </ul> 
              <ul className="p-5">
                <h1 className="font-bold text-xl underline underline-offset-4">Name</h1><p className="text-purple-900 font-bold">{post.name} </p> 
              </ul>    
              <ul className="p-5">
                <h1 className="font-bold text-xl underline underline-offset-4">Surname</h1><p className="text-purple-900 font-bold">{post.surname} </p> 
              </ul>       
              <MyButton onClick={() => remove(post)}>Delete</MyButton>
          </div>
      </div>
    )
}