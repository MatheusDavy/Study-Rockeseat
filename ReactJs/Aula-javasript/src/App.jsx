import { useState } from 'react'
import { Header } from './Components/Header'
import { Asidebar } from './Components/Asidebar'
import { Post } from './Components/Post'
import style from './App.module.css'

/*
Author = {
    avatar_url:
    name:
    role:

    published_at:

    content_post:
}

*/

const posts = [
  {
    id: 1,
    author:{
      avatarUrl: "https://avatars.githubusercontent.com/u/89652212?v=4",
      name: "Maria Isabele",
      role: "Cyber Security",
    },
    content: [
      {type: 'paragraph', content: "Bom DHIA GURIZES!"},
      {type: 'paragraph', content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, tenetur fuga assumenda atque tempore provident delectus inventore sed et vero eius, molestiae nostrum doloremque consectetur amet, laboriosam repellat placeat nemo."},
      {type: 'link', content: "google.com"}
    ],
    publishedAt: new Date("2022-05-03 20:00:00")
  },
  {
    id: 2,
    author:{
      avatarUrl: "https://avatars.githubusercontent.com/u/68488505?s=64&v=4",
      name: "Rafael Borges",
      role: "Back-End",
    },
    content: [
      {type: 'paragraph', content: "BAH TCHEE"},
      {type: 'paragraph', content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, tenetur fuga assumenda atque tempore provident delectus inventore sed et vero eius, molestiae nostrum doloremque consectetur amet, laboriosam repellat placeat nemo."},
      {type: 'link', content: "youtube.com"}
    ],
    publishedAt: new Date("2012-09-01 10:00:00")
  },
  

]

function App() {

  return (
    <section>
      <Header />
      <div className={style.wrapper}>
        <Asidebar />
        <main>
          {posts.map(post => {
            return(
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </section>
  )
}

export default App
