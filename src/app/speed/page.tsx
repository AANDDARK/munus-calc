'use client'
import React, { useEffect } from 'react';
import Select from 'react-select';
import { Button } from "@/components/ui/button";
import { useState } from "react";
import '@/style/font-style.css'
export default function indexSpeed(){
    const [reset, setReset] = useState("=>>")
    const [first, setFirst] = useState(0);
    const [speed, setSpeed] = useState(Number);
    const [distance, setDistance] = useState(Number);
    const [Time, setTime] = useState(Number);
    let [whtChange, setChange] = useState()
    const options = [
        { value: 'speed', label: 'Speed' },
        { value: 'distance', label: 'Distance' },
        { value: 'time', label: 'Time' },
      ];
      const handleReset = () => {
            setDistance(0);
            setSpeed(0);
            setTime(0);
      }
    const handleSelectChange = (selectedOption: any) => {
        setChange(selectedOption.value);
        console.log(whtChange)
    };
    const handleCalculate = () =>{
        if(whtChange == "speed"){
            let result = distance / Time;
            setSpeed(result)
        };
        if(whtChange == "distance"){
            let result = speed * Time;
            setDistance(result)
        };
        if(whtChange == "time"){
            let result = distance / speed;
            setTime(result);
        };
    };
    const handleAdd = (value: any) => {
        if(whtChange == "speed" && first == 0){
            setDistance(value)
            setFirst(1)
        }
        if(whtChange == "speed" && first == 1){
            setDistance(distance + value)
        }
        if(whtChange == "speed" && first == 2){
            setTime(value)
            setFirst(3)
        }
        if(whtChange == "speed" && first == 3){
            setTime(Time + value)
        }
        if(whtChange == "distance" && first == 0){
            setSpeed(value)
            setFirst(1)
        }
        if(whtChange == "distance" && first == 1){
            setSpeed(speed + value)
        }
        if(whtChange == "distance" && first == 2){
            setTime(value)
            setFirst(3)
        }
        if(whtChange == "distance" && first == 3){
            setTime(Time + value)
        }
        if(whtChange == "time" && first == 0){
            setSpeed(value)
            setFirst(1)
        }
        if(whtChange == "time" && first == 1){
            setSpeed(speed + value)
        }
        if(whtChange == "time" && first == 2){
            setDistance(value)
            setFirst(3)
        }
        if(whtChange == "time" && first == 3){
            setDistance(distance + value)
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
    
    return (<>
    <div className="flex flex-col items-center justify-center h-screen bg-background">
        <div className="bg-card rounded-lg shadow-lg p-6 w-full max-w-md mt-2">
        <div className="combobox-container">
      <Select
        placeholder="what get"
        options={options}
        className="basic-single"
        classNamePrefix="select"
        onChange={handleSelectChange}
      />
    </div>
        <div className="bg-card-foreground rounded-md p-4 mb-4 text-white">
            <div className="number-spec flex flex-col">
                <h1>S = {speed}km/h</h1>
                <h1>D = {distance}km</h1>
                <h1>T = {Time}h</h1>
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
                    <Button variant="outline" className="text-2xl font-bold text-primary" onClick={() => handleAdd('-')}>-</Button>
                    <Button variant="outline" className="text-2xl font-bold" onClick={() => handleAdd('0')}>0</Button>
                    <Button variant="outline" className="text-2xl col-span-2 font-bold text-primary" onClick={() => handleAdd('+')}>+</Button>
                    <Button variant="outline" className="text-2xl font-bold" onClick={() => handleAdd('.')}>.</Button>
                    <Button className="col-span-2" onClick={() => handleSet()}>{reset}</Button>
                    <Button className="col-span-2">{"<="}</Button>
                </div>
    </div>
</div>
    </>)
}


