import styles from "@components/TopicPickerGrid.module.scss";

import * as React from "react";

function TopicPickerGrid(props) {
  const [state, setState] = React.useState({ selected: props.topics[0] });

  React.useEffect(() => {}, []);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {props.topics.map((each, index) => {
          const isSelected = each.topic === state.selected.topic;
          return (
            <span
              className={styles.slot}
              key={`${each.topic}`}
              onClick={() => {
                return setState({ selected: each });
              }}
            >
              <div
                className={styles.item}
                style={{
                  background: isSelected ? "var(--color-anchor-gray)" : null,
                }}
              >
                <div className={styles.number}>
                  {`${index + 1}`.padStart(3, `0`)}
                </div>
                <div className={styles.text}>{each.topic}</div>
              </div>
            </span>
          );
        })}
      </div>
      <div className={styles.right}>
        <div className={styles.h3}>{state.selected.topic}</div>
        <div className={styles.p}>{state.selected.description}</div>
      </div>
    </div>
  );
}

export default TopicPickerGrid;
