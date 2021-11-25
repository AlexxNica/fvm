import styles from "@components/App.module.scss";

import * as React from "react";

import App from "@components/App";

function Home(props) {
  return (
    <App title="fvm" description="fvm" url="https://fvm.filecoin.io">
      COMING SOON
    </App>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default Home;
