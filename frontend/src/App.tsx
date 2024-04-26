import Header from "./components/header";
import Main from "./components/main";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <main className="flex flex-col h-[100vh]">
      <Header />
      <div className="flex h-full">
        <Sidebar />
        <Main />
      </div>
    </main>
  );
}

export default App;
