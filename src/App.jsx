function App() {
  return (
    <div data-theme="night" className="min-h-screen bg-gradient-to-b from-base-100 to-base-300">
      <div className="flex justify-center items-center min-h-screen">
        <div className="relative glass w-96 h-96   rounded-full hover:border-none flex justify-center items-center text-center p-5 shadow-xl">
          <h2 className="text-8xl ">17:00</h2>
        </div>
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="btn m-1">Hover</label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
