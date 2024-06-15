import './App.css';
import { SignUp, Login, Homepage, RecoveryPassword } from './pages';
import {Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import Profile from './pages/Profile';
import About from './pages/AboutUs';
import ChangeProfile from './pages/ChangeProfile';
import EditImage from './pages/EditImage';
import EditEmail from './pages/EditEmail';
import EditAddress from './pages/EditAddress';
import EditPhone from './pages/EditPhone';
import Contacts from './pages/Contacts';
import CreateSpot from './pages/CreateSpot';

function App() {

  const [token, setToken] = useState(false)

  if (token) {
    sessionStorage.setItem('token', JSON.stringify(token))
  }

  /**
 * useEffect - Hook do React que executa um efeito colateral quando o componente é montado.
 *
 * Este useEffect verifica se há um token de autenticação armazenado no sessionStorage quando o componente é montado.
 * Se um token for encontrado, ele é analisado de volta para um objeto JavaScript e armazenado no estado local do componente usando setToken.
 *
 * @returns {void} - Este hook não retorna um valor. Ele apenas executa a lógica descrita quando o componente é montado.
 *
 * Dependências: Este useEffect é executado apenas uma vez após a montagem do componente, pois o array de dependências está vazio ([]).
 */
  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
  }, [])
  return (
    <div className="App">
      {/* Cria a lógica de roteamento do projeto */}
      <Routes>
        <Route path={'/signup'} element={<SignUp/>}/>
        <Route path={'/'} element={<Login setToken={setToken}/>}/>
        <Route path={'/recovery-password'} element={<RecoveryPassword/>}/>
        <Route path={'/profile'} element={<Profile setToken={setToken}/>}/>
        <Route path={'/edit-profile'} element={<ChangeProfile setToken={setToken}/>}/>
        <Route path={'/edit-image'} element={<EditImage/>} setToken={setToken}/>
        <Route path={'/edit-email'} element={<EditEmail/>} setToken={setToken} />
        <Route path={'/edit-address'} element={<EditAddress/>} setToken={setToken}/>
        <Route path={'/edit-phone'} element={<EditPhone/>} setToken={setToken}/>
        <Route path={'/about-us'} element={<About/>} setToken={setToken}/>
        <Route path={'/contacts'} element={<Contacts/>} setToken={setToken} />
        <Route path={'/create-spot'} element={<CreateSpot/>} setToken={setToken}/>
        {token? <Route path={'/homepage'} element={<Homepage token={token}/>}/>: ""}
      </Routes>      
    </div>
  );
}

export default App;
