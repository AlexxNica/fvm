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
    topic: "Decentralized compute infrastructure",
    description:
      "You can use Filecoin smart contracts that run on the Filecoin blockchain to take advantage of additional compute power that a storage provider can provide to do post processing on your data before retrieval.",
  },
  {
    topic: "Dataset preservation",
    description:
      "By leveraging a smart contract on the Filecoin Network, you can create a Filecoin account that has a balance and place a bounty for storage providers to store your data. The contract can also define rules like a regular contract and automatically enforce them via the code.",
  },
  {
    topic: "Storage markets",
    description:
      "You can use a Filecoin smart contract to create a market place for data on the Filecoin Network. This program can become an entire business model on its own and help you monetize your datasets and do price discovery for the value of any given dataset.",
  },
  {
    topic: "Used owned data",
    description:
      "Filecoin is great at reducing the redundancy of data by making data public and available to everyone. A smart contract on the Filecoin Network can create a useful program that anyone in the world can use over existing data on the network.",
  },
  {
    topic: "Liquidity infrastructure",
    description:
      "The Filecoin Network smart contracts can be used to provide financial products and services that are accessible to anyone in the world. No centralized authorities can block payments or deny you access. Smart contracts can also provide liquidity for storage and other applications.",
  },
  {
    topic: "Data DAOS",
    description:
      "DAO are member-owned communities without centralized leadership. They are a safe way to collaborate with internet strangers and a safe place to commit funds for a specific cause. Now with IP NFTs and data storage capabilities, the participants of your DAO can participate in new novel applications.",
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
    <a className={styles.actionButton} target="_blank" href={props.href}>
      <span className={styles.actionButtonTitle}>{props.title}</span>
      <span className={styles.actionButtonText}>{props.children}</span>
    </a>
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
    <App
      title="Filecoin Virtual Machine"
      description="Programmable storage is coming to the Filecoin Network."
      url="https://fvm.filecoin.io"
    >
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
          <ActionButton
            title="Apply for a grant"
            href="https://grants.filecoin.io/"
          >
            Contribute to the FVM
          </ActionButton>

          <ActionButton title="Talk to us" href="https://filecoin.io/slack">
            Join discussion
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
        <TimelineItem
          date="Q1 2022"
          isChecked
          title="Filecoin Virtual Machine launches"
        >
          <b>Filecoin Virtual Machine</b> launches and developers begin working
          on tutorials, examples, and exploring new applications with data.
        </TimelineItem>
        <TimelineItem date="Q2 2022" title="Developer preview">
          New clear and informative documentation is released to the world. More
          tools for developers to write smart contracts and take full advantage
          of the immense capabilities of the Filecoin Network.
        </TimelineItem>
      </div>

      <div className={styles.section}>
        <h2 className={styles.h2} style={{ marginTop: 96 }}>
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
            Learn how to use the FVM with some simple tutorials.
          </ListComponent>
          <ListComponent title="Open issues">
            Follow the issues on GitHub and stay up to date.
          </ListComponent>
          <h3 className={styles.h3} style={{ marginTop: 48 }}>
            Specification
          </h3>
          <ListComponent title="FVM Architecture">
            Learn how the FVM works and the technologies involved.
          </ListComponent>
          <ListComponent title="EVM Compatibility">
            Learn how the EVM works and how you can use the EVM with the FVM.
          </ListComponent>
        </div>

        <div className={styles.rowCol}>
          <h3 className={styles.h3} style={{ marginTop: 48 }}>
            SDK
          </h3>
          <ListComponent title="Rust SDK">
            Write smart contracts on the FVM with Rust
          </ListComponent>
          <ListComponent title="Go SDK">
            Write smart contracts on the FVM with Go
          </ListComponent>
          <ListComponent title="C++ SDK">
            Write smart contracts on the FVM with C++
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
        <h2 className={styles.h2} style={{ marginTop: 96 }}>
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
