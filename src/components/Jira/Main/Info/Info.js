import React from 'react'

export default function Info(props) {
  return (
    <div className="info" style={{ display: "flex" }}>
    <div className="search-block">
      <input className="search" />
      <i className="fa fa-search" />
    </div>
    <div className="avatar-group" style={{ display: "flex" }}>
      <div className="avatar">
        <img src="/img/1.jfif" alt="1.jfif" />
      </div>
      <div className="avatar">
        <img src="/img/2.jfif" alt="2.jfif" />
      </div>
      <div className="avatar">
        <img src="/img/3.jfif" alt="3.jfif" />
      </div>
    </div>
    <div style={{ marginLeft: 20 }} className="text">
      Only My Issues
    </div>
    <div style={{ marginLeft: 20 }} className="text">
      Recently Updated
    </div>
  </div>
  )
}
