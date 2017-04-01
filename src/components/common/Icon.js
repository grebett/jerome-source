import React from 'react'

class Icon extends React.Component {
  render() {
    return (
      <img src={`/assets/${this.props.name}.svg`} style={styles} alt="bio" />
    )
  }
}

const styles = {
  backgroundColor: 'red'
}

export default Icon
