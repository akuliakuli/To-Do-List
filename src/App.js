import  { React,useState, useEffect } from "react";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Postitem } from "./components/Postitem";
import './App.css';

const getLocalItems = () => {
  let list = localStorage.getItem('lists');
  if(list){
    return JSON.parse(localStorage.getItem('lists'));
  }else{
    return [];
  }
}

function App() {
  const [posts,setPosts] = useState(getLocalItems())
  
  const createList = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const editPost = (post, item) => {
    setPosts(
      posts.map(edit => {
        if (edit.id === post.id) {
          edit.name = item
        }
        return edit
      }),
    )
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }
  const removeAllPost = () => {
    setPosts([]);
  }
  useEffect(()=>{
    localStorage.setItem('lists', JSON.stringify(posts))
  }, [posts]);
  return (
    <div className=' width[100%] bg-white-300 flex item-center justify-center flex-col'>
      <Header removeAllPost={removeAllPost} post={posts} title={"Todo List"}/>
      <hr></hr>
      <Form create={createList}/>
      <hr></hr>
      {posts.length !== 0
        ? posts.map((post, index) => <Postitem edit={editPost} remove={removePost} number={index + 1} post={post} key={post.id}/>)
        : <h1 className="text-center font-bold text-purple-900 mt-10 text-2xl">List not found...</h1>
      }
    </div>
  );
}

export default App;
