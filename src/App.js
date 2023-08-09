import {useState} from 'react';
import AnimalShow from './AnimalShow';
import './App.css'

function getRandomAnimal(){
    const animals = ["bird", "cat", "dog", "gator", "horse"];

    return animals[Math.floor(Math.random() * animals.length)];
}

function App(){
    const[animals, setAnimals] = useState([]);

    const renderedAnimals= animals.map((animal, index)=>{
            return <AnimalShow type={animal}  key={index}></AnimalShow>
        }
    );

    const handleClick=()=>{
        //aşağıdaki kod bununla aynı şeyi yapıyor ama setAnimals kullanmadan state'e müdahale etmemeliyi. animals.push(getRandomAnimal())
        setAnimals([...animals, getRandomAnimal()])
    }

    return(
        <div className='app'>
            <button onClick={handleClick}> Add Animal </button>
            <div className='animal-list'>{renderedAnimals}</div>
        </div>
    )
}

export default App;