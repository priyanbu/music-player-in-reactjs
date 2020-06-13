import React, {Component} from 'react';


const goeasy = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
const dreams = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3";

const chillout ="http://tezhantezcan.com/bgm.mp3";

function getTime(time) {
  if (!isNaN(time)) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }
}
class About extends Component {
 

constructor(){
  super();
  this.state = {
    currentSong: null,
    music: "stopped",
    currentTime:null,
    duration:null
  }
 
}




  render(){
   const currentTime=getTime(this.state.currentTime);
   const duration=getTime(this.state.duration)
 const playlist = [
   {
     id:1,
   title:"song1",
   url:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {
    id:2,
  title:"song2",
  url:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
 },
 {
  id:3,
title:"song3",
url:"http://tezhantezcan.com/bgm.mp3"
}
 ].map(song=> {
   return(
     <div className="ui list">
       <div className="item">
        <img className="ui avatar image" src={song.url} alt=""/>
     <li key={song.id} className="title" onClick={()=>{
       this.setState({ currentSong:song.title})
     }}>{song.title}</li></div></div>
   )
    });

  return (
    <div className="body-wrapper">
      <div className="body-contant">


         <h1>React Music Player</h1>
       
         <div className="info-container">

           {this.state.music==="playing" ? (
             <div className="current-track">
               {this.state.currentSong}now playing
               </div>
           ) :null}
           {this.state.music==="paused" ? (
             <div className="current-song">
               {this.state.currentSong}is paused
               </div>
           ) :null}
           {this.state.music==="paused"  || this.state.music==="playing" ? (
             <div>
               {currentTime} /{duration}
               </div>
           ) :null}
         </div>


         <div className="button-container">
              {this.state.music === "paused" && (
                <button
                  class="ui labeled icon green button"
                  onClick={() => this.setState({ music: "playing" })}
                >
                  <i class=" large play circle outline icon" />
                  Play
                </button>
              )}
              {this.state.music === "playing" && (
                <button
                  class="ui labeled icon green button"
                  onClick={() => this.setState({ music: "paused" })}
                >
                  <i class="large pause circle outline icon" />
                  Pause
                </button>
              )}
              {this.state.music === "playing" ||
              this.state.music === "paused" ? (
                <button
                  class="ui labeled icon button"
                  onClick={() => this.setState({ music: "stop" })}
                >
                  <i class="large stop circle outline icon" />
                  Stop
                </button>
              ) : null}
            </div>
          <div className="playlist">{playlist}</div>

            <audio ref={ref => (this.music = ref)} />
         

      </div>
   </div>
  );
}

componentDidUpdate(prevProps, prevState) {
  if (this.state.currentSong !== prevState.currentSong) {
    let Song;
    switch (this.state.currentSong) {
      case "song1":
        Song= goeasy;
        break;
      case "song2":
        Song = dreams;
        break;
      case "song3":
        Song = chillout;
        break;
      
      default:
        break;
    }

    if (Song) {
      this.music.src = Song;
      this.music.play();
      this.setState({
        music: "playing"
      });
    }
 }
 if (this.state.music !== prevState.music) {
  if (this.state.music === "paused") {
    this.music.pause();
  }
  if (this.state.music === "playing" && prevState.music === "paused") {
    this.music.play();
  }
  if (this.state.music === "stop") {
    this.music.pause();
    this.currentTime =0;
    this.setState({
      currentSong: null
    });
  }
  
}

  
}

componentDidMount() {
  this.music.addEventListener("timeupdate", e => {
    this.setState({
      currentTime: e.target.currentTime,
      duration: e.target.duration
    });
  });
}
componentWillUnmount() {
  this.music.removeEventListener("timeupdate", () => {});
}

}

export default About;