import React from 'react'
import Radium from 'radium'
import Slider from 'react-slick'

import Card from './common/Card'
import Plus from './common/Plus'

class Carousel extends React.Component {
  render() {
    const containerStyles = {
      position: 'relative',
      height: '100%',
      width: '100%',
      padding: '0px',
      margin: 'auto',
      marginTop: '30px',
      minHeight: '0px',
      minWidth: '0px'
    }
    const slideStyles = {
      position: 'relative',
      width: '100%',
      boxSizing: 'border-box',
      height: '100%',
      margin: 'auto',
      backgroundColor: 'transparent',
    }
    const subcontainerStyles = {
      width:'75%',
      backgroundColor: 'transparent',
      position: 'relative',
      margin: 'auto'
    }
    const cardStyles = {
      position: 'relative',
      display: 'inline-block',
      zIndex: '2',
      verticalAlign: 'middle',
      marginLeft: '0%',
      width: '40%',
    }
    const imgStyles = {
      backgroundColor: 'transparent',
      position: 'relative',
      display: 'inline-block',
      marginLeft: '0%',
      verticalAlign: 'middle',
      zIndex: '1',
      maxHeight: '431px',
      padding: '43px 0px',
      width: '60%',
    }
    const plusStyles = {
      position: 'absolute',
      bottom: '10px',
      right: '-33px',
      zIndex: '3',
    }

    return (
      <div style={containerStyles}>
        <Slider {...{  dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1}}>
          <div style={slideStyles}>
            <div style={subcontainerStyles}>
              <div style={cardStyles}>
                <Card title='piano' text='«&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&nbsp;»' />
              </div>
              <img style={imgStyles} src='/assets/piano.png' alt='piano' />
              <div style={plusStyles}>
                <Plus to="piano" />
              </div>
            </div>
          </div>
          <div style={slideStyles}>
            <div style={subcontainerStyles}>
              <div style={cardStyles}>
                <Card title='clavecin' text='«&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&nbsp;»' />
              </div>
              <img style={imgStyles} src='/assets/score.png' alt='partitions' />
              <div style={plusStyles}>
                <Plus to="clavecin" grad1='#13547a' grad2='#80d0c7' />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    )
  }
}

export default Radium(Carousel)
