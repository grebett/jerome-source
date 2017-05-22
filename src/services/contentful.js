import * as contentful from 'contentful'
import { contentful as conf } from '../config'

if (!conf.spaceID || !conf.accessToken) {
  throw new Error('spaceID and/or accessToken should be configured in /config.js')
}

const client = contentful.createClient({
  space: conf.spaceID,
  accessToken: conf.accessToken,
})

//
export let getEntries = (contentType) => {
  return new Promise((resolve, reject) => {
    client.getEntries({'content_type': contentType}).then((value) => {
      resolve(value)
    }, (error) => {
      reject(error)
    })
  })
}
