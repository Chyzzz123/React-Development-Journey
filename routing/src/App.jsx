import Day1Component from "./components/Day1Component";
function App() { // the "function App()" defines a functional components

  return ( // the "return" statement defines what the component will rended
    <div>
      <Day1Component name="Chyyan" age={21} />
      <Day1Component name="Edward" age={18} />
      <Day1Component name="Cacnio" age={32} />
    </div>
  )
}

export default App // the "export default App" allows this component to be imported elsewhere
