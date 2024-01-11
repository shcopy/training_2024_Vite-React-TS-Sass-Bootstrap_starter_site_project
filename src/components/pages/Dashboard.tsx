import { useState } from 'react'
import reactLogo from '@assets/images/react.svg'
import viteLogo from '/vite.svg'

function Dashboard() {
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
      <h1 class="fs-1">Hello,  Vite + Bootstrap + React</h1>
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

      <h1 className="fs-5 font-noto-tc-sans text-primary">我是 Main</h1>
        <button type="button" className="btn btn-primary">Primary</button>
        <button type="button" className="btn btn-secondary">Secondary</button>
        <button type="button" className="btn btn-success">Success</button>
        <button type="button" className="btn btn-danger">Danger</button>
        <button type="button" className="btn btn-warning">Warning</button>
        <button type="button" className="btn btn-info">Info</button>
        <button type="button" className="btn btn-light">Light</button>
        <button type="button" className="btn btn-dark">Dark</button>

        <button type="button" className="btn btn-link">Link</button>

        <span class="badge rounded-pill text-bg-primary">Primary</span>
        <span class="badge rounded-pill text-bg-secondary">Secondary</span>
        <span class="badge rounded-pill text-bg-success">Success</span>
        <span class="badge rounded-pill text-bg-danger">Danger</span>
        <span class="badge rounded-pill text-bg-warning">Warning</span>
        <span class="badge rounded-pill text-bg-info">Info</span>
        <span class="badge rounded-pill text-bg-light">Light</span>
        <span class="badge rounded-pill text-bg-dark">Dark</span>

      </div>
    </>
  );
}

export default Dashboard;
