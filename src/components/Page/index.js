import React from 'react'
import * as Contentful from '../../services/contentful'

import BackTitle from './BackTitle'
import Body from './Body'


class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fields: {},
      skill: props.match.params.skill,
      grads: {
        'piano': ['#f6d365', '#fda085'],
        'clavecin': ['#13547a', '#80d0c7'],
        'improvisation': ['#fccb90', '#d57eeb'],
        'recherche': ['#5ee7df', '#b490ca'],
        'composition': ['#30cfd0', '#330867'],
      },
    }

    Contentful.getEntry(this.state.skill).then(value => {
      this.setState({fields: value.fields})
    }, error => {
      console.error(error)
    })
  }

  render() {
    return (
      <div style={{marginTop:'54px', width:'100%'}}>
        <BackTitle title={this.state.skill} grad1={this.state.grads[this.state.skill][0]} grad2={this.state.grads[this.state.skill][1]}/>
        <Body fields={this.state.fields} grad1={this.state.grads[this.state.skill][0]} grad2={this.state.grads[this.state.skill][1]}/>
      </div>
    )
  }
}

export default Page
