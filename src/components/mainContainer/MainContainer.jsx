import React, { useState } from 'react'
import DetailMusic from '../detailMusic/DetailMusic'
import Header from '../header/Header'
import listOfSong from '../../utils/songs.json'
import './MainContainer.css'
import PlayerAudio from '../playerAudio/PlayerAudio'


const MainContainer = () => {

// const [url, setUrl] = useState(listOfSong[0].url)
const [idCurrent, setIdCurrent] = useState(0);

  return (
    <div className="parentContainer">
        <Header />

        {console.log(listOfSong)}
        <section id="music-total">
         <table id="tableId">
         <tr>
           <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Download</th>
           </tr>
           {/* <tr><td className="hr" style={{borderTop: "1px solid white"}} colspan="4"></td></tr> */}
           {listOfSong && listOfSong.map((item)=>{
               return <DetailMusic idCurrent={idCurrent} setIdCurrent={setIdCurrent} music={item}/>
           })}
         </table>

        </section>

        <PlayerAudio listOfSong = {listOfSong} setIdCurrent={setIdCurrent} url={listOfSong[idCurrent].url}/>

    </div>
  )
}

export default MainContainer
