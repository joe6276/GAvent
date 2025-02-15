import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';

function App() {
  return (
    <>
      <header>
        <main id="logo-img">
          <img src={logo} />
        </main>
        <h1>Learn & Master GitHub Actions</h1>

       {/* comment */}

      </header>
      <MainContent />
    </>
  );
}

export default App;
