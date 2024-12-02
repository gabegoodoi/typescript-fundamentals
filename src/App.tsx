import './App.css';
import ColorList from "./components/ColorList"
import EvenNumbers from "./components/EvenNumbers"
import UserList from "./components/UserList"

function App() {

  const greeting: string = "Hello, Typescript";
  const numberList: number[] = [5, 10, 15];
  const calculateSum = (a: number, b: number): number => {
    return a + b
  }


  return (
    <div className="App">
      <p>Greeting: {greeting}</p>
      <p>numberList: {numberList.join(", ")}</p>
      <button 
        style={{ margin: "2px", padding: "2px" }} 
        onClick={() => console.log(calculateSum(numberList[1], numberList[2]))}
      >
        Click to calculate the sum of the last two numbers of the numberList
      </button>
      <ColorList />
      <EvenNumbers />
      <UserList />


    </div>
  );
}

export default App;
