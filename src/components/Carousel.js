import React from 'react'

import Slider from 'react-slick'

import Card from './common/Card'
import Plus from './common/Plus'

// TODO: add a `selected` prop and see how I can change the svg img and title color accordingly ==> #F6D365
class Carousel extends React.Component {
  render() {
    const containerStyle = {
      position: 'relative',
      minHeight: '461px',
      width: '1370px',
      padding: '0px',
      margin: 'auto',
      minHeight: '0px',
      minWidth: '0px'
    }
    const subcontainerStyles = {
      position: 'relative',
      width: '100%'
    }
    const cardStyles = {
      position: 'absolute',
      top: '63px',
      left: '120px',
      zIndex: '2',
      backgroundColor: 'transparent'
    }
    const imgStyles = {
      position: 'absolute',
      top: '0px',
      left: '550px',
      maxWidth: '648px',
      maxHeight: '431px',
      overflow: 'hidden',
      zIndex: '1'
    }
    const plusStyles = {
      position: 'absolute',
      top: '396px',
      left: '1163px',
      zIndex: '3'
    }

    return (
      <div style={containerStyle}>
        <Slider {...{  dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1}}>
          <div style={subcontainerStyles}>
            <div style={cardStyles}>
              <Card title='piano' text='«&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&nbsp;»' />
            </div>
            <div style={imgStyles}>
              <img src='/assets/piano.png' alt='piano' />
            </div>
            <div style={plusStyles}>
              <Plus to="piano" />
            </div>
          </div>
          <div style={subcontainerStyles}>
            <div style={cardStyles}>
              <Card title='clavecin' text='«&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&nbsp;»' />
            </div>
            <div style={imgStyles}>
              <img src='/assets/score.png' alt='partitions' />
            </div>
            <div style={plusStyles}>
              <Plus to="clavecin" grad1='#13547a' grad2='#80d0c7' />
            </div>
          </div>
        </Slider>
      </div>
    )
  }
}

export default Carousel
