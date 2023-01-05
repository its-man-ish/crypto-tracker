import React,{useState} from 'react'
import Table from './Table'
import { RotatingLines} from 'react-loader-spinner';
const Form = () => {

  const [searchTerm,setSearchTerm] = useState('')
  const [currency, setCurrency]= useState('')
  const [loading,setLoading] = useState(false)
  const [result,setResult] = useState({})
  const handleSubmit = (e)=>{
    e.preventDefault();
    setLoading(true);
    if(!searchTerm)
     {
      console.log('Lavde??')
     }
     else{
      console.log('search: ',searchTerm)
      console.log('currency:',currency)
      fetch(`https://api.coinstats.app/public/v1/coins/${searchTerm}?currency=${currency}`)
      .then((res)=>res.json())
      .then((data)=>{
        setResult(data.coin)
        setLoading(false);
      })
  
      console.log(result)

     }
   
  }
 
  const coins = [
    {
        name:'BitCoin',
        id:'bitcoin',
    },
    {
        name:'Ethereum',
        id:'ethereum',
    },
    {
        name:'Tether',
        id:'tether'
    },
    
    {
        name:'Solana',
        id:'solana',
    }
    ,
    {
        name:'Cosmos',
        id:'cosmos'
    },
    {
      name:'Polkadot',
      id:'polkadot'
  },
    {
      name:'Dogecoin',
      id:'dogecoin'
     }
  ]

  const currencies = [
    {
      name:'INR-INDIA',
      id:'INR'
    },
    {
      name:'USD-US',
      id:'USD'

    },
    {
      name:'EUR-EUROPE',
      id:'EUR'
    },
    
    {
      name:'JPY-JAPAN',
      id:'JPY'
    }
  ]

  

  return (
    <div className='container mt-3 center'>
     <h1 className='text-center mb-3'><span className='p-2 bg-dark text-white rounded'>Crypto Coin Tracker</span></h1>
     <p className='text-center'><b>Project Under GammaPrep </b> <br /> Build by Manish</p>
    <form  onSubmit={handleSubmit}>
        <select 
         required={true}
         className='form-select'
         style={{maxWidth:"450px"}}
         value={searchTerm}
         onChange={(e)=>setSearchTerm(e.target.value)}
        >
            <option>Select Coin</option>
         {coins.map((coin,i)=>(
            <option  key={i} value={coin.id}>{coin.name}</option>
         ))}
        
        </select>
        <select 
          required={true}
         className='form-select mt-2'
         style={{maxWidth:"450px"}}
         value={currency}
         onChange={(e)=>setCurrency(e.target.value)}
        >
            <option disabled={true}>Select Currency</option>
         {currencies.map((coin,i)=>(
            <option  key={i} value={coin.id}>{coin.name}</option>
         ))}
        
        </select>
        {
            searchTerm &&
            <button  className='btn btn-warning mt-2 mx-auto' type='submit'>Get Price</button>

        }
    </form>
    
    {
      loading && 
      <div className="text-center mt-5">
       <RotatingLines />
      </div>
    }
    {
      !loading && <Table coin={result} currency={currency}/>
    }
    
    
    </div>
    
  )
}

export default Form
