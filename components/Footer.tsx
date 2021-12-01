import styles from "@components/Footer.module.scss";
import Logo from "@components/Logo";

function Footer(props) {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div className={styles.col}>
          <Logo height="64px" />
          <p className={styles.p}>
            The <b>Filecoin Virtual Machine</b> defines the rules for computing
            valid state on the Filecoin Network, an open-source cloud storage
            marketplace, protocol, and incentive layer.
          </p>
        </div>
        <div className={styles.col}>
          <div className={styles.title}>Reach out</div>
          <a
            href="https://filecoin.io/slack"
            target="_blank"
            className={styles.link}
          >
            Slack
          </a>
          <a
            href="https://weixin.qq.com/r/1xz54Y-EctINrcuC90nF"
            target="_blank"
            className={styles.link}
          >
            WeChat
          </a>
          <a
            href="https://twitter.com/Filecoin"
            target="_blank"
            className={styles.link}
          >
            Twitter
          </a>
          <a
            href="https://github.com/filecoin-project/community#forums"
            target="_blank"
            className={styles.link}
          >
            Forum
          </a>
          <a
            href="https://riot.im/app/#/group/+filecoin:matrix.org"
            target="_blank"
            className={styles.link}
          >
            Matrix
          </a>
        </div>
        <div className={styles.col}>
          <div className={styles.title}>Resources</div>
          <a href="https://research.filecoin.io/" className={styles.link}>
            Research
          </a>
          <a href="https://filecoin.io/blog/" className={styles.link}>
            Blog
          </a>{" "}
          <a href="https://github.com/filecoin-project" className={styles.link}>
            Github
          </a>{" "}
          <a
            href="https://proto.school/course/filecoin"
            className={styles.link}
          >
            ProtoSchool
          </a>
          <a href="https://security.filecoin.io/" className={styles.link}>
            Security
          </a>
        </div>
        <div className={styles.col}>
          <div className={styles.title}>Virtual Machine</div>
          <a href="#" className={styles.link}>
            Documentation
          </a>
          <a href="#" className={styles.link}>
            Examples
          </a>{" "}
          <a href="#" className={styles.link}>
            Team
          </a>{" "}
          <a href="#" className={styles.link}>
            Ecosystem
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
