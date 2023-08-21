import './App.css';
import AppAdd from './AppAdd';
import AppHead from './AppHead';
import AppList from './AppList';

function App() {
  return (
    <div className='wrap'>
      <div className='container'>
        <AppHead />
        <AppList />
        <AppAdd />
      </div>
    </div>
  );
}

export default App;
