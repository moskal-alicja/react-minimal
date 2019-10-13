import React from 'react'
import AppTitle from './AppTitle'

const MyApp = () => (
  <div>
  <AppTitle />
  <p>Bundle size: 60 bytes, Load time of the bundle: 35 ms, Last commit SHA1: 8fbe21026f44466cee137acb38fdc3334bf43c0c</p>
  <div>generateArray with n = 10: {generateArray(10).toString()}</div>
  <div>generateRandomArray with n = 10: {generateRandomArray(10).toString()}</div>
  <div>Elements from [{constArray.toString()}] larger than 15: {constArray.filter(x => x > 15).toString()}</div>
  <div>Elements from [{MyArray.toString()}] to their square root: [{squareRootFromMyArray.call().toString()}]</div>
  </div>
)

const generateArray = (n) => Array(n).fill().map((x,i) => i + 1)

const generateRandomArray = (n) => Array(n).fill().map(() => 1 + Math.floor(Math.random() * 25))

const constArray = [2, 56, 23, 88, 17, 4]

const MyArray = [2, 5, 8, 10]

const squareRootFromMyArray = () => Array.from(MyArray, (x) => Math.sqrt(x))

export default MyApp

const data = 
[
  {
    "teacherName": "Jan Nowak",
    "teacherAge": 36,
    "active": true,
    "students": [
      {
        "name": "Maciej Janosz",
        "age": 12
      },
      {
        "name": "Wojciech Kowalski",
        "age": 15
      },
      {
        "name": "Wioletta Poznańska",
        "age": 1000000
      }
    ]
  },
  {
    "teacherName": "Mariusz Flasinski",
    "teacherAge": 56,
    "active": true,
    "students": [
      {
        "name": "Jan Kot",
        "age": 12
      },
      {
        "name": "Jan Ziobro",
        "age": 15
      },
      {
        "name": "Adam Malysz",
        "age": 41
      }
    ]
  },
  {
    "teacherName": "Wojciech Kuzak",
    "teacherAge": 44,
    "active": false,
    "students": [
      {
        "name": "Janina Wronska",
        "age": 22
      },
      {
        "name": "John Dover",
        "age": 7
      },
      {
        "name": "Emil Petterson",
        "age": 46
      }
    ]
  }
]