import React from 'react'

import BackTitle from './BackTitle'
import Body from './Body'

const Page = (props) => (
  // find something for this margin...
  <div style={{marginTop:'54px', width:'100%'}}>
    <BackTitle title={props.match.params.skill}/>
    <Body />
  </div>
)

export default Page
