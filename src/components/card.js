import React, { Component } from 'react'

export default class card extends Component {
  render() {
  return (
    <div className='col'>
      <div className="card" style={{width: "18rem", textAlign:"center"}}>
        <img src={this.props.immagine} class="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{this.props.nome} Roll</h5>
          <p className="card-text">€{this.props.prezzo}</p>
          <button className="btn btn-outline-danger">Elimina</button>
        </div>
      </div>
    </div>
  )
  }
}
