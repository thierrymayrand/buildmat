import { Route, Switch, Redirect } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import Home from './components/pages/Home';
import Store from './components/Store';
import Navbar from './components/Navbar';
import Articles from './components/pages/Articles';
import ArticleDetail from './components/pages/ArticleDetail';
import Ebook from './components/pages/Ebook';
import CartProvider from './components/store/CartProvider';
import EbookDetail from './components/pages/EbookDetail';
import ScreenTop from './components/ScreenTop';
import Cart from './components/Cart';
import Checkout from './components/pages/Checkout';
import Account from './components/pages/Account';
import SignUp from './components/pages/SignUp';
import { useState } from "react";
import AddArticle from './components/pages/AddArticle';
import AddEbook from './components/pages/AddEbook';
import Newsletter from './components/Newsletter';
import UserProvider from './components/store/UserProvider';
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import StripeContainer from "./components/StripeContainer"
import "./App.css"
import MyProduct from './components/pages/MyProduct';
import Youtube from './components/pages/Youtube';


const stripePromise = loadStripe('pk_test_51KV5tcLALX60SYEoYxybNazimbVL6HgWLPml2F724u0ISH2YnF5ifI91EC8IaycfUhDTNZGOUhjo3QLQJVzYytGj00QOb6qj7R')

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const options = {
    // passing the client secret obtaain by server
    clientSecret: 'sk_test_51KV5tcLALX60SYEo23e2ELeEzaPizhWwBBRT8RuY2R4enTxI2j56hG4UetatRo3S0NdoxDe0iHgO0pxhI0lzTIjd00nQMdG5SC'
  }
  return (
    <div>



      <UserProvider>
        <CartProvider>
          <ScreenTop />
          <Navbar />

          <div>
            <Switch>
              <Route path='/' exact>
                <Redirect to='/home' />
              </Route>
              <Route path='/home'>
                <Home />
              </Route>
              <Route path='/cart'>
                <Cart />
              </Route>



              <Route path='/authenticate'>
                <SignUp />
              </Route>

              <Route path='/account'>
                <Account />
              </Route>

              <Route path='/checkout/:productId'>
                <StripeContainer />
              </Route>


              <Route path='/product/:productId' exact>
                <MyProduct />
              </Route>


              <Route path='/ebook' exact>
                <Ebook />
              </Route>

              <Route path='/addarticle' exact>
                <AddArticle />
              </Route>

              <Route path='/articles' exact>
                <Articles />
              </Route>

              <Route path='/articles/:articleId'>
                <ArticleDetail />
              </Route>



              <Route path='/addebook'>
                <AddEbook />
              </Route>


              <Route path='/ebook/:ebookId'>
                <EbookDetail />
              </Route>


              <Route path='/youtube'>
                <Youtube />
              </Route>
              <Route path='/bio'><h1></h1></Route>
              <Route path='/podcasts'><h1>Podcasts</h1></Route>
            </Switch>

          </div>
          <Newsletter />
        </CartProvider>
      </UserProvider>


    </div >
  );
}

export default App;
