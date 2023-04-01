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
        <div className={styles.unchecked}></div>  
      )}

      <p>{task.text}</p>
      <Trash onMouseDown={handleDelete}  className={styles.trash} size={14}/>
    </div>        
  )
}