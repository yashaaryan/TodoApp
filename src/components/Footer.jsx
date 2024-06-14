import styles from "./footer.module.css";
export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Complted todos:{completedTodos}</span>
      <span className={styles.item}>total Todos:{totalTodos}</span>
    </div>
  );
}
