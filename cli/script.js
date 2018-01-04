import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import request from 'superagent'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { val: '' }
    }
    inquiry(e) {
        request
            .get(`/show`)
            .query({ val: this.state.val })
            .end((err, res) => {
                if (err) return
                const r = res.body
                console.log(r)
            })
    }
    line(e) {
        this.setState({ val: e.target.value })
    }
    render() {
        return (
            <div>
                <input type='text' name='ans' onChange={e => this.line(e)} />
                <button onClick={e => this.inquiry(e)}>送信</button>
            </div>
        )
    }
}

render(
    <App />,
    document.getElementById('root')
)