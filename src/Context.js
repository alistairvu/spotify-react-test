import React, { useState, useEffect } from "react"

const Context = React.createContext()

const ContextProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([])
  const [loaded, setLoaded] = useState(false)

  const getData = async () => {
    try {
      const res = await fetch(
        "https://api.spotify.com/v1/playlists/37i9dQZF1EpxDXt2xefJcM/tracks?market=VN&fields=items(track(album(name%2Cimages)%2Cname%2Cartists(name)%2Cid))",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer BQDsLzzGjM8_Ulvcnu8AGjHa4ELnFr9EPG4qSCpb3mu5Q8SshtJ9Ri7I01FZg2fHH3b3DbEBQUv0oxpR83-vgEMkAogbeL9m7KiO0v9EDxtYY3BEjK3iYVDMn1kGM9B9csUTMMgrtMWXcj3_xznxzGnYGrCAtw",
          },
        }
      )
      const data = await res.json()
      setPlaylist(data.items)
      setLoaded(true)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => getData(), [])

  return (
    <Context.Provider value={{ playlist, loaded }}>{children}</Context.Provider>
  )
}

export { ContextProvider, Context }
