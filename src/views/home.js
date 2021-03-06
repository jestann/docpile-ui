import React from 'react'
import SearchBar from '../components/atoms/searchBar'
import Button from './../components/atoms/button'
import flying from './../assets/icons/flying.svg'
import './../css/views/view.css'

const Home = () => (
  <div id='home' className='view'>
    <img className='highlight-img' src={flying} alt='flying paper airplane' />
    <h4 className='welcome'>Welcome to Docpile.</h4>
    <div className='formbox'>
      <SearchBar className='input' />
    </div>
    <Button className='submit' label='Search' onClick={() => {}} />
    <div className='clear'></div>
  </div>
)

export default Home