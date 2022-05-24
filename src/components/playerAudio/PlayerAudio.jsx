import React from 'react'
import './PlayerAudio.css'
import ReactAudioPlayer from 'react-audio-player';

// 
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const PlayerAudio = ({listOfSong,url,setIdCurrent}) => {


  const handleClickNext = () => {
    console.log(setIdCurrent(pre=>{

      if(pre < listOfSong.length - 1)
          return pre+1
      else
          return pre
    }))
    console.log("chao anh toi")
  }
  const handleClickPre = () => {
    setIdCurrent(pre=>{
      if(pre > 1){
        return pre -1
      }
      else{
        return pre
      }
    })
    console.log()
    console.log("chao anh toi")
  }
  return (
    <section id="player-audio">
<AudioPlayer className="cssAudio"
  autoPlay = {true}
  src={url}
  autoNext={true}
  showSkipControls={true}
  showJumpControls={false}
  onPlay={e => console.log("onPlay")}
  onClickNext= {handleClickNext}
  onClickPrevious= {handleClickPre}
//   onClickNext={()=>{setIdCurrent(prev=>prev+1)}}
/>
    </section>
  )
}

export default PlayerAudio
