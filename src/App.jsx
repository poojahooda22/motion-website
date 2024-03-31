import './App.css'
import Home from './components/Home/Index'
import Navbar from './components/Navbar/Index'

function App() {

  return (
    <html>
      <body theme="black" >
        <div className='section main w-full'>
          {/* <Navbar/> */}
          <Home />
        </div>  
      </body>
    </html>
    
  )
}

export default App
