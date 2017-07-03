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
      maxWidth: '660px',
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
        this.refs.slider.slickGoTo(this.props.activeSlide)
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
                  text='«&nbsp;Une formation de soliste en France et en Allemagne, mais une passion pour la musique de chambre, et pour toute forme de collaboration en général, incluant beaucoup de sonates romantiques… et quelques arrangements de musique traditionnelle bulgare.&nbsp;»'
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
                  text='«&nbsp;Une passion pour les XVIIè siècles français et italien, découverts grâce à l’improvisation. Un parcours entamé en Allemagne et poursuivi à Lyon, avec quelques détours par  des régions plus exotiques grâce à la basse continue entre autres…&nbsp;»'
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
                  text='«&nbsp;Une porte d’entrée vers la compréhension et la maîtrise du style… ou au contraire la victoire du musicien sur l’interprète ? De ciné-concerts en récitals, au Clavecin et au Piano, du XVIIème au XXIème siècle.&nbsp;»'
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
                  text='«&nbsp;Quelques années d’université pour mettre un problème musical en équation, une perspective avant tout pédagogique, et un long détour par Athènes, Sparte et Mytilène.&nbsp;»'
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
                  text='«&nbsp;Vocale ou instrumentale, pour la scène ou à l’image…&nbsp;»'
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
