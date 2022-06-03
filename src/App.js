import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react'
import Home from './components/Home/Home';


import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Register from './components/register/register';
import Community from './components/Community/Community';


import SingleCourse from './components/SingleCourse/SingleCourse';
import { createContext, useEffect, useState } from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";
import courseData from "./data/fakeCourses.json";
import ReactGa from "../node_modules/react-ga";

// import {  googleAnalyticsActions} from './utils/google-analytics/google-analytics-init'
// import { webVitalActions} from './utils/google-analytics/google-analytics-get-web-vitals'


// for drilling context
export const singleContext = createContext('');
function App() {
  //pre-loader
  const[loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },4000)
  },[])
 useEffect(()=>{
   ReactGa.initialize('G-FVH15YVQ8H')
   //to report pagew viewBox
   ReactGa.pageview(window.location.pathname + window.location.search)
   
 },[])
  // store loaded data 
  const [courses, setCourses] = useState([])
  //call the api and load all data for set context value
  useEffect(() => {
    setCourses(courseData);

    // fetch('/fakeCourses.JSON')
      // .then(res => res.json())
      // .then(data => setCourses(data))
  }, [])
  return (
    <>
  <div className="app">
      {
        loading ?
        <ScaleLoader


       
        size={100}
        color={'black'}
        loading={loading}

         



        />
        :
    <singleContext.Provider value={courses}>
      <div>
        <BrowserRouter>
          {/* universal hadder */}
          <Header></Header>
          {/* route  */}
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/Home'>
              <Home></Home>
            </Route>
            <Route exact path='/Services'>
              <Services></Services>
            </Route>
            <Route exact path='/About-Us'>
              <About></About>
            </Route>
            <Route exact path='/Profile'>
              <Login></Login>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/Register'>
              <Register></Register>
            </Route>
            <Route exact path='/Contact'>
              <Contact></Contact>
            </Route>
            <Route exact path='/Community'>
              <Community></Community>
            </Route>
            <Route exact path='/course/:id/:title'>
              <SingleCourse></SingleCourse>
            </Route>
            
          

            {/* 404 page */}
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          {/* universal footer */}
          <Footer></Footer>
        </BrowserRouter>
      </div>
    </singleContext.Provider>
}
    </div>
    </>
    
  );
}

export default App;
