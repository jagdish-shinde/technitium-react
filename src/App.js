
import styles from './App.module.css';
import Header from './components/molecules/header/header';
import Scrollbar from './components/molecules/scrollbar/scrollbar';


function App() {

  return (
    <div className={styles.App}>
      {/* <Header/> */}
      <Scrollbar/>
  
    </div>
  );
}

export default App;
