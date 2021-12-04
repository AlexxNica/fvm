import styles from "@components/CondensedSection.module.scss";

import * as React from "react";

function CondensedSection(props) {
  const [state, setState] = React.useState({ show: false });

  return (
    <div className={styles.section}>
      <span
        className={styles.heading}
        onClick={() => setState({ ...state, show: !state.show })}
      >
        {props.title}
      </span>
      {state.show ? (
        <span className={styles.children}>{props.children}</span>
      ) : null}
    </div>
  );
}

export default CondensedSection;
