import styles from './Task.module.css'

import { Trash, Check } from "phosphor-react";
import { ITask } from './List';

interface TaskProps {
  task: ITask,
  onDelete: (id: string) => void,
  onToggleClick: (id: string) => void
}

export default function Task({ task, onDelete, onToggleClick }:TaskProps) {

  function handleDelete() {
    onDelete(task.id)
  }

  function handleToggleClick() {
    onToggleClick(task.id)
  }

  return (
    <div className={styles.task} onClick={handleToggleClick}>
      {task.isChecked ? (
        <div className={styles.checked}>
          <Check size={14} weight='bold' color='white'/>
        </div>
      ) : (
        <div>
          <div className={styles.unchecked}></div> 
        </div>
         
      )}

      {
        task.isChecked ? (<p className={styles.textChecked}>{task.text}</p>) : (<p>{task.text}</p>)
      }
      
      <div className={styles.coverTrash} onMouseDown={handleDelete} >
        <Trash className={styles.trash} size={14} width={25}/>
      </div>
      
    </div>        
  )
}