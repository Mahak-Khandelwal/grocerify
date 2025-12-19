import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage.jsx'
import BgSeaFood from './../../assets/seafood-banner.jpg' 


const Seafood = () => {
  return (
    <div>
     <CategoryPage title="Meat & SeaFood" bgImage={BgSeaFood}  categories={['Meat', 'SeaFood']}/>
    </div>
  )
}

export default Seafood
