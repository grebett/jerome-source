import React from 'react'
import Radium from 'radium'

import Title from '../common/Title'
import Card from '../common/Card'

class Header extends React.Component {
  render() {
    const containerStyles = {
      position: 'relative',
      margin: '0px',
      top: '27px',
      left: '118px',
      width: 'calc(100% - 118px)',
    }
    containerStyles['@media (max-width: 1439px)'] = {
      left: 118 * 0.9 + 'px',
      width: `calc(100% - ${118 * 0.9 + 'px'})`,
    }
    containerStyles['@media (max-width: 1279px)'] = {
      left: 118 * 0.8 + 'px',
      width: `calc(100% - ${118 * 0.8 + 'px'})`,
    }
    containerStyles['@media (max-width: 1139px)'] = {
      left: 118 * 0.7 + 'px',
      width: `calc(100% - ${118 * 0.7 + 'px'})`,
    }
    containerStyles['@media (max-width: 1023px)'] = {
      position: 'relative',
      boxSizing: 'border-box',
      width: '100%',
      top: '0px',
      left: '0px',
    }
    const subcontainerStyles = {
      width:'100%',
      position: 'relative',
      marginTop: '50px',
    }
    const cardStyles = {
      position: 'relative',
      display: 'inline-block',
      zIndex: '2',
      verticalAlign: 'middle',
      marginLeft: '0%',
      width: '35%',
    }
    cardStyles['@media (max-width: 1023px)'] = {
      width: '100%',
    }
    const titleStyles = {
      '@media (max-width: 1023px)': {
        padding: '15px 15px 0 15px',
      }
    }
    const imgStyles = {
      backgroundColor: 'transparent',
      position: 'relative',
      display: 'inline-block',
      verticalAlign: 'middle',
      zIndex: '1',
      marginLeft: '-20px',
      maxHeight: '462px',
      padding: '0px',
      width: '65%',
      maxWidth: '630px',
    }
    imgStyles['@media (max-width: 1023px)'] = {
      width: '100%',
      marginLeft: '0px',
    }

    let mobileAttributes = {}
    if (window.outerWidth < 1024) {
      mobileAttributes = {
        'no-ui': true,
        'padding': '15px',
      }
    }

    return (
      <div style={containerStyles}>
        <div style={titleStyles}>
          <Title size='h1' text='jerome bertier' />
        </div>
        <div style={subcontainerStyles}>
          <div style={cardStyles}>
            <Card
              width='100%'
              title='Biographie'
              text='Jérôme Bertier à étudié le Piano avec Michel Gaechter et Laurent Cabasso, le Clavecin avec Robert Hill et l’Improvisation avec Dirk Boerner. Diplômé de Piano et de Pédagogie de la Hochschule de Freiburg (Allemagne) et titulaire du Master d’Improvisation du CNSMD de Lyon, il a étudié la Physique et la Philosophie à l’Université de Strasbourg, où il donne une conférence annuelle sur la Musique Grecque antique sous la direction de Sandra Boehringer. Il est l’auteur de plusieurs travaux sur l’Acoustique musicale qu’il enseigne en Masterclasse. Il se produit sur scène au Piano, au Clavecin, en formation de chambre et en Basse continue, ainsi qu’en Improvisation et au Ciné-Concert. Depuis 2012 il organise les concerts de Musique de Chambre de Villanova (Corse-du-Sud). Il a occupé plusieurs postes d’enseignement, Piano ou Improvisation en France et en Allemagne.'
              {...mobileAttributes}
            />
          </div>
          <img style={imgStyles} src='/assets/piano.jpg' alt='piano' />
        </div>
      </div>
    )
  }
}

export default Radium(Header)
