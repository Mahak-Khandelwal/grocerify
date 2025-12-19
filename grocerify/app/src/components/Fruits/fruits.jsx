import BgFruits from './../../assets/Fruits-Banner.jpg'
import CategoryPage from '../CategoryPage/CategoryPage.jsx'

const Fruits = () => {
  return (
    <div>
      <CategoryPage title="Fruits& Veggies" bgImage={BgFruits}  categories={['Fruits', 'Vegetables']}/>
    </div>
  )
}

export default Fruits
