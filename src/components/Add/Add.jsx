import {useState} from "react";

function Add({addItems}) {
    const [roll,setRoll] = useState('');
    const [name,setName] = useState('');
    const [location,setLocation] = useState('');
    const [cgpa,setCgpa] = useState('')

    console.log(roll,name,location,cgpa);
    function handleSubmit(e){
        e.preventDefault();

        const newItem = {roll,name,location,cgpa};
        addItems(newItem);

        setRoll('');
        setName('');
        setLocation('');
        setCgpa('');
    }
    return(
        <form onSubmit={handleSubmit}>
            <br /> <br /> <br />
            <h2>Add Items</h2>
            <input type="number" placeholder="roll" value={roll} onChange={(e) => setRoll(e.target.value)}/>
            <br /><br />
            <input type="text" placeholder="Name" value={name}  onChange={(e) => setName(e.target.value)} />
            <br /><br />
            <input type="text" placeholder="location" value={location} onChange={(e) => setLocation(e.target.value)} />
            <br /><br />
            <input type="number" placeholder="CGPA" value={cgpa} onChange={(e) => setCgpa(e.target.value)} />
            <br /><br />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Add;