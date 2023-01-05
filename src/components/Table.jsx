import React from 'react'

const Table = ({coin, currencey}) => {
  return (
    <div className='mt-5'>
    
    {
      coin.name && 
      <div className="card" style={{maxWidth:"450px"}}>
        <div className="card-body">
          <h5 className="card-title text-center"> 
          <img src={coin?.icon} className="me-2" width="25" alt="..."/>
          <b>{coin?.name}</b>
          </h5>
        
          <table className="table border">
        
        <tbody>
          <tr>
            
            <th scope='row'>Price in {currencey}</th>
            <td>{coin?.price}</td>
          </tr>
          <tr>
            
            <th scope='row'>Volume (24hrs)</th>
            <td>{coin?.volume}</td>
            
          </tr>
          <tr>
            <th scope="row">Value Change(24 Hrs)</th>
            <td >{coin?.priceChange1d}</td>
          
          </tr>
          <tr>
            <th scope="row">Available Supply</th>
            <td>{coin?.availableSupply}</td>
          
          </tr>
          <tr>
            <th scope="row">Market Cap</th>
            <td >{coin?.marketCap}</td>
          
          </tr>
        </tbody>
      </table>
        <div className="icons text-center">
        <a className='btn btn-secondary me-3' href={coin?.twitterUrl}><i className="bi bi-twitter"></i> {coin?.id}</a>
          <a className='btn btn-primary' href={coin?.websiteUrl}> <i className="bi bi-browser-chrome"></i> Learn More</a>
        </div>
        </div>
      </div>
    }
      
    </div>
  )
}

export default Table
