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
    topic: "Decentralized Compute",
    description: (
      <React.Fragment>
        With Filecoin and IPFS, content-addressed data may be stored anywhere in
        the globe. Furthermore, the structure of datasets varies dramatically.
        Data nodes can be coarse or fine-grained, and highly capillarized
        through links, such that segments of a given dataset can be highly
        distributed and stored far away from one another. Frequently, users want
        to execute data pipelines to validate, transform, aggregate, normalize,
        and generally process datasets to extract insights, construct models,
        and derive new value. Moving the data to a central compute location is
        not an option, and enabling decentralized computation pipelines is a
        must.
        <br />
        <br />
        The means to broker computational resources, transact with workloads,
        track placement, incentivise execution, and prove the validity of the
        result in order to claim rewards.
      </React.Fragment>
    ),
  },
  {
    topic: "Perpetual Storage",
    description: (
      <React.Fragment>
        Many common-good datasets rely on stewarding organizations to ensure
        their preservation and continued revision (e.g. a government,
        corporation, or non-profit). Frequently, the responsibility lies on
        a single organization. If that organization goes away or changes
        motivation, the common-good data could be lost forever, resulting in a
        loss for society.
        <br />
        <br />
        With smart contracts, the responsibility of ensuring valuable data is
        kept alive can be shared collectively, and its continuation and renewal
        can guaranteed by permissionless code running autonomously on-chain -
        with no risk of modification or alteration of the underlying datasets.
        Funding mechanisms can be coupled with [DataDAOs](/datadaos) and
        [Staking Protocols](/staking-protocols) to enable pay-once-store-forever
        mechanics.
        <br />
        <br />
        Example use cases: Crime statistics, inflation metrics, election
        results.
      </React.Fragment>
    ),
  },
  {
    topic: "Insurance Protocols",
    description: <React.Fragment>...</React.Fragment>,
  },
  {
    topic: "Storage Derivatives",
    description: (
      <React.Fragment>
        The dynamic nature of decentralized storage costs cause planning
        challenges for both producers and consumers. Data producers will need to
        store data in the future for a predefined period of time and will want
        to budget in costs now (e.g. a bank who knows they will need to store 1
        TB of 2021 transaction data from January 1, 2022 to December 31, 2022).
        Storage providers will want to know how much to spend on hardware based
        on their predicted earnings. Providing a way to smooth predictability
        about future costs and returns will bring stability to this market and
        reduce risk.
        <br />
        <br />
        By enabling users to “pre-buy” a chunk of storage space at a specific
        price today, a data producer will be able to predict their costs over a
        given period of time. By enabling a storage producer to bid on
        delivering a block of storage in the future, they will be able to
        purchase hardware and be more secure that they are margin positive.
      </React.Fragment>
    ),
  },
  {
    topic: "Staking Protocols",
    description: (
      <React.Fragment>
        Staking Protocols can substantially improve the capital efficiency in
        the Filecoin economy - matching yield-seeking token holders and
        liquidity-seeking storage providers. With staking protocols, token
        holders can trustlessly pool their assets and set rules and terms by
        which storage providers (of any size) can permissionlessly access that
        liquidity.
        <br />
        <br />
        Staking protocols can use on-chain metrics (e.g. longevity of an
        address, history of slashing) to better assess risk while also allowing
        storage providers of all sizes to access capital.{" "}
      </React.Fragment>
    ),
  },
  {
    topic: "Data DAOS",
    description: (
      <React.Fragment>
        DAOs (Decentralized Autonomous Organizations) are member-owned
        communities with no centralized leadership. With the FVM, communities
        can collectively fund and govern the storage of public-good datasets to
        ensure their long term preservation and availability.
      </React.Fragment>
    ),
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
