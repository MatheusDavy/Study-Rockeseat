import React from "react";
import style from './TaskCard.module.css'
import { Trash, Check } from "phosphor-react";

interface TaskProps{
    concluded: boolean;
    content: string;
    onDeleteTask: (content: string)=> void;
    onChangeStatus: (content: string)=> void;
    
}

export function TaskCards({concluded, content, onDeleteTask, onChangeStatus}: TaskProps){
    function handleDeleteTask(){
        onDeleteTask(content)
    }    

    function handleChangeStatus(){
        onChangeStatus(content)
    }

    return(
        <div className={style.task}>
            <button className={concluded ? style.checkboxConcluded : style.checkbox } onClick={handleChangeStatus}>
            {concluded &&
                <Check size={14} />
            }
            </button>
            <div className={concluded ? style.contentConcluded : style.content}>
                {content}
            </div>
            <button className={style.trash} onClick={handleDeleteTask}>
                <Trash size={18} />
            </button>
        </div>
    )
}