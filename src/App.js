import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Beranda, About, Contact} from './routes/Links';
import {Layout} from './components/Layout';
import {Navigation} from './components/Navigation';

function App() {
  return (
    <>
    {/* navigasi */}
    <Navigation/>
    {/* container */}
    <Layout>
    {/* routing halaman */}
      <Router>
          <Switch style={{ marginTop:40 }}>
              <Route exact path="/" component={Beranda}/>
              <Route  path="/about" component={About}/>
              <Route  path="/contact" component={Contact}/>
          </Switch>
      </Router>
    </Layout>
    </>
  );
}

export default App;
