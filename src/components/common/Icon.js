import React from 'react'

class Icon extends React.Component {
  render() {
    const styles = {
      margin: 'auto',
      background: 'transparent',
      display: 'inline',
      verticalAlign: 'middle'
    }

    if (this.props.display) {
      styles.display = this.props.display
    }

    return (
      <img
        ref={this.props.name}
        alt={this.props.name}
        src={`/assets/${this.props.name}${this.props.active ? '_active' : ''}.svg`}
        style={styles}
        width={this.props.width || '30px'} />
    )
  }
}

export default Icon
