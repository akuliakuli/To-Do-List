import React, { useState } from "react";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Postitem } from "./components/Postitem";
import './App.css';

function App() {
  const [posts,setPosts] = useState([
  ])

  const createList = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className=' width[100%] bg-white-300 flex item-center justify-center flex-col'>
      <Header post={posts} title={"Todo List"}/>
      <hr></hr>
      <Form create={createList}/>
      <hr></hr>
      {posts.length !== 0
        ? posts.map((post, index) => <Postitem remove={removePost} number={index + 1} post={post} key={post.id}/>)
        : <h1 className="text-center font-bold text-purple-900 mt-10 text-2xl">List not found...</h1>
      }
    </div>
  );
}

export default App;
