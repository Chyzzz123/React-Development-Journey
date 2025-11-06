
function App() { // the "function App()" defines a functional components

  const name = "Chyyan";
  const x = 5;
  const y = 3;

  return ( // the "return" statement defines what the component will rended
    <div>
      <h1>Hello {name}</h1>
      <h1>the sum is {x + y}</h1>
    </div>
  )
}

export default App // the "export default App" allows this component to be imported elsewhere
