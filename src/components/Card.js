import React from "react"

const styles = {
  width: "100%",
  display: "flex",
  margin: "20px 0",
  height: "10vh",
  alignItems: "center",
  order: {
    fontWeight: 600,
    fontSize: "2rem",
    width: "10%",
    textAlign: "center",
  },
  coverArt: {
    maxHeight: "10vh",
    padding: 0,
  },
  info: {
    marginLeft: "15px",
    name: {
      fontSize: "1.5rem",
    },
  },
}

const Card = ({ data, order }) => {
  const { track } = data
  const { album, artists, name } = track
  const albumName = album.name
  const albumArt = album.images[1]
  const artistName = artists[0].name

  return (
    <div style={styles}>
      <div className="order" style={styles.order}>
        <h3>{order}</h3>
      </div>

      <div className="cover-art">
        <img
          src={albumArt.url}
          alt={`Cover art of ${albumName}`}
          style={styles.coverArt}
        />
      </div>

      <div className="track-info" style={styles.info}>
        <h4 style={styles.info.name}>{name}</h4>
        <p>
          {artistName} - <em>{albumName}</em>
        </p>
      </div>
    </div>
  )
}

export default Card
