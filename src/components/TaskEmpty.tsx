import styles from './TaskEmpty.module.css';

import clipboard from '../assets/clipboard.svg';

export default function TaskEmpty() {
  return (
    <div className={styles.content}>
      <div className={styles.no_content}>
        <img src={clipboard}></img>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}