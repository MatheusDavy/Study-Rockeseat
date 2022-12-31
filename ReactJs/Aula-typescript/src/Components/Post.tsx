import React from 'react'
import style from './Post.module.css'
import {format, formatDistanceToNow } from 'date-fns'
import  ptBR  from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import { ChangeEvent, FormEvent, useState } from 'react'

interface Author{
    name: string;
    role: string;
    avatarUrl: string;
}
interface Content{
    type: "paragraph" | "link";
    contentText: string;
}
interface PostProps{
    author: Author;
    publishedAt: Date;
    content: Content[];
}


//Para objetos nós não podemos definir a typage de cada atributo, mas sim do objeto inteiro
export function Post({ author, publishedAt, content}: PostProps){

//Obs: se iniciarmos com um array vazio, ele retornará um erro como ""
/*
const [comments, setComments] = useState([
    
])
*/
//Então ou devemos iniciar com um valor qualquer, ou adicionamos um tipo nele
const [comments, setComments] = useState<string[]>([])
    

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })


  //O typescript não entende o que significa o evento Event, então precisamos informar no parâmetro da função
  function handleCreateNewCommentChange(event:  ChangeEvent<HTMLTextAreaElement>){
    setNewCommentText(event.target.value)
  }

  function handleCreateNewComment(event: FormEvent){
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function deleteComment(commentDelete: string){
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
                        src={author.avatarUrl}
                        hasBorder
                        alt=''
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
                            <p key={line.contentText} >{line.contentText}</p>
                        )
                    } else if(line.type === 'link'){
                        return(
                            <p key={line.contentText}>
                                <a href="">{line.contentText}</a>
                            </p>
                        )
                    }
                })}
            </div>

            <form 
                onSubmit={handleCreateNewComment}
                className={style.commentForm}
            >
                <strong>Deixe seu feedback</strong>
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
                        />
                    )
                })}
            </div>
        </article>
    )
}

