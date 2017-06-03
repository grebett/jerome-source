import React from 'react'
import Radium, {Style} from 'radium'

import Modal from '../common/Modal'
import Card from '../common/Card'
import GalleryItem from '../common/GalleryItem'

class Body extends React.Component {
  constructor() {
    super()
    this.state = {
      displayModal: false,
    }
  }

  render() {
    const containerStyles = {
      position: 'relative',
      boxSizing: 'border-box',
      margin: '0px 20px',
      padding: '0px 50px',
      top: '100px',
      overflow: 'hidden',
      width: '100%',
    }

    return (
      <div style={containerStyles}>
        <Style
          scopeSelector=".inline-top"
          rules={{
            display: 'inline-block',
            verticalAlign: 'top',
            width: '44%',
            margin: '0 2% 5% 2%',
          }}/>
        <div>
          <div className="inline-top">
            <Card
              title="Titre - Article"
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              width="100%"
              padding="0px"
              no-ui />
          </div>
          <img className="inline-top" src="/assets/improvisation.jpg" width="50%" alt="" />
        </div>
        <div>
          <div className="inline-top">
            <GalleryItem
              src="/assets/Piano.jpg"
              title="my title"
              type="video"
              width="80%"
              target="https://www.youtube.com/embed/LWQVztiJHfs"
              onClick={this.showModal.bind(this)}/>
          </div>
          <div className="inline-top">
            <Card
              title="Titre - Article"
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              padding="0px"
              width="100%"
              no-ui />
          </div>
        </div>
        <Modal
          display={this.state.displayModal}
          onClose={this.closeModal.bind(this)}
          type={this.state.type}
          target={this.state.target}
        />
      </div>
    )
  }

  showModal(event) {
    let el = event.target
    let target = el.getAttribute('data-target')
    let type = el.getAttribute('data-type')

    this.setState({
      type,
      target,
      displayModal: true,
    })
  }

  closeModal() {
    this.setState({
      type: '',
      target: '',
      displayModal: false,
    })
  }
}

export default Radium(Body)
