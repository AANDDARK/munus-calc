'use client'
import { Button } from "@/components/ui/button"
import Select from 'react-select';
import { Input } from "@/components/ui/input"
import '@/style/font-style.css'
import { useState } from "react"
import { time } from "console";
export default function linerImpulse(){
    const [reset, setReset] = useState("=>>")
    const [first, setFirst] = useState(0);
    let [whtChange, setChange] = useState()
    const [impulse, setImpulse] = useState(Number);
    const [mass, setMass] = useState(Number);
    const [vector, setVector] = useState(Number)
    const options = [
        { value: 'impulse', label: 'Impulse' },
        { value: 'mass', label: 'Mass' },
        { value: 'vector', label: 'Vector' },
      ];
      const handleReset = () => {
            setImpulse(0);
            setMass(0);
            setVector(0);
      }
    const handleSelectChange = (selectedOption: any) => {
        setChange(selectedOption.value);
        console.log(whtChange)
    };
    const handleCalculate = () =>{
        if(whtChange == "impulse"){
            let result = mass * vector
            setImpulse(result)
        };
        if(whtChange == "mass"){
            let result = impulse / vector;
            setMass(result)
        };
        if(whtChange == "vector"){
            let result = mass / impulse;
            setVector(result);
        };
    };
    const handleAdd = (value: any) => {
        if(whtChange == "impulse" && first == 0){
            setMass(value)
            setFirst(1)
        }
        if(whtChange == "impulse" && first == 1){
            setMass(mass + value)
        }
        if(whtChange == "impulse" && first == 2){
            setVector(value)
            setFirst(3)
        }
        if(whtChange == "impulse" && first == 3){
            setVector(vector + value)
        }
        if(whtChange == "mass" && first == 0){
            setImpulse(value)
            setFirst(1)
        }
        if(whtChange == "mass" && first == 1){
            setImpulse(impulse + value)
        }
        if(whtChange == "mass" && first == 2){
            setVector(value)
            setFirst(3)
        }
        if(whtChange == "mass" && first == 3){
            setVector(vector + value)
        }
        if(whtChange == "vector" && first == 0){
            setImpulse(value)
            setFirst(1)
        }
        if(whtChange == "vector" && first == 1){
            setImpulse(impulse + value)
        }
        if(whtChange == "vector" && first == 2){
            setMass(value)
            setFirst(3)
        }
        if(whtChange == "vector" && first == 3){
            setMass(mass + value);
        } else{
            console.log("ERROR")
        }
        }
        const handleSet = () => {
            if(first == 1){
                setFirst(2)
            }
            if(first == 3){
                setFirst(10)
                handleCalculate()
            }
            if(first == 10){
                handleReset()
            }
    };
    return (<>  <div className="flex flex-col items-center justify-center h-screen bg-background">
        <div className='pb-36 drop-shadow-lg text-slate-950'>
          <Input className='bg-zinc-300 text-slate-950'/>
        </div>
        <div className="combobox-container">
          <Select
            placeholder="what get"
            options={options}
            className="basic-single"
            classNamePrefix="select"
            onChange={handleSelectChange}
          />
          </div>
                <div className="bg-card rounded-lg shadow-lg p-6 w-full max-w-md mt-2">
                    <div className="bg-card-foreground rounded-md p-4 mb-4">
                    <div className="number-spec flex flex-col text-white number-spec">
                    <h1>P = {impulse}J</h1>
                    <h1>m = {mass}kg</h1>
                    <h1>v = {vector}m/s</h1>
                </div>
                    </div>
                    <div className="grid grid-cols-4 gap-3">
                        <Button variant="outline" className="text-2xl font-bold" onClick={() => handleAdd('7')}>7</Button>
                        <Button variant="outline" className="text-2xl font-bold" onClick={() => handleAdd('8')}>8</Button>
                        <Button variant="outline" className="text-2xl font-bold" onClick={() => handleAdd('9')}>9</Button>
                        <Button variant="outline" className="text-2xl font-bold text-primary" onClick={() => handleAdd('/')}>/</Button>
                        <Button variant="outline" className="text-2xl font-bold" onClick={() => handleAdd('4')}>4</Button>
                        <Button variant="outline" className="text-2xl font-bold" onClick={() => handleAdd('5')}>5</Button>
                        <Button variant="outline" className="text-2xl font-bold" onClick={() => handleAdd('6')}>6</Button>
                        <Button variant="outline" className="text-2xl font-bold text-primary" onClick={() => handleAdd('*')}>*</Button>
                        <Button variant="outline" className="text-2xl font-bold" onClick={() => handleAdd('1')}>1</Button>
                        <Button variant="outline" className="text-2xl font-bold" onClick={() => handleAdd('2')}>2</Button>
                        <Button variant="outline" className="text-2xl font-bold" onClick={() => handleAdd('3')}>3</Button>
                        <Button variant="outline" className="text-2xl font-bold text-primary"onClick={() => handleAdd('-')}>-</Button>
                        <Button variant="outline" className="text-2xl font-bold" onClick={() => handleAdd('0')}>0</Button>
                        <Button variant="outline" className="text-2xl col-span-2 font-bold text-primary" onClick={() => handleAdd('+')}>+</Button>
                        <Button variant="outline" className="text-2xl font-bold" onClick={() => handleAdd('.')}>.</Button>
                        <Button className="col-span-2" onClick={() => handleSet()}>{reset}</Button>
                        <Button className="col-span-2">{"<="}</Button>
                    </div>
                </div>
            </div></>)}