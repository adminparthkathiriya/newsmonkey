import React, { Component } from "react";
export class Newsitem extends Component {
  render() {
  let {title,description,imageurl,newsUrl}=this.props;
    return (
      <div className="my-3">
          <div className="card" style={this.props.style}>
            <img className="card-img-top" src={imageurl} alt="..." height="300" width="500"/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">
                {description}...
              </p>
              <a href={newsUrl} rel="noreferrer" target="_blank"className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
    );
  }
}

export default Newsitem;
