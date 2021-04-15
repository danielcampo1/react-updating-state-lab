// Code YouTubeDebugger Component Here

import React, {Component} from 'react'

class YouTubeDebugger extends React.Component {
    constructor() {
        super()

    this.state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
            resolution: '1080p'
            }
        }
    }
}  


ChangeBitrate = () => {
    this.setState({
        settings : {
            ...this.state.settings,
            bitrate: 12
        }
    })
}


changeResoluation = () => {
    this.setState({
        settings: {
          ...this.state.settings,
          video: {
            ...this.state.settings.video,
            resolution: '720p'
          }
        }
      })
    }

render() {
    return(
        <div>
            <button className = 'bitrate' onClick = {this.ChangeBitrate}> 
            bitrate
             </button>

             <button className= 'resolution'
             onClick = {this.changeResoluation}>
                 resoluation
             </button>
        </div>
        )
    }
}

export default YouTubeDebugger