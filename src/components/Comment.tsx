import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import {Trash, ThumbsUp} from 'phosphor-react'

interface CommentProps{
  content: string;
  deleteComment: (comment:string)=>void;
}


export function Comment({content, deleteComment}:CommentProps){
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment(){
    deleteComment(content)
  }

  function handleLikeComment(){
    setLikeCount((state)=>{
      return state + 1;
    });
  }

  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/lucasdmmc.png"/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Fulano de Tal</strong>
              <time dateTime="02/05/2023">Cerca de </time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentáro'>
              <Trash size={24}/>
            </button>
          </header>
          
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp/>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}