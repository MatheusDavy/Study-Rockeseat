import { Trash, ThumbsUp } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import style from './Comment.module.css'


export function Comment({content, onDeleteComment}){
    const [likePost, setLikePost] = useState(0)

    function handleDeleteComment(){
        onDeleteComment(content)
    }

    function handleLikeChange(){
        setLikePost( likePost + 1)
    }

    return(
        <div className={style.comment}>
            <Avatar 
                hasBorder={false}
                source='https://avatars.githubusercontent.com/u/68488505?s=64&v=4'
            />
            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>Rafa Back-End</strong>
                            <time title='11 de Maio às 08:13h' dateTime='2022-05-11 8:13:38' className={style.hours}>Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar Comentário' onClick={handleDeleteComment}>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>
                        {content}
                    </p>
                </div>
                <footer>
                    <button onClick={handleLikeChange}>
                        <ThumbsUp />
                        Aplaudir <span>{likePost}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}