import styles from "@components/App.module.scss";

import * as React from "react";

import App from "@components/App";
import Logo from "@components/Logo";
import VisualLogo from "@components/VisualLogo";
import CondensedSection from "@components/CondensedSection";
import Checkmark from "@components/Checkmark";
import Footer from "@components/Footer";
import Navigation from "@components/Navigation";
import TopicPickerGrid from "@components/TopicPickerGrid";

const TOPICS = [
  {
    topic: "Topic One",
    description:
      "Smart contracts on the Filecoin Network help you exchange anything of value, money, property, shares, and now storage in a conflict free way.",
  },
  {
    topic: "Topic Two",
    description:
      "Smart contracts on the Filecoin Network help you exchange anything of value, money, property, shares, and now storage in a conflict free way.",
  },
  {
    topic: "Topic Three",
    description:
      "Smart contracts on the Filecoin Network help you exchange anything of value, money, property, shares, and now storage in a conflict free way.",
  },
  {
    topic: "Topic Four",
    description:
      "Smart contracts on the Filecoin Network help you exchange anything of value, money, property, shares, and now storage in a conflict free way.",
  },
  {
    topic: "Topic Five",
    description:
      "Smart contracts on the Filecoin Network help you exchange anything of value, money, property, shares, and now storage in a conflict free way.",
  },
  {
    topic: "Topic Six",
    description:
      "Smart contracts on the Filecoin Network help you exchange anything of value, money, property, shares, and now storage in a conflict free way.",
  },
  {
    topic: "Topic Seven",
    description:
      "Smart contracts on the Filecoin Network help you exchange anything of value, money, property, shares, and now storage in a conflict free way.",
  },
  {
    topic: "Topic Eight",
    description:
      "Smart contracts on the Filecoin Network help you exchange anything of value, money, property, shares, and now storage in a conflict free way.",
  },
];

function ListComponent(props) {
  return (
    <span className={styles.listItem}>
      <span className={styles.listItemLeft}></span>
      <span className={styles.listItemRight}>
        <div className={styles.listItemTitle} style={{ marginTop: 0 }}>
          {props.title}
        </div>
        <div className={styles.listItemParagraph}>{props.children}</div>
      </span>
    </span>
  );
}

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
          style={{ background: "var(--color-green)", color: "#fff" }}
        >
          <Checkmark height="16px" />
        </span>
      ) : (
        <span className={styles.timelineItemDot} />
      )}
      <span className={styles.timelineItemText}>
        <div className={styles.h3}>{props.title}</div>
        <div className={styles.desc} style={{ marginTop: 12 }}>
          {props.children}
        </div>
      </span>
    </span>
  );
}

function Home(props) {
  React.useEffect(() => {
    console.log("test");
  }, []);

  return (
    <App title="fvm" description="fvm" url="https://fvm.filecoin.io">
      <Navigation />

      <div
        className={styles.center}
        style={{ marginTop: 48, marginBottom: 48 }}
      >
        <div className={styles.centerText}>Programmable storage is coming</div>
        <VisualLogo height="428px" style={{ opacity: 0.4 }} />
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
        <TopicPickerGrid topics={TOPICS} />
      </div>

      <div className={styles.section}>
        <h2 className={styles.h2} style={{ marginTop: 88, marginBottom: 24 }}>
          Milestones
        </h2>
        <TimelineItem date="Q1 2022" isChecked title="Title One">
          <b>Filecoin Virtual Machine</b> launches.
        </TimelineItem>
        <TimelineItem date="Q2 2022" title="Title Two">
          Lorem Ipsum: Filecoin is a peer-to-peer network that stores files on
          the internet, with built-in economic incentives to ensure files are
          stored reliably over time. <br />
          <br />
          Available storage and pricing is not controlled by any single company.
          Instead, Filecoin facilitates open markets for storing and retrieving
          files that anyone can participate in.
        </TimelineItem>
        <TimelineItem date="Q3 2022" title="Title Three">
          Lorem Ipsum: Filecoin is a peer-to-peer network that stores files on
          the internet, with built-in economic incentives to ensure files are
          stored reliably over time. <br />
          <br />
          Available storage and pricing is not controlled by any single company.
          Instead, Filecoin facilitates open markets for storing and retrieving
          files that anyone can participate in.
        </TimelineItem>
        <TimelineItem date="Q4 2022" title="Title Four">
          Lorem Ipsum: Filecoin is a peer-to-peer network that stores files on
          the internet, with built-in economic incentives to ensure files are
          stored reliably over time. <br />
          <br /> Available storage and pricing is not controlled by any single
          company. Instead, Filecoin facilitates open markets for storing and
          retrieving files that anyone can participate in.
        </TimelineItem>
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
        <div className={styles.rowCol}>
          <h3 className={styles.h3} style={{ marginTop: 48 }}>
            Developer
          </h3>
          <ListComponent title="Tutorials">
            Lorem Ipsum: Filecoin is a peer-to-peer network that stores files.
          </ListComponent>
          <ListComponent title="Open issues">
            Lorem Ipsum: Filecoin is a peer-to-peer network that stores files.
          </ListComponent>
          <h3 className={styles.h3} style={{ marginTop: 48 }}>
            Specification
          </h3>
          <ListComponent title="FVM Architecture">
            {" "}
            Lorem Ipsum: Filecoin is a peer-to-peer network that stores files.
          </ListComponent>
          <ListComponent title="EVM Compatibility">
            Lorem Ipsum: Filecoin is a peer-to-peer network that stores files.
          </ListComponent>
        </div>

        <div className={styles.rowCol}>
          <h3 className={styles.h3} style={{ marginTop: 48 }}>
            SDK
          </h3>
          <ListComponent title="Rust SDK">
            {" "}
            Lorem Ipsum: Filecoin is a peer-to-peer network that stores files.
          </ListComponent>
          <ListComponent title="Go SDK">
            {" "}
            Lorem Ipsum: Filecoin is a peer-to-peer network that stores files.
          </ListComponent>
          <ListComponent title="C++ SDK">
            {" "}
            Lorem Ipsum: Filecoin is a peer-to-peer network that stores files.
          </ListComponent>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.h2} style={{ marginTop: 88, marginBottom: 48 }}>
          Opportunities
        </h2>

        <CondensedSection title="Data DAOs" expanded>
          <p className={styles.p} style={{ maxWidth: 768 }}>
            Lorem Ipsum: Filecoin is a peer-to-peer network that stores files,
            with built-in economic incentives to ensure files are stored
            reliably over time.
            <br />
            <br />
            Lorem Ispum: In Filecoin, users pay to store their files on storage
            miners. Storage miners are computers responsible for storing files
            and proving they have stored the files correctly over time. Anyone
            who wants to store their files or get paid for storing other users’
            files can join Filecoin. Available storage, and the price of that
            storage, is not controlled by any single company. Instead, Filecoin
            facilitates open markets for storing and retrieving files that
            anyone can participate in.
            <br />
            <br />
            Lorem Ipsum: Filecoin includes a blockchain and native
            cryptocurrency (FIL). Storage miners earn units of FIL for storing
            files. Filecoin’s blockchain records transactions to send and
            receive FIL, along with proofs from storage miners that they are
            storing their files correctly.
          </p>
        </CondensedSection>

        <CondensedSection title="Cross chain oracles">
          <p className={styles.p} style={{ maxWidth: 768 }}>
            Lorem Ipsum: Filecoin is a peer-to-peer network that stores files,
            with built-in economic incentives to ensure files are stored
            reliably over time.
            <br />
            <br />
            Lorem Ipsum: In Filecoin, users pay to store their files on storage
            miners. Storage miners are computers responsible for storing files
            and proving they have stored the files correctly over time. Anyone
            who wants to store their files or get paid for storing other users’
            files can join Filecoin. Available storage, and the price of that
            storage, is not controlled by any single company. Instead, Filecoin
            facilitates open markets for storing and retrieving files that
            anyone can participate in.
            <br />
            <br />
            Lorem Ipsum: Filecoin includes a blockchain and native
            cryptocurrency (FIL). Storage miners earn units of FIL for storing
            files. Filecoin’s blockchain records transactions to send and
            receive FIL, along with proofs from storage miners that they are
            storing their files correctly.
          </p>

          <p className={styles.p} style={{ maxWidth: 768, marginTop: 48 }}>
            Lorem Ipsum: Filecoin is a peer-to-peer network that stores files,
            with built-in economic incentives to ensure files are stored
            reliably over time.
            <br />
            <br />
            Lorem Ipsum: In Filecoin, users pay to store their files on storage
            miners. Storage miners are computers responsible for storing files
            and proving they have stored the files correctly over time. Anyone
            who wants to store their files or get paid for storing other users’
            files can join Filecoin. Available storage, and the price of that
            storage, is not controlled by any single company. Instead, Filecoin
            facilitates open markets for storing and retrieving files that
            anyone can participate in.
            <br />
            <br />
            Lorem Ipsum: Filecoin includes a blockchain and native
            cryptocurrency (FIL). Storage miners earn units of FIL for storing
            files. Filecoin’s blockchain records transactions to send and
            receive FIL, along with proofs from storage miners that they are
            storing their files correctly.
          </p>
        </CondensedSection>

        <CondensedSection title="Compute over data">
          <p className={styles.p} style={{ maxWidth: 768 }}>
            Lorem Ipsum: Filecoin is a peer-to-peer network that stores files,
            with built-in economic incentives to ensure files are stored
            reliably over time.
            <br />
            <br />
            Lorem Ipsum: In Filecoin, users pay to store their files on storage
            miners. Storage miners are computers responsible for storing files
            and proving they have stored the files correctly over time. Anyone
            who wants to store their files or get paid for storing other users’
            files can join Filecoin. Available storage, and the price of that
            storage, is not controlled by any single company. Instead, Filecoin
            facilitates open markets for storing and retrieving files that
            anyone can participate in.
            <br />
            <br />
            Lorem Ipsum: Filecoin includes a blockchain and native
            cryptocurrency (FIL). Storage miners earn units of FIL for storing
            files. Filecoin’s blockchain records transactions to send and
            receive FIL, along with proofs from storage miners that they are
            storing their files correctly.
          </p>
        </CondensedSection>
      </div>

      <div className={styles.section}>
        <h2 className={styles.h2} style={{ marginTop: 88 }}>
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

      <Footer />
    </App>
  );
}

export async function getServerSideProps(context) {
  if (
    !context ||
    !context.query ||
    !context.query.access ||
    context.query.access !== "fvm4life"
  ) {
    return {
      redirect: {
        permanent: false,
        destination: "https://filecoin.io",
      },
    };
  }

  return {
    props: {},
  };
}

export default Home;
