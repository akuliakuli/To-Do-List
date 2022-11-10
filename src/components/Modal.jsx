import MyButton from "./UI/button/MyButton"
import exchange from '../images/exchange.png'

export const Modal = (props) => {
    return(
        <div className="backdrop-blur-sm bg-black/30 h-full w-full z-50 fixed inset-x-2/4 inset-y-2/4 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
            <div className="shadow-2xl rounded-3xl p-10 relative bg-purple-200 pl-20 pr-20">
              <button className="text-2xl	 absolute font-bold right-4 top-2" onClick={e => props.setModal(false)}>X</button>
              <h2 className="m-1 font-bold leading-[3rem] text-purple-900 text-3xl underline">To-Do Settings</h2>
              <form className="m-5 flex flex-col" onSubmit={props.editPost}>
                <ul className="flex justify-center items-center flex-col">
                  <h2 className="m-1 font-bold leading-[3rem] flex text-black-900 text-2xl" for="cbx1">{props.post.name}</h2>
                  <img className="w-10 h-10" src={exchange} alt="Logo" />
                  <h2 className="m-1 font-bold leading-[3rem] flex text-black-900 text-2xl" for="cbx1">{props.item}</h2>
                </ul>
                {props.error && <h2 className="mb-2 font-bold text-red-700">{props.error}</h2> }
                <input 
                  value={props.item}
                  onChange={e => props.setChangeItem(e.target.value)}
                  className="border border-purple-900 rounded-2xl bg-transparent p-2" type="text" placeholder="Input new" name="Todo" />
                  <MyButton>Make changes</MyButton>
              </form>
            </div>
          </div>
    )
}