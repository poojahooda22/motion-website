import './App.css'
import Craft from './components/Craft/Index'

import Home from './components/Home/Index'
import Navbar from './components/Navbar/Index'
import Real from './components/Real/Index'

function App() {

  return (
    <html>
      <body theme="cyan">
        <div className='section main w-full'>
          <Navbar/>
          <Home />
          <Craft />
          <Real />
        </div>  
      </body>
    </html>
    
  )
}

export default App
