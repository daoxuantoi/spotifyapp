import React from 'react'
import {AiOutlineDownload} from 'react-icons/ai'
import './DetailMusic.css'
import {IoIosPlayCircle} from 'react-icons/io'
import {motion} from 'framer-motion'

const DetailMusic = ({music,setIdCurrent,idCurrent}) => {

    {console.log("haha",idCurrent, music.id)}
  return (
        <motion.tr
        whileTap = {{scale: 0.75}}
        // className={"active"}
        // className="trForSong active"
        onClick={() => {setIdCurrent(music.id)}}
        className={idCurrent === music.id ? "trForSong active": "trForSong"}
        >
            {console.log("haha",idCurrent, music.id)}
        <td className="displayId"><p className="play-icon"><IoIosPlayCircle /></p><p className="music-id">{music.id + 1}</p></td>
        <td>{music.name}</td>
        <td>{music.author}</td>
        <td><a href={music.url}><AiOutlineDownload /></a></td>
        </motion.tr>
  )
}

export default DetailMusic
