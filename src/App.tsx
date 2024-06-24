import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './shared/landing-page/landing_page';
import SignUpForm from './ui/signup/signup_form';
import Providers from './shared/providers';
import { FloatingNav } from './ui/floating-navbar';
import IframeBackground from './components/IframeBackground';
import AboutSection from './components/AboutSection';
import { FlipWords } from './components/flip-words.tsx';

function App() {
  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'SignUp', link: '/signup' },
    { name: 'Login', link: '/login' },
  ];

  const words = ['React', 'JavaScript', 'Web Development'];

  return (
    <Providers>
      <Router>
        <FloatingNav navItems={navItems} />
        <IframeBackground />
        <FlipWords words={words} />
        <AboutSection />
      </Router>
    </Providers>
  );
}

export default App;
