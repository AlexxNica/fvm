import styles from "@components/Navigation.module.scss";

function Navigation(props) {
  return (
    <div className={styles.container}>
      <nav className={styles.navigation}>
        <div className={styles.left}>
          <span className={styles.item}>Filecoin Virtual Machine</span>
        </div>
        <div className={styles.right}>
          <a
            href="https://docs.filecoin.io"
            className={styles.item}
            style={{ marginLeft: 24 }}
          >
            Documentation
          </a>

          <a
            href="https://filecoin.io"
            className={styles.item}
            style={{ marginLeft: 24 }}
          >
            Filecoin
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
