import React, { Component } from 'react'

export default class Calendar extends Component {
  render() {
    return (
      <div className='calendar'>
        <div >
          <ul>
            <li className='block' id='nine'><p>9 a.m.</p></li>
            <li className='block' id='ten'><p>10 a.m.</p></li>
            <li className='block' id='eleven'><p>11 a.m.</p></li>
            <li className='block' id='twelve'><p>12 p.m.</p></li>
            <li className='block' id='one'><p>1 p.m.</p></li>
            <li className='block' id='two'><p>2 p.m.</p></li>
            <li className='block' id='three'><p>3 p.m.</p></li>
            <li className='block' id='four'><p>4 p.m.</p></li>
          </ul>
        </div>
      </div>
    )
  }
}
