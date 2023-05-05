import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { ChangeEvent, FormEvent, useState } from 'react';


interface Author{
    name:string;
    role:string;
    avatarUrl:string;
}

interface Content{
    tcontent?: string;
    scontent?: string;
    type:'paragraph'|'link';
    content:string;
}

export interface PostType{
  id: number;
  author: Author;
  publishedAt:Date;
  content: Content[];
}

interface PostProps{
  post: PostType;
}

export function Post ({post}: PostProps){
  const [comments, setComments] = useState([
    'Post muito bacana, hein!'
  ]);
  
  const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
    locale: ptBR
  });

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt,{
    locale: ptBR,
    addSuffix: true
  });

  const [newCommentText, setNewCommentText]=useState('');

  function handleCreateNewComment(event: FormEvent){
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange(event:ChangeEvent<HTMLTextAreaElement>){
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete:string){
    const commentsWhithoutDeleted = comments.filter(comment =>{
      return comment !== commentToDelete;
    })

    setComments(commentsWhithoutDeleted);
  }

  return(
   <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl}/>
          <div className={styles.info}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {post.content.map(line=>{
          if(line.type == 'paragraph'){
            return <p key={line.content}>{line.content}</p>; 
          }else if(line.type == 'link'){
            return <p key={line.content}><a href="">{line.content}</a> <a href="">{line.scontent}</a> <a href="">{line.tcontent} </a></p>;
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment}  className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>
        <textarea required value={newCommentText} name="comment" onChange={handleNewCommentChange} placeholder='Deixe um Comentário'/>
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment =>{
          return <Comment deleteComment={deleteComment} key={comment} content={comment}/>
        })}
      </div>
   </article>
  )
}