// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'

class HelloUser extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: 'tylermcginnis'
    }

    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (e) {
    this.setState({
      username: e.target.value
    })
  }
  render() {
    return (
      <div>
        Hello {this.state.username} <br />
        Change Name:
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

ReactDOM.render(<HelloUser />, document.getElementById('root'));
