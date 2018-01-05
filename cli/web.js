import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import request from 'superagent'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { items: [] }
    }
    inquiry(e) {
        request
            .get(`/show`)
            .end((err, res) => {
                if (err) return
                const result = res.body.map(e => {
                    return (
                        <tbody>
                            <td className="table_body">{e.que}</td>
                            <td className="table_body">{e.time}</td>
                            <td className="table_body">{e.age}</td>
                            <td className="table_body">{e.remarks}</td>
                        </tbody>
                    )
                })
                this.setState({ items: result })
            })
    }
    componentDidMount() {
        this.inquiry()
    }
    render() {
        return (
            <div className="container">
                <div className="header">
                    <div className="header_title">
                        <h2>アンケート回答情報</h2>
                    </div>
                </div>
                <div className="main_content">
                    <table className="content_table">
                        <th className="table_head">店内の清潔感についてお答えください</th>
                        <th className="table_head">時刻</th>
                        <th className="table_head">年齢</th>
                        <th className="table_head">備考</th>
                        <tr></tr>
                        {this.state.items}
                    </table>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)