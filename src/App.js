import './App.css';
import ExperiencePage from './pages/ExperiencePage';

function App() {
  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="bg-white h-5/6 w-5/6 rounded-3xl shadow-2xl flex flex-row">


        <div className="bg-gray-300 h-full rounded-l-3xl w-1/4 flex justify-center flex-col items-center">
          <div className="p-16 w-5 h-5 rounded-full bg-white">Avatar/Emoji</div>
          <div>about me</div>
          <div>work experience</div>

        </div>

        <div className="w-3/4 h-full p-10 overflow-y-auto">
          <ExperiencePage />

        </div>

      </div>
    </div>
  );
}

export default App;
