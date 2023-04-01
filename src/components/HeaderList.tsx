import styles from './HeaderList.module.css'

interface TaskCount {
  taskdone: number;
  taskcreate: number;
}

export default function HeaderList({ taskdone, taskcreate }:TaskCount) {
  return (
    <div className={styles.header_list}>
      <div className={styles.content_header}>
        <p className={styles.p}>Tarefas criadas</p>
        <span className={styles.span}>{taskcreate}</span>
      </div>
      <div className={styles.content_header}>
        <p className={styles.task_done}>Concluidas</p>
        <span className={styles.span}>{taskdone}</span>
      </div>
    </div>
  )
}