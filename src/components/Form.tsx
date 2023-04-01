import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from './Form.module.css'

interface FormProps {
  onCreate: (text: string) => void;
}

export default function Form( {onCreate}: FormProps) {

  const [newTask, setNewTask] = useState('')

  function handleCreate(event: FormEvent) {
    event?.preventDefault();

    onCreate(newTask)

    setNewTask('')

  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
   setNewTask(event?.target.value);
  }

  return (
    <form className={styles.form} onSubmit={handleCreate}>
      <input 
        className={styles.input} 
        type="text" 
        placeholder="Adicione um nova tarefa" 
        onChange={handleNewTaskChange}
        value={newTask}
      />
      <button className={styles.button} type="submit">
        Criar
        <PlusCircle size={16} weight='bold' />
      </button>
    </form>
)
}