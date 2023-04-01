import { v4 as uuidV4 } from 'uuid'

import styles from './List.module.css'

import Form from './Form';
import HeaderList from './HeaderList';
import Task from './Task';
import TaskEmpty from './TaskEmpty';
import { useState } from 'react';

export interface ITask {
  id: string;
  isChecked: boolean;
  text: string;
}


export default function List() {

  const [tasks, setTasks] = useState<ITask[]>([])

  function taskDone(): number {
    return tasks.filter(task => task.isChecked === true).length
  }
  
  function taskCreate(): number {
    return tasks.length
  }

  function onDelete(id: string) {
    const tasksWithoutDelete  = tasks.filter(tasks => tasks.id !== id);

    setTasks(tasksWithoutDelete);
  }

  function onCreate(text: string) {
    const newTask = {id: uuidV4(),text, isChecked: false}
    setTasks([...tasks, newTask] )
  }

  function onToggleClick(id: string) {
    const task = tasks.find(task => task.id === id);

    if (task)  {
      task.isChecked = !task.isChecked;
      setTasks([...tasks])
    }
      
    
  }

  return (
    <div className={styles.wrapper}>
      <Form onCreate={onCreate}/>
      <HeaderList taskcreate={taskCreate()} taskdone={taskDone()} />
      {tasks.length > 0 ? tasks.map((task) => <Task key={task.id} onToggleClick={onToggleClick} onDelete={onDelete} task={task} />) : (<TaskEmpty/>)} 
    </div>
)
}