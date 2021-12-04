import styles from "@components/App.module.scss";

import * as React from "react";

import App from "@components/App";
import Logo from "@components/Logo";
import VisualLogo from "@components/VisualLogo";
import CondensedSection from "@components/CondensedSection";
import Checkmark from "@components/Checkmark";
import Footer from "@components/Footer";

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
        <TopicComponent title="Multi-generational storage">
          Lock a Filecoin balance as a bounty, and distribute the bounty to
          multiple sotrage providers who have a copy of the data..
        </TopicComponent>

        <TopicComponent title="Commodities market for storage">
          Methods for smooth predictability about pricing for storing content
          for both producers and consumers.
        </TopicComponent>

        <TopicComponent title="Stabilizing market-making action on the storage market">
          Allow anyone to purchase storage futures or other similar derivatives
        </TopicComponent>

        <TopicComponent title="Storage bounties">
          Data producers can put a bounty on their storage and set other
          criterias.
        </TopicComponent>

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
        <h2 className={styles.h2} style={{ marginTop: 48, marginBottom: 48 }}>
          Opportunities
        </h2>

        <CondensedSection title="Data DAOs">
          <p className={styles.p} style={{ maxWidth: 768 }}>
            Lorem Ipsum: What happens if you create Web3 sign-in and a payments
            process for a data marketplace? Traditional data marketplaces, such
            as Thompson Reuters and Dun & Bradstreet, require purchasers to have
            credit cards…a business address… and so on. But with Ethereum
            addresses acting as both the payment facilitation mechanism and user
            identity verification, it quickly becomes clear that AIs, DAOs
            (Decentralized Autonomous Organisations), and machines can all start
            owning, controlling and selling real-time data.
          </p>
        </CondensedSection>

        <CondensedSection title="Cross chain oracles">
          <p className={styles.p} style={{ maxWidth: 768 }}>
            Lorem Ipsum: As things currently stand, the blockchain industry is
            siloed among many different platforms and protocols resulting in
            various islands of blockchains. Restrictions regarding assets
            transfers and data migration between different blockchains reduce
            the usability and comfort of users, and hinder novel developments
            within the blockchain ecosystem. Interoperability will be the main
            topics of next-generation blockchain technologies.{" "}
          </p>

          <p className={styles.p} style={{ maxWidth: 768, marginTop: 48 }}>
            In this paper, we focus on how to enable interoperability between
            two heterogeneous blockchains in the context of data migration. We
            first build an cross-chain data migration architecture based on data
            migration oracle. Second, we design a data migration mechanism based
            on former architecture. By employing the proposed data migration
            architecture, it is equivalent to opening a secure channel between
            two heterogeneous blockchains allowing secure data migration. By
            applying data migration mechanism, the confidentiality, integrity
            and security of migrated data can be well guaranteed.
          </p>
        </CondensedSection>

        <CondensedSection title="Compute over data">
          <p className={styles.p} style={{ maxWidth: 768 }}>
            Lorem Ipsum: With Compute-to-Data, datasets are not allowed to leave
            the premises of the data holder, only algorithms can be permitted to
            run on them under certain conditions within an isolated and secure
            environment. Algorithms are an asset type just like datasets. They
            they too can have a pool or a fixed price to determine their price
            whenever they are used.
          </p>
        </CondensedSection>
      </div>

      <div className={styles.section}>
        <h2 className={styles.h2} style={{ marginTop: 76 }}>
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
