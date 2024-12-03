import './App.css';
import ColorList from "./components/ColorList"
import EvenNumbers from "./components/EvenNumbers"
import UserList from "./components/UserList"
import UserInfo from "./components/UserInfo";
import Card from "./components/Card";
import { UserInfoProps } from './models/UserInfoProps.model';


function App() {
  const user1: UserInfoProps = {
    name: "Paul",
    age: 15,
    email: "example@gmail.com"
  }

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
      <UserInfo {...user1} />
      <Card>
        <button>A button: example of dynamic content placement as children prop inside of the Card function component</button>
      </Card>
      <Card>
        <span>A span: example of dynamic content placement as children prop inside of the Card function component</span>
      </Card>
      <Card>
        <p>A paragraph: example of dynamic content placement as children prop inside of the Card function component</p>
      </Card>


    </div>
  );
}

export default App;
