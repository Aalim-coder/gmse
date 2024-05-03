import React from 'react';
import ContextProvider from './context/SearchContext.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import CreateArea from './components/CreateArea.jsx';

function App(){
    return (
        <ContextProvider>
            <Header/>
            <CreateArea/>
            <Footer/>
        </ContextProvider>
    );
}
export default App;