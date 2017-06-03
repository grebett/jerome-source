import React from 'react'
import Radium from 'radium'

const quoteStyles = {
  textAlign: 'center',
  width: '100%',
  fontSize: '48px',
  color: 'rgb(74, 74, 74)',
  marginTop: '500px',
  ':hover': {
    color: 'red',
  },
  '@media (max-width: 1023px)': {
    marginTop: '30px',
    fontSize: '24px',
  }
}

const Quote = (props) => {
  return (
    <div style={quoteStyles}>
      <quote>{props.text}</quote>
    </div>
  )
}

export default Radium(Quote)
