import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/';
import Survey from './pages/Survey';
import Error from './components/Error/';
import Header from './components/Header';
import ClientForm from './components/ClientForm/';
import FreelanceForm from './components/FreelanceForm/';
import Freelances from './pages/Freelances/';
import Results from './pages/Results/';
import Footer from "./components/Footer";
import {SurveyProvider, ThemeProvider} from "./utils/context";
import GlobalStyle from "./utils/style/GlobalStyle";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <ThemeProvider>
            <SurveyProvider>
                <GlobalStyle />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/survey/:questionNumber" element={<Survey />} />
                    <Route path="/results" element={<Results />} />
                    <Route path="/freelances" element={<Freelances />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
            </SurveyProvider>
        </ThemeProvider>
        {/*<GlobalStyle />*/}
        {/*<Header/>*/}
        {/*<Routes>*/}

        {/*  <Route path="/" element={<Home />} />*/}
        {/*  <Route path="/survey/:questionNumber" element={<Survey />}>*/}
        {/*      <Route path="client" element={<ClientForm />} />*/}
        {/*      <Route path="freelance" element={<FreelanceForm />} />*/}
        {/*  </Route>*/}
        {/*  <Route path="/freelances" element={<Freelances />} />*/}
        {/*  <Route path="/results" element={<Results />} />*/}

        {/*  <Route path="*" element={<Error />} />*/}
        {/*</Routes>*/}
    </Router>
  </React.StrictMode>
);

