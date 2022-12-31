import style from './Post.module.css'
import {format, formatDistanceToNow } from 'date-fns'
import  ptBR  from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import { useState } from 'react'



export function Post({ author, publishedAt, content}){

const [comments, setComments] = useState([
    "Opa, tudo na paz ?"
])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewCommentChange(){
    setNewCommentText(event.target.value)
  }

  function handleCreateNewComment(){
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function deleteComment(commentDelete){
    //Não podemos apenar remover um valor dentro de um estado, precisamos atualizar o estado inteiro
    const commentsWithoutDeleteOne = comments.filter(comment => {
        return comment != commentDelete
    }) //No metodo filter, quando retornamos true, os valores são adicionados a lista. Então retornamos os valores diferentes do comentário a ser deletado
    setComments(commentsWithoutDeleteOne)
  }

  const isNewCommentEmpty = newCommentText.length == 0

    return(
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar
                        source={author.avatarUrl}
                        hasBorder
                    />

                    <div className={style.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()} className={style.hours}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={style.content}>
                {content.map( line => {
                    if(line.type === 'paragraph'){
                        return(
                            <p key={line.content} >{line.content}</p>
                        )
                    } else if(line.type === 'link'){
                        return(
                            <p key={line.content}>
                                <a href="">{line.content}</a>
                            </p>
                        )
                    }
                })}
            </div>

            <form 
                onSubmit={handleCreateNewComment}
                className={style.commentForm}
            >
                <strong>Deixei seu feedback</strong>
                <textarea 
                    name='comment'
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleCreateNewCommentChange}
                />
               <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
               </footer>
            </form>

            <div className={style.commentList}>
                {comments.map( comment => {
                    return(
                        <Comment 
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                            required
                        />
                    )
                })}
            </div>
        </article>
    )
}

