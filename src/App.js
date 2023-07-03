import './App.css';
import Home from './Home/Home'
import Navbar from './Navbar/Navbar'
import Todo from './Todo/Todo'
import Login from './Authentication/Login'
import About from './About/About'
import Catfact from './Misc/CatFact'
import Catfact2 from './Misc/CatFact2'
import Form from './Misc/Form'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState, createContext } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

export const AppContext = createContext();

function App() {
  const [userName, setUserName] = useState("User");
  const client = new QueryClient({
    defaultOptions:{
      queries:{
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <div className='App'>
      <QueryClientProvider client={client}>
        <AppContext.Provider value={{userName, setUserName}}> 
          <Router>
            <Navbar />
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/todo' element={<Todo />} />
              <Route path='/home' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/cat' element={<Catfact />} />
              <Route path='/cat2' element={<Catfact2 />} />
              <Route path='/form' element={<Form />} />
              <Route path='*' element={<h1>PAGE NOT FOUND MF</h1>} />
            </Routes>
          </Router>
        </AppContext.Provider>
      </QueryClientProvider>
    </div>
  );
  }

export default App;
