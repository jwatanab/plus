import React, { Component } from 'react'
import ReactDOm from 'react-dom'
import request from 'superagent'

class From extends Component {
  constructor(props) {
    super(props)
    this.state = { que: '', age: '', remarks: '' }
  }
  inquiry(e) {
    const t = `${(new Date()).getFullYear()}/${(new Date()).getMonth() + 1}/${(new Date()).getDate()}`
    request
      .get(`/insert`)
      .query({
        que: this.state.que,
        time: t,
        age: this.state.age,
        remarks: this.state.remarks
      })
      .end((err, res) => { if (err) return })
  }
  render() {
    return (
      <div>
      </div>
    )
  }
}

ReactDOM.render(
  <From />,
  document.getElementById('root')
)