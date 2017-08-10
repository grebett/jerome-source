import React from 'react'
import Radium, {Style} from 'radium'
import * as Contentful from '../../services/contentful'

import Modal from '../common/Modal'
import Card from '../common/Card'
import GalleryItem from '../common/GalleryItem'

class Body extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayModal: false,
    }
  }


  componentWillUpdate(nextProps) {
    const media = ['medium1', 'medium2', 'medium3', 'medium4', 'medium5']

    for (let i = 0; i < media.length; i++) {
      if (nextProps.fields[media[i]] !== undefined && this.state[media[i]] === undefined) {
        Contentful.getEntry(nextProps.fields[media[i]].sys.id).then(value => {
          let state = {}
          state[media[i]] = value
          this.setState(state)
        }, error => {
          console.error(error)
          let state = {}
          state[media[i]] = null
          this.setState(state)
        })
      }
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
    containerStyles['@media (max-width: 1023px)'] = {
      margin: '30px 0px 0px 0px',
      padding: '0px',
      top: '0px',
    }

    let isMobile = window.outerWidth < 1024
    let galleryItemWidth = '100%'
    let cardPadding = '0%'
    if (isMobile) {
      galleryItemWidth = '100%'
      cardPadding = '15px'
    }

    let Rows = []
    let Medium = null
    for (let i = 0; i < 5; i++) {
      let paragraph = this.props.fields[`paragraphe${i}`]
      if (paragraph) {
        if (this.state[`medium${i}`]) {
          let medium = this.state[`medium${i}`].fields
          let type = medium.type[0]
          if (type === 'image') {
            Medium = <img src={medium.URL} width="100%" alt="" />
          } else {
            Medium = <GalleryItem
              src={medium.vignette}
              title={medium.title}
              type={medium.type[0]}
              width={galleryItemWidth}
              target={medium.URL}
              onClick={this.showModal.bind(this)}
              grad1={this.props.grad1}
              grad2={this.props.grad2}
            />
          }
        }

        let elem1 = (
          <div className="inline-middle">
            <Card
              title={this.props.fields[`titre${i}`] || ''}
              text={this.props.fields[`paragraphe${i}`]}
              width="100%"
              padding={cardPadding}
              no-ui />
          </div>
        )
        let elem2 = (
          <div className="inline-middle">
            {Medium}
          </div>
        )

        Rows.push((<div key={i}>
          {i % 2 === 0 ? elem1 : elem2}
          {i % 2 === 0 ? elem2 : elem1}
        </div>))
      }
    }


    return (
      <div style={containerStyles}>
        <Style
          scopeSelector=".inline-middle"
          rules={{
            display: 'inline-block',
            verticalAlign: 'middle',
            width: isMobile ? '100%' : '44%',
            margin: isMobile ? '0 0 30px 0' : '0 2% 5% 2%',
          }}/>

        {Rows}

        <Modal
          display={this.state.displayModal}
          onClose={this.closeModal.bind(this)}
          type={this.state.type}
          target={this.state.target}
          grad1={this.props.grad1}
          grad2={this.props.grad2}
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
