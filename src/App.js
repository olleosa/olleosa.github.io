import './App.css';
import ExperiencePage from './pages/ExperiencePage';
import HomePage from './pages/HomePage';
import Resume from './files/Resume.pdf';
import { GitHub, Linkedin, Mail, FileText } from 'react-feather';

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";


function App() {
  return (
    <div className="bg-gray-50 h-screen flex justify-center items-center">
      
      <Router>
        <div className="bg-white h-5/6 w-5/6 rounded-3xl shadow-2xl flex flex-row">

          {/* Navigation Side bar */}
          <div className="bg-purple-200 shadow-xl rounded-l-3xl w-1/5 flex flex-col pt-16">
            <nav className="w-full">
              <ul className="m-5 space-y-1">
                <li className="w-full">
                  <NavLink exact to="/" className="inline-block w-full rounded-xl text-xl px-5 py-2 hover:bg-white" activeClassName="bg-white">Home</NavLink>
                </li>
                <li className="w-full">
                  <NavLink to="/experience" className="inline-block w-full rounded-xl text-xl px-5 py-2 hover:bg-white" activeClassName="bg-white">Work Experience</NavLink>
                </li>
              </ul>
            </nav>

            {/* Links on Side Bar*/}
            <div className="w-full text-xl rounded-xl items-end flex h-full pb-16">
              <ul className="flex flex-row ml-5">
                <li className="">
                  <a href="mailto:chen.samantha05@gmail.com" target="_blank" className="inline-block w-full rounded-xl text-xl p-2 hover:bg-white" rel="noreferrer"><Mail /></a>
                </li>

                <li className="">
                  <a href="https://ca.linkedin.com/in/samantha-chen-49a91a1a1" target="_blank" className="inline-block w-full rounded-xl text-xl p-2 hover:bg-white" rel="noreferrer"><Linkedin /></a>
                </li>

                <li className="">
                  <a href={ Resume } target="_blank" className="inline-block w-full rounded-xl text-xl p-2 hover:bg-white" rel="noreferrer"><FileText /></a>
                </li>

                <li className="">
                  <a href="https://github.com/olleosa" target="_blank" className="inline-block w-full rounded-xl text-xl p-2 hover:bg-white" rel="noreferrer"><GitHub /></a>
                </li>
              </ul>
            </div>
          </div>

          {/* Content on Right*/}
          <div className="w-4/5 h-full p-10 pt-16 overflow-y-auto">
            <Switch>
              <Route path="/experience">
                  <ExperiencePage />
              </Route>

              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </div>

        </div>
      </Router>
      

    </div>
  );
}

export default App;
