import styles from "@components/App.module.scss";

import * as React from "react";

import App from "@components/App";
import Logo from "@components/Logo";
import VisualLogo from "@components/VisualLogo";
import Checkmark from "@components/Checkmark";

function TopicComponent(props) {
  return (
    <span className={styles.topic}>
      <span className={styles.topicImage}></span>
      <span className={styles.topicTitle}>{props.title}</span>
      <span className={styles.topicText}>{props.children}</span>
    </span>
  );
}

function ActionButton(props) {
  return (
    <span className={styles.actionButton}>
      <span className={styles.actionButtonTitle}>{props.title}</span>
      <span className={styles.actionButtonText}>{props.children}</span>
    </span>
  );
}

function TimelineItem(props) {
  return (
    <span className={styles.timelineItem}>
      <span className={styles.timelineItemDate}>{props.date}</span>
      {props.isChecked ? (
        <span
          className={styles.timelineItemDot}
          style={{ background: "green", color: "#fff" }}
        >
          <Checkmark height="20px" />
        </span>
      ) : (
        <span className={styles.timelineItemDot} />
      )}
      <span className={styles.timelineItemText}>{props.children}</span>
    </span>
  );
}

function Home(props) {
  React.useEffect(() => {
    console.log("test");
  }, []);

  return (
    <App title="fvm" description="fvm" url="https://fvm.filecoin.io">
      <div className={styles.section} style={{ paddingTop: 48 }}>
        <p className={styles.caption} style={{ maxWidth: 488 }}>
          Programmable storage is coming. The <b>Filecoin Virtual Machine</b>{" "}
          defines the rules for computing a new valid state on the Filecoin
          Network, block to block.
        </p>
      </div>

      <div
        className={styles.center}
        style={{ marginTop: 48, marginBottom: 48 }}
      >
        <VisualLogo height="428px" />
      </div>

      <div className={styles.section}>
        <h2 className={styles.h2}>Possibilities</h2>
        <p className={styles.p} style={{ maxWidth: 488, paddingTop: 24 }}>
          Smart contracts on the Filecoin Network help you exchange anything of
          value, money, property, shares, and now storage in a conflict free
          way. With the addition of the FVM on the Filecoin Network, new
          possibilities exist that have never existed before.
        </p>

        <div className={styles.actions}>
          <ActionButton title="Apply for a grant">
            Get a grant to contribute to the functionality of the FVM
          </ActionButton>

          <ActionButton title="Discussion">
            Join the discussion on Discord or Slack today.
          </ActionButton>
        </div>
      </div>

      <div className={styles.row}>
        <TopicComponent title="Decentralized computation">...</TopicComponent>

        <TopicComponent title="Data DAOs">...</TopicComponent>

        <TopicComponent title="IP NFTs">...</TopicComponent>

        <TopicComponent title="Reputation systems">...</TopicComponent>

        <TopicComponent title="Digital identity">
          Provides individual identity in the form of digital assets.
        </TopicComponent>

        <TopicComponent title="Data processing">...</TopicComponent>

        <TopicComponent title="Financial services">...</TopicComponent>

        <TopicComponent title="Access control">...</TopicComponent>
      </div>

      <div className={styles.section}>
        <h2 className={styles.h2} style={{ marginTop: 48, marginBottom: 24 }}>
          Timeline
        </h2>
        <TimelineItem date="Q1 2022" isChecked>
          <b>Filecoin Virtual Machine</b> launches.
        </TimelineItem>
        <TimelineItem date="Q2 2022">Jim makes Raul a cake :-)</TimelineItem>
        <TimelineItem date="Q3 2022">
          Raul decides to throw the cake out.
        </TimelineItem>
        <TimelineItem date="Q4 2022">There was never a cake.</TimelineItem>
      </div>

      <div className={styles.section}>
        <h2 className={styles.h2} style={{ marginTop: 88 }}>
          Get ready to build
        </h2>
        <p className={styles.p} style={{ maxWidth: 488, paddingTop: 24 }}>
          Actors are the equivalent of smart contracts in Filecoin. Deploy
          existing EVM smart contracts as actors, or write native actors from
          scratch in Rust.
        </p>
      </div>

      <div className={styles.row} style={{ paddingBottom: 128 }}>
        <TopicComponent title="Developer Documentation">...</TopicComponent>
        <TopicComponent title="Tutorials">...</TopicComponent>
        <TopicComponent title="Open issues">...</TopicComponent>
        <TopicComponent title="FVM architecture">...</TopicComponent>
        <TopicComponent title="EVM compatibility">...</TopicComponent>
        <TopicComponent title="Rust SDK">...</TopicComponent>
        <TopicComponent title="Go SDK">...</TopicComponent>
        <TopicComponent title="C++ SDK">...</TopicComponent>
      </div>

      <div className={styles.section}>
        <h2 className={styles.h2} style={{ marginTop: 48 }}>
          Want to hack on the FVM?
        </h2>
        <p className={styles.p} style={{ maxWidth: 488, paddingTop: 24 }}>
          There is a ton of opportunity to get involed.
        </p>
      </div>

      <div className={styles.row} style={{ paddingBottom: 128 }}>
        <TopicComponent title="Build a use case">...</TopicComponent>
        <TopicComponent title="Battletest the FVM">...</TopicComponent>
        <TopicComponent title="Bridge another language">...</TopicComponent>
        <TopicComponent title="Engage with the community">...</TopicComponent>
      </div>
    </App>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default Home;
