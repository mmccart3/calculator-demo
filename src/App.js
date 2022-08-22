import './App.css';
import {useState} from "react"
import calcButtons from "./buttons.json"
import {evaluate} from "mathjs"
// import Setsum2 from "./modules/Setsumfunc"



const App = () => {
  const [mySum,setMySum] = useState([0])
  let tmpSum = [0]
  let tmp2Sum = 0
  let tmp3Sum = 0

  
  function handleButton (val) {
    if(val==="clear") {setMySum(0)}
    else if (val === "="){
      tmpSum = mySum.join("")
      tmp2Sum = evaluate(tmpSum)
      tmp3Sum = Math.floor(tmp2Sum*10000000)/10000000
     // limits number of decimal places displayed
      setMySum([tmp3Sum])}
    else {
        tmpSum = [...mySum, val]
        // spread operator needed to take a copy of the data not just a reference
        if ((tmpSum[0] === 0) && (tmpSum[1] !==".")) {tmpSum.shift()}
        // decimal point check added to all decimal numbers less than one
        setMySum(tmpSum)
        }
        
    }
  

  
  
  return (
    <div className="App">
    <h1>Calculator</h1>

      <div className="calcWrapper">
        <div className="screen">{mySum}</div>
        <div className="buttons">
        {calcButtons.map((item, index) => (
          <button className={`btn ${item.style}`} key={index} onClick={() => handleButton(item.val)}> {item.alias ? item.alias: item.val}
          </button>
        ))}
      </div>
    </div>
  </div>
  )
}        

export default App;
