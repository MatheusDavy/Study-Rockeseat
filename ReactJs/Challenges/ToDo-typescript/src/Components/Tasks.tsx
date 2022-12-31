import React, { FormEvent, useState } from "react";
import style from './Tasks.module.css'
import { PlusCircle, ClipboardText } from "phosphor-react";

// Component
import { TaskCards } from "./TaskCard";

interface TaskCard{
    content: string,
    status: boolean;
}




export function Tasks() {
    const [taskCards, setTaskCards] = useState<TaskCard[]>([])
    const [numCheckedTask, setNumCheckedTask] = useState(0)

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault()
        const newContentText: string = event.target.task.value //Valor do imput
        let alreadContainsTask = taskCards.some(function(el, i){
            return el.content === newContentText
        }) //Verificar se já contém a task que será adicionada
        
        if(newContentText != '' && alreadContainsTask === false){
            setTaskCards([
                {
                    content: newContentText,
                    status: false,
                }
            ,...taskCards])
        }   //Não vai permitir que seja adicionado a mesma task e nem task vazia
    }

    function removeTask(content: string) {
        //Não podemos apenar remover um valor dentro de um estado, precisamos atualizar o estado inteiro
        const taskWithoutDeleteOne = taskCards.filter(contentState => {
            return contentState.content != content
        }) //No metodo filter, quando retornamos true, os valores são adicionados a lista. Então retornamos os valores diferentes do comentário a ser deletado
        setTaskCards(taskWithoutDeleteOne)
    }

    function changeStatusTask(content: string){
        //Mudar o estado da task
        let indice = 0
        taskCards.forEach((el, i) =>{
            if(el.content === content){
                indice = i
            }
        })
        const tempTask = [...taskCards]
        tempTask[indice].status = !tempTask[indice].status
        
        setTaskCards(tempTask)
        

        //Adicionar quantas task foram checadas
        let checkedTask = 0
        taskCards.forEach((el, i) =>{
            if(el.status === true){
                checkedTask = checkedTask + 1
            }
        })
        setNumCheckedTask(checkedTask)

        
    }

    return (
        <main className={style.containerTask}>
            <form onSubmit={handleCreateNewTask}>
                <input name="task" placeholder="Adicione uma nova tarefa"></input>
                <button type="submit">Criar <PlusCircle size={16} /></button>
            </form>

            <div className={style.contentTask}>
                <div className={style.taskInfo}>
                    <div className={style.createdTasks}>Tarefas criadas <span>{taskCards.length}</span></div>
                    <div className={style.concludedTasks}>Concluídas <span>{numCheckedTask} de {taskCards.length}</span></div>
                </div>

                <div className={style.containerTaskCards}>
                    {taskCards.length == 0 &&
                        <div className={style.messageWhenNoHaveTask}>
                            <ClipboardText size={56} />
                            <strong>Você ainda não tem tarefas cadastradas</strong>
                            <span>Crie tarefas e organize seus itens a fazer</span>
                        </div>
                    }

                    {
                        taskCards.map((task) => {
                            return (
                                <TaskCards
                                    key={task.content}
                                    content={task.content}
                                    concluded={task.status}
                                    onDeleteTask={removeTask}
                                    onChangeStatus={changeStatusTask}
                                />
                            )
                        })
                    }


                </div>
            </div>
        </main>
    )
}