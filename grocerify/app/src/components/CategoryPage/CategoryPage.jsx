
import Banner from '../Banner/Banner.jsx'
import Cards from '../Cards/cards.jsx'
import ProductList from "../ProductList/productlist.jsx"

const CategoryPage = ({title, bgImage, categories=[]}) => {

  let FilteredItems = categories.includes('All')
  ? ProductList
  : ProductList.filter(item=> categories.includes(item.category))

    const renderProduct = FilteredItems.map(product=>{
        return (
            <Cards image={product.image} name={product.name} price={product.price} />
        )
    })




  return (
    <div> 
      <Banner title={title} bgImage={bgImage}/>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-9 py-20 max-w-[1400px] mx-auto px-18'>
        {renderProduct}
      </div> 
    </div>
  )
}

export default CategoryPage
