import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Following from './Pages/Follow';
import Answer from './Pages/AnswerPage';
import Notification from './Pages/Notification';
import SidebarOptionDetail from './Pages/SidebarOptionsPage';
import UserGroupPage from './Pages/UserGroupPage';
import Error from "./components/Error";
import './App.css';
import QuoraHeader from './components/QuoraHeader';
import './css/Quora.css';

function App() {
  return (
    <div className="App">
    <QuoraHeader />
        <Routes>
         <Route path='/' element={<Home />}></Route>
         <Route path='/answer' element={<Answer/>}></Route>
         <Route path='/follow' element={<Following/>}></Route>
         <Route path='/notification' element={<Notification/>}></Route>
         <Route path='/interests' element={<SidebarOptionDetail/>}></Route>
         <Route path='/spaces' element={<UserGroupPage/>}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
    </div>
  );
}

export default App;
