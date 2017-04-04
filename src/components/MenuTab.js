import React from 'react'
import { Link } from 'react-router-dom'

import Icon from './common/Icon'

// TODO: add a `selected` prop and see how I can change the svg img and title color accordingly ==> #F6D365
class MenuTab extends React.Component {
  constructor(props) {
    super()
    this.state = {
      active: props.active
    }
  }

  render() {
    const parentStyle = {
      width: '34px',
      padding: '3px 10px',
      boxSizing: 'content-box',
      background: 'transparent',
      display: 'inline-block'
    }
    const textStyles = {
      textAlign: 'center',
      marginTop: '3px',
      width: '100%',
      fontFamily: 'Kano',
      fontSize: '10px',
      color: this.state.active ? '#f6d365' : '#ffffff'
    }

    return (
      <div style={parentStyle}
        onMouseOver={this.active.bind(this)}
        onMouseLeave={this.unactive.bind(this)}>
        <Link to={this.props.to} style={{textDecoration:'none'}}>
          <Icon name={this.props.name} width="20px" display='block' active={this.state.active}/>
          <div style={textStyles}>
            {this.props.title}
          </div>
        </Link>
      </div>
    )
  }

  active(e) {
    if (this.props.hoverable)
      this.setState({active: true})
  }

  unactive(e) {
    if (this.props.hoverable)
      this.setState({active: false})
  }
}

export default MenuTab
