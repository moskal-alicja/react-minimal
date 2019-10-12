import React from 'react'
import AppTitle from './AppTitle'

const MyApp = () => (
  <div>
  <AppTitle />
  <p>Bundle size: 60 bytes, Load time of the bundle: 35 ms, Last commit SHA1: 8fbe21026f44466cee137acb38fdc3334bf43c0c</p>
  <div>generateArray with n = 10: {generateArray(10).toString()}</div>
  </div>
)

const generateArray = (n) => Array(n).fill().map((x,i) => i + 1)

export default MyApp