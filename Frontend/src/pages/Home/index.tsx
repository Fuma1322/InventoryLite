import BasicChart from './components/Basic'
import PieChart from './components/Pie'

const Homepage = () => {
  return (
  <div className='w-full flex flex-wrap'>
    <BasicChart />
    <PieChart />
  </div>
  )
  
}

export default Homepage