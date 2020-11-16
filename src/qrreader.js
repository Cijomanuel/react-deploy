import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import "./st_te.scss"

class Qrread extends Component {
  state = {
    result: 'No result'
  }

  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
  }
  render() {
    return (
      <div>
        <div className="sh">
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
        /></div>
        <p>{this.state.result}</p>
      </div>
    )
  }
}

export default Qrread