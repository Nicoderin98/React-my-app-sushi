import React, { Component } from 'react'

export default class card extends Component {
  render() {
  return (
    <div className='col'>
      <div className="card" style={{width: "18rem", textAlign:"center"}}>
      <button onClick={() => this.props.onIncrement(this.props.card)} className="btn btn-primary">
        Aggiungi <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>{this.props.card.quantità}</span></button>
        <img src={this.props.card.immagine} class="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{this.props.card.nome} Roll</h5>
          <p className="card-text">€{this.props.card.prezzo}</p>
          <button onClick={() => this.props.onDelete(this.props.card.id)} className="btn btn-outline-danger">Elimina</button>
        </div>
      </div>
    </div>
  )
  }
}
