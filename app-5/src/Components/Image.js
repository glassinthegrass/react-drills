import React, {Component} from 'react';


class Image extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
const {url} = this.props

      return (
          <div>
              <img src={url} alt='sorry'/>
          </div>
      )
  }
}
export default App;
