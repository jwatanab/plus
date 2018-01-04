import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import request from 'superagent'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { val: '', body: new Array() }
    }
    inquiry(e) {
        /* 推移しない、Ajaxと考えると確かに非同期で画面推移なしで情報を獲得できる  */
        request
            .get(`/show`)
            .query({ val: this.state.val })
            .end((err, res) => {
                if (err) return
                this.setState({ body: res.body })
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

ReactDOM.render(
    <App />,
    document.getElementById('root')
)