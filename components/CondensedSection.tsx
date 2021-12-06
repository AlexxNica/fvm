import styles from "@components/CondensedSection.module.scss";

import * as React from "react";

import Dismiss from "@components/Dismiss";

function CondensedSection(props) {
  const [state, setState] = React.useState({ show: false });

  return (
    <div className={styles.section}>
      <span
        className={styles.heading}
        onClick={() => setState({ ...state, show: !state.show })}
      >
        <Dismiss
          height="24px"
          style={{
            transform: !state.show ? `rotate(405deg)` : null,
            transition: `200ms ease all`,
            marginRight: 24,
          }}
        />
        {props.title}
      </span>
      {state.show ? (
        <span className={styles.children}>{props.children}</span>
      ) : null}
    </div>
  );
}

export default CondensedSection;
