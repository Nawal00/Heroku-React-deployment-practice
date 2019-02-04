import React from 'react'
import axios from 'axios'

class WrestlerIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('/api/wwewrestlers')
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.error(err))
  }


  render() {
    if(!this.state.data) return <h1> Loading..... </h1>
    console.log(this.state)

    return (
      <section>
        <div className="container">
          <h1 className="title is-5"> WWE Wrestlers </h1>

          <div className="columns is-multiline">
            {this.state.data.map((wrestler, i) =>

              <div key={i} className="column is-one-quarter" style={{backgroundImage: `url(${wrestler.image}`}}>
              </div>

            )}

          </div>
        </div>
      </section>
    )
  }
}

export default WrestlerIndex
