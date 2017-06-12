import React from 'react'
import Radium from 'radium'
import Slider from 'react-slick'
import debounce from 'lodash.debounce'

console.log(debounce)

import Card from '../common/Card'
import Plus from '../common/Plus'

class Carousel extends React.Component {
  render() {
    const containerStyles = {
      position: 'relative',
      height: '100%',
      width: '100%',
      padding: '0px',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 'auto',
      marginTop: '-10px',
      minHeight: '0px',
      minWidth: '0px'
    }
    containerStyles['@media (max-width: 1023px)'] = {
      marginTop: '-120px',
      width: '100%',
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
    subcontainerStyles['@media (max-width: 1023px)'] = {
      width: '100%',
    }
    const cardStyles = {
      position: 'relative',
      display: 'inline-block',
      zIndex: '2',
      verticalAlign: 'middle',
      marginLeft: '0%',
      width: '40%',
    }
    cardStyles['@media (max-width: 1023px)'] = {
      padding:'0px',
      width: '100%',
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
    imgStyles['@media (max-width: 1023px)'] = {
      display: 'none',
    }
    const plusStyles = {
      position: 'absolute',
      bottom: '10px',
      right: '-33px',
      zIndex: '3',
    }
    plusStyles['@media (max-width: 1023px)'] = {
      bottom: '10px',
      right: '10px',
    }

    let mobileAttributes = {}
    let size = 'm'
    if (window.outerWidth <= 1024) {
      mobileAttributes = {
        width: '80%',
        padding:'0 0 0 10%',
        backgroundColor:'#fffff',
        'no-ui': true,
      }
      size = 'xs'
    }

    let debounced = debounce(() => {
      if (this.refs.slider) {
        this.refs.slider.slickGoTo(this.props.activeSlide || 0)
      }
    }, 300)
    debounced()

    return (
      // bind this with real data
      <div style={containerStyles}>
        <Slider ref="slider" {...{  dots: true, infinite: true, speed: 1000, slidesToShow: 1, slidesToScroll: 1}}>
          <div style={slideStyles}>
            <div style={subcontainerStyles}>
              <div style={cardStyles}>
                <Card
                  title='piano'
                  text='«&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&nbsp;»'
                  {...mobileAttributes}
                />
              </div>
              <img style={imgStyles} src='/assets/piano.jpg' alt='piano' />
              <div style={plusStyles}>
                <Plus to="/page/piano" size={size}/>
              </div>
            </div>
          </div>
          <div style={slideStyles}>
            <div style={subcontainerStyles}>
              <div style={cardStyles}>
                <Card
                  title='clavecin'
                  text='«&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&nbsp;»'
                  {...mobileAttributes}
                  />
              </div>
              <img style={imgStyles} src='/assets/Clavecin.jpg' alt='partitions' />
              <div style={plusStyles}>
                <Plus to="/page/clavecin" grad1='#13547a' grad2='#80d0c7' size={size} />
              </div>
            </div>
          </div>
          <div style={slideStyles}>
            <div style={subcontainerStyles}>
              <div style={cardStyles}>
                <Card
                  title='improvisation'
                  text='«&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&nbsp;»'
                  {...mobileAttributes}
                  />
              </div>
              <img style={imgStyles} src='/assets/improvisation.jpg' alt='partitions' />
              <div style={plusStyles}>
                <Plus to="/page/improvisation" grad1='#13547a' grad2='#80d0c7' size={size} />
              </div>
            </div>
          </div>
          <div style={slideStyles}>
            <div style={subcontainerStyles}>
              <div style={cardStyles}>
                <Card
                  title='recherche'
                  text='«&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&nbsp;»'
                  {...mobileAttributes}
                  />
              </div>
              <img style={imgStyles} src='/assets/Recherche.jpg' alt='partitions' />
              <div style={plusStyles}>
                <Plus to="/page/recherche" grad1='#13547a' grad2='#80d0c7' size={size} />
              </div>
            </div>
          </div>
          <div style={slideStyles}>
            <div style={subcontainerStyles}>
              <div style={cardStyles}>
                <Card
                  title='composition'
                  text='«&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&nbsp;»'
                  {...mobileAttributes}
                  />
              </div>
              <img style={imgStyles} src='/assets/composition.jpg' alt='partitions' />
              <div style={plusStyles}>
                <Plus to="/page/composition" grad1='#13547a' grad2='#80d0c7' size={size} />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    )
  }
}

export default Radium(Carousel)
