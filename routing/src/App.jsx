import Day1Component from "./components/Day1Component";
function App() { // the "function App()" defines a functional components

  return ( // the "return" statement defines what the component will rended
    <div className="main-app-container">
      <h1>My React Development Journey: Day 1 Practice</h1>
      
      <Day1Component name="Chyyan" num1={5} num2={3} />
      
      {/* Day 2 work will go below */}
      {/* <Day2Component /> */}
    </div>
  )
}

export default App // the "export default App" allows this component to be imported elsewhere
