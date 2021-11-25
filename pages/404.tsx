import styles from "@components/App.module.scss";

import * as React from "react";

import App from "@components/App";

function Page404(props) {
  return (
    <App title="404" description="404" url="https://fvm.filecoin.io">
      404
    </App>
  );
}

export default Page404;
