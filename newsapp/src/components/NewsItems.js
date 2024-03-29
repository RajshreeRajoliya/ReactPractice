import React, { Component } from 'react'

export class NewsItems extends Component {


  render() {
    let {title , description,imageurl,newsUrl,author,date} = this.props
    return (
      <div>
       <div className="card" style={{width: '18rem'}}>
  <img src={imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">

    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}..</p>
    <a href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
    <p className="card-text"><small className="text-muted">Last updated by { !author ?"Unknown" :author} {new Date(date).toGMTString()} ago</small></p>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItems
