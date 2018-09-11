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
              fontSize={14}
              title='Biographie'
              style={{textAlign: 'justify'}}
              text={`Pianiste, Claveciniste, improvisateur, Jérôme Bertier est diplômé de la Hochschule de Freiburg et du CNSMD de Lyon. Il a étudié avec Michel Gaechter, Laurent Cabasso, Dirk Boerner et Robert Hill. Titulaire du premier master français d’improvisation  en musique ancienne, il renoue sur scène avec cette pratique souvent délaissée des interprètes. En soliste ou devant la toile du ciné-concert, il parcourt les styles du XVIIème au XXIème siècle et du clavecin au piano, en passant par l’orgue et le clavicorde. Passionné de musique de chambre, il se produit régulièrement avec les jeunes solistes de sa générations tels que Juliette Vialle, Clara Pouvreau,  Alexis Rousseau, Irène Martin et Brice Leclair.  En 2013 il créé le festival de musique de chambre du pays ajaccien, où ce vaste répertoire s’installe en plein coeur des villages de la région.  Intégré depuis 2016 à la compagnie Volte Quarte de Chrystèle Spinosi, il y partage la basse continue avec la gambiste Clara Fellmann dans une production autour de la musique du XVIIè siècle.
              <br>
              <br>En 2017 il enregistre sur France Musique dans l’émission « à l’improviste » le résultat de son travail avec le flûtiste à bec Stélios Lazarou sur la musique traditionnelle ukrainienne. Il compose la musique du film « Plonger » de Juliette de Marcillac et enregistre la bande son du reportage « Jean Douchet, l’enfant agité ». Il se produit avec Alexis Rousseau et Raphaël Moraly dans les Trio de  Ravel et de Beethoven (Cathédrale Sainte-Croix-des-Arméniens, Paris) et créé les « visions japonaises » du compositeur Brice Leclair (Temple des Batignoles, Paris, avec Irène Martin et Raphaël Moraly). Il obtient cette année aussi le soutien de l’ADAMI.
              <br><br>
              Depuis 2018 Jérôme Bertier collabore régulièrement avec l’Orchestre Sécession (dir. Clément Mao-Takacs) au Piano et au Celesta, et participe à ses actions pédagogiques et de médiation (Abbaye de Royaumont avec Marianne Seleskovitch). Dans le cadre de la série de concert « les musiciens au musée » (musée de la musique, philharmonie de Paris) il fait découvrir aux visiteurs l’oeuvre de Scarlatti, Couperin, D’Anglebert et Bach sur les clavecins copiés d’après Thibault et Goujon.
              <br><br>
              A la suite de ses études à la Hochschule de Freiburg, on le charge d’enseigner l’improvisation aux élèves de Bachelor, tous instruments et tous styles confondus. Depuis, il expérimente diverses formes d’enseignement de l’improvisation notamment en vue du Certificat d’Aptitude qu’il prépare au CNSMDL. Il donne des masterclasses de piano et de musique ancienne.
              <br><br>
              Jérôme Bertier présente une conférence annuelle sur la musique grecque antique dans le cadre du séminaire dirigé par Sandra Boehringer, maitresse de conférence en histoire antique à l'université de Strasbourg. Il est l’auteur de plusieurs travaux de recherche sur l’acoustique musicale.
              `}
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
