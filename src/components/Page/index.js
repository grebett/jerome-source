import React from 'react'
import * as Contentful from '../../services/contentful'

import BackTitle from './BackTitle'
import Body from './Body'


class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = {fields: {}, skill: props.match.params.skill}

    Contentful.getEntry(this.state.skill).then(value => {
      this.setState({fields: value.fields})
      console.log(value.fields)
    }, error => {
      console.error(error)
    })
  }

  render() {
    return (
      <div style={{marginTop:'54px', width:'100%'}}>
        <BackTitle title={this.state.skill}/>
        <Body fields={this.state.fields}/>
      </div>
    )
  }
}

export default Page
