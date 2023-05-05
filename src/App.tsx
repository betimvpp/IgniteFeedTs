import { Post } from "./components/Post"
import { Header } from "./components/Header"
import "./global.css"
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar"
import { PostType } from "./components/Post"

const posts: PostType[] =[
  {
    id:1,
    author:{
      avatarUrl:'https://github.com/diego3g.png',
      name:'Diego Fernandes',
      role: 'CTO @RocketSeat',
    },
    content:[
      {type:'paragraph', content:'Fala galeraa 👋', },
      {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'link', content:'👉  jane.design/doctorcare', },
      {type:'link',content:'#novoprojeto', scontent:'#nlw', tcontent:'#rocketseat'},
    ],
    publishedAt: new Date('2023-05-03 20:57:43')
  }, 
  {
    id:2,
    author:{
    avatarUrl:'https://github.com/maykbrito.png',
    name:'Mayk Brito',
    role: 'Educator @RocketSeat',
    },
    content:[
      {type:'paragraph', content:'Fala galeraa 👋', },
      {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      {type:'link', content:'👉  jane.design/doctorcare'},
      {type:'link', content:'#novoprojeto', scontent:'#nlw', tcontent:'#rocketseat'}, 
    ],
    publishedAt: new Date('2023-05-04 20:57:43')
  }
];

function App() {
  return (
    <>
    <Header/>
    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        {posts.map(post=>{
          return  (<Post
            key={post.id}
            post={post}
          />)
        })}
      </main>
    </div>
    </>
  )
}

export default App
