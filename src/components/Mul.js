import React,{useState} from "react";
function Mul(props) {
    const [ num1, setNum1 ] = useState(0);
    const [ num2, setNum2 ] = useState(0);
    const [ result, setResult ] = useState(0);

    function mulFun() {
        setResult(num1 * num2);
    }

    return (<div>
        <h1>Multiplication of two numbers</h1>
        <input type="text" onChange={ e => setNum1(parseInt(e.target.value)) }/>
        <input type="text" onChange={ e => setNum2(parseInt(e.target.value)) } />
        <button onClick={mulFun}>Get Multiplication</button>
        <div>{result}</div>
    </div>);
}

export default Mul;