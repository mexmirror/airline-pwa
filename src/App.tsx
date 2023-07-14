import oceanicLogo from './assets/oceanic.svg'
import './App.css'
import BoardingPass from './boardingPass/BoardingPass'

function App() {
  return (
    <div className='flex justify-center'>
      <Content />
    </div>
  )
}

const Content = () => (
  <div className='flex flex-col items-center px-14 py-8 rounded-2xl bg-white drop-shadow-lg'>
    <Header />
    <BoardingPass />
  </div>
)

const Header = () => (
  <>
    <img src={oceanicLogo} className="w-24" alt="Oceanic Airways logo" />
  </>
)


export default App
