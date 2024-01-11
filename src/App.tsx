import Login from "@components/pages/Login";
import Dashboard from "@components/pages/Dashboard";
import LayoutDefault from "@components/layout/LayoutDefault";
import { Routes, Route } from "react-router-dom";


// import './App.css'

function App() {
  return (
    <LayoutDefault>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Dashboard />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </LayoutDefault>
  );
}

/*function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container py-4 px-3 mx-auto">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hello,  Vite + Bootstrap + React</h1>
      <div className="card">
        <button className="btn btn-primary" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </div>
    </>
  )
}*/

export default App;