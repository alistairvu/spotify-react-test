import React from "react"

const styles = {
  textAlign: "center",
  h1: {
    fontWeight: 600,
    lineHeight: "3rem",
  },
}

const Header = () => {
  return (
    <div style={styles}>
      <h1 style={styles.h1}>Your Hot 30</h1>
      <p>
        <em>What have you been listening to lately? It's time to find out!</em>
      </p>
    </div>
  )
}

export default Header
