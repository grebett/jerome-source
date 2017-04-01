import React from 'react'

// TODO: add a `selected` prop and see how I can change the svg color accordingly
class Icon extends React.Component {
  render() {
    const styles = {
      margin: 'auto',
      background: 'transparent'
    }

    if (this.props.block) {
      styles.display = 'block'
    }

    return (
      <img
        alt={this.props.name}
        src={`/assets/${this.props.name}.svg`}
        style={styles}
        width={this.props.width || '30px'} />
    )
  }
}

export default Icon
