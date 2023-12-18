import React, {useState } from "react";
import '../styles/App.css';

let arr = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"]

const App = () => {
    const[name1, setName1] = useState("");
    const[name2, setName2] = useState("");
    const[relationship, setRelationship] = useState("")
    const[btnClicked, setBtnClicked] = useState(false);

    console.log(name1, name2)

    function calulateRelationship(e){
        e.preventDefault()

        if(name1.trim()==="" || name2.trim("")===""){
            setBtnClicked(false)
            setRelationship("Please Enter valid input")
            return
        }

        let str1=name1
        let str2 = name2

        for(let i of str1){
            if(str2.includes(i)){
                str1 = str1.replace(i, "")
                str2 =str2.replace(i,"")
            }
        }
        setName1(str1)
        setName2(str2)
        // setBtnClicked(true)
        setRelationship(arr[(str1.length + str2.length)%6])


    }
    return (
        <div id="main">
            {/* Do not remove the main div */}
            <input type="text" data-testid="input1" placeholder="Enter First Name" name="name1" onChange={(e)=> setName1(e.target.value)} value={name1}/>
            <input type="text" data-testid="input2" placeholder="Enter Second Name" name="name2" onChange={(e)=>setName2(e.target.value)} value={name2}/>
            <button onClick={calulateRelationship} data-testid="calculate_relationship" type="submit">Calculate Relationship Future</button>
            <button data-testid="clear" type="reset" onClick={()=>{
                setName1("")
                setName2("")
                setBtnClicked(false)
                setRelationship("")
            }}>Clear</button>
            <h3 data-testid="answer">{
                    // btnClicked && arr[(name1.length+ name2.length)%6]
                     relationship
            }</h3>
        </div>
    )
}


export default App;
