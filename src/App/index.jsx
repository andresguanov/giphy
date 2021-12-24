import './App.css'
import { Route, Link } from 'wouter'
import { Home } from '/src/Pages/Home'
import { Detail } from '/src/Pages/Detail'
import { SearchResults } from '/src/Pages/SearchResults'



function App() {

  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <span>Home</span>
          <ion-icon name="home"></ion-icon>
        </Link>
        <Route
          path="/"
          component={Home}
        />
        <Route
          path="/search/:keyword"
          component={SearchResults}
        />
        <Route
          path="/gif/:id"
          component={Detail}
        />
      </section>
    </div>
  )
}

export default App
