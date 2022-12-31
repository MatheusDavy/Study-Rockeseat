import React from 'react'
import style from './App.module.css'
import { useState } from 'react'
import { Header } from './Components/Header'
import { Asidebar } from './Components/Asidebar'
import { Post } from './Components/Post'

//Obs: lembre-se que a interface deve conter exatamente o que o objeto retorna, objeto/array/number/string/date/etc

interface PostProps{
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: { 
      type: 'paragraph' | 'link';
      contentText: string;
  }[];
  publishedAt: Date;
}

const posts: PostProps[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/89652212?v=4",
      name: "Maria Isabele",
      role: "Cyber Security",
    },
    content: [
      { type: 'paragraph', contentText: "Bom DHIA GURIZES!" },
      { type: 'paragraph', contentText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, tenetur fuga assumenda atque tempore provident delectus inventore sed et vero eius, molestiae nostrum doloremque consectetur amet, laboriosam repellat placeat nemo." },
      { type: 'link', contentText: "google.com" }
    ],
    publishedAt: new Date("2022-05-03 20:00:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/68488505?s=64&v=4",
      name: "Rafael Borges",
      role: "Back-End",
    },
    content: [
      { type: 'paragraph', contentText: "BAH TCHEE" },
      { type: 'paragraph', contentText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, tenetur fuga assumenda atque tempore provident delectus inventore sed et vero eius, molestiae nostrum doloremque consectetur amet, laboriosam repellat placeat nemo." },
      { type: 'link', contentText: "youtube.com" }
    ],
    publishedAt: new Date("2012-09-01 10:00:00")
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/93063213?v=4",
      name: "Felipe Bassetto",
      role: "Web Developer",
    },
    content: [
      { type: 'paragraph', contentText: "FALA PESSOAS" },
      { type: 'paragraph', contentText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, tenetur fuga assumenda atque tempore provident delectus inventore sed et vero eius, molestiae nostrum doloremque consectetur amet, laboriosam repellat placeat nemo." },
      { type: 'link', contentText: "uol.com" }
    ],
    publishedAt: new Date("2022-12-24 01:00:00")
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
            return (
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
