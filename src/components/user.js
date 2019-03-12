import React from "react"
import styles from "./user.module.css"

export default properties => (
  <div className={styles.user}>
    <img src={properties.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{properties.username}</h2>
      <p className={styles.excerpt}>{properties.excerpt}</p>
    </div>
  </div>
)

// In-line version, should be used if used in a single file (private class)
// const User = props => (
//   <div className={styles.user}>
//     <img src={props.avatar} className={styles.avatar} alt="" />
//     <div className={styles.description}>
//       <h2 className={styles.username}>{props.username}</h2>
//       <p className={styles.excerpt}>{props.excerpt}</p>
//     </div>
//   </div>
// )