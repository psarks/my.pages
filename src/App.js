import React from 'react';
import GlobalStyle from './globalStyles';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/homepage/Home';
import About from './pages/aboutpage/About'
import Photography from './pages/photographypage/Photography'
import Projects from './pages/projectspage/Projects'
import Cv from './pages/cvpage/CV'
import CaseStudy from './pages/casestudypage/CaseStudy'
import Bucketlist from './pages/bucketlistpage/Bucketlist'
import { Navbar, Footer } from './components';
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <ScrollToTop/>
      <Navbar/>
      <Switch>
        <Route path='/' exact component= {Home}/>  
        <Route path='/about' component= {About}/>      
        <Route path='/photography' component= {Photography}/>      
        <Route path='/projects' component= {Projects}/>
        <Route path='/cv' component= {Cv}/>
        <Route path='/casestudy' component= {CaseStudy}/> 
        <Route path='/bucketlist' component={Bucketlist}/>     
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
