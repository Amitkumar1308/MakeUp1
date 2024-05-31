//src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import InquiryForm from './components/Form';
import WhyJoin from './components/WhyJoin';
import Certification from './components/Certificate';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <Routes>
          <Route exact path="/" component={InquiryForm} />
          <Route path="/why-join" component={WhyJoin} />
          <Route path="/certification" component={Certification} />
        </Routes> */}
              <InquiryForm />
      <WhyJoin />
      <Certification />
        <Footer />
      </div>
    </Router>
  );
}

export default App;