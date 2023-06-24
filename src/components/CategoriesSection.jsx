import axios from 'axios'
import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card'

export default function CategoriesSection() {

  const [Categories,setCategories] = useState([])
  useEffect(()=>{
axios.get('https://dummyjson.com/products/categories').then(json=> setCategories(json.data))
  },[])
  return (
   <div className="container">
    <div className="my-5 text-center">
      <h1>Categories</h1>
      <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tenetur necessitatibus provident autem explicabo unde architecto id hic quidem culpa?</p>
    </div>
    <div className="row">
     {
      Categories.map(( val,key )=> 
      <div className="col-md-4" key={key}>
    <Card >
      <Card.Body>
        <Card.Title>{val}</Card.Title>
      </Card.Body>
    </Card>
      </div>)
     }
    </div>
   </div>
  )
}
