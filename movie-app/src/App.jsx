import Search from "./components/Search.jsx"



const App = () => {
  return (
    <main>
      <div className='pattern' />
        <div className='wrapper'>
          <header>
            <img src="./heroImg.png" alt="Hero Banner" />
            <h1>
            Find <span className='text-gradient'>Movies </span>You'll Enjoy
            </h1>
          </header>
          <Search />
        </div>
    </main>
 
  )
}

export default App
