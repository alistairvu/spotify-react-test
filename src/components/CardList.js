import React, { useContext } from "react"
import Card from "./Card"
import { Context } from "../Context"

const CardList = () => {
  const { playlist, loaded } = useContext(Context)

  if (loaded) {
    const display = playlist.map((song, index) => (
      <Card key={song.track.id} data={song} order={index + 1} />
    ))

    return <div>{display}</div>
  } else {
    return (
      <div>
        <p>
          <em>Loading...</em>
        </p>
      </div>
    )
  }
}

export default CardList
