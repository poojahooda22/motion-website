import './App.css'
import Cart from './components/Craft/Index'
import Home from './components/Home/Index'
import Navbar from './components/Navbar/Index'

function App() {

  return (
    <html>
      <body theme="cyan" >
        <div className='section main w-full'>
          <Navbar/>
          <Home />
          <Cart />
        </div>  
      </body>
    </html>
    
  )
}

export default App
