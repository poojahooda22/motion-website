

function Real() {
  return (
    <div className="real section w-full">
      <div className="cont h-[400vh] bg-green-600 relative">
        <div className="slides w-full h-[100vh] sticky top-0 left-0 flex ">
            <div className="slide w-full h-screen flex-shrink-0 bg-red-500"></div>
            <div className="slide w-full h-screen flex-shrink-0 bg-yellow-500"></div>
            <div className="slide w-full h-screen flex-shrink-0 bg-green-500"></div>
            <div className="slide w-full h-screen flex-shrink-0 bg-blue-500"></div>
        </div>
      </div>
    </div>
  )
}

export default Real
