import { Detail } from '@/Pages/Detail'
import { Home } from '@/Pages/Home'
import { SearchResults } from '@/Pages/SearchResults'
import { Route, Link } from 'wouter'
import './App.css'




function App() {

  return (
    <div className="App">
      <section className="App-content">
        <Link to="/" className='App-logo'>
          <span>Giphy</span>
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
