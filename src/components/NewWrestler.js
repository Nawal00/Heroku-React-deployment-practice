import React from 'react'
import axios from 'axios'

import WrestlerForm from './WrestlerForm'

class NewWrestler extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        name: '',
        realName: '',
        image: ''
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value}
    this.setState({data})
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .post('/api/wwewrestlers', this.state.data)
      .then(() => this.props.history.push('/wwewrestlers'))
      .catch(err => alert(err.message))
  }

  render() {
    return (
      <main className="section">
        <div className="container">
          <WrestlerForm
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </main>
    )
  }
}

export default NewWrestler
