'use client'
import { Button } from "@/components/ui/button";
import { useState } from "react";
import '@/style/font-style.css'
export default function indexSpeed(){
    const [first, setFirst] = useState(0);
    const [speed, setSpeed] = useState();
    const [distance, setDistance] = useState();
    const [Time, setTime] = useState();
    const [value, setValue] = useState()
    let [whtChange, setChange] = useState("speed")
    let [when, setWhen] = useState(1)
    const handleAdd = (value: any) => {
        if(whtChange == "speed" && first == 0){
            setSpeed(value);
            setFirst(1)
        }
        if(whtChange == "speed" && first == 1){
            setSpeed(speed + value);
        }
        if(whtChange == "distance" && first == 0){
            setDistance(value);
            setFirst(1)
        }
        if(whtChange == "distance" && first == 1){
            setDistance(distance + value);
            
        }
        if(whtChange == "Time" && first == 0){
            setTime(value);
            setFirst(1)
        }
        if(whtChange == "Time" && first == 1){
            setTime(Time + value);

        }

    }

    const handleSet = () => {
        if(when == 1){
            setWhen(2);
            setFirst(0)
            setChange("distance");
        }
        if(when == 2){
            setWhen(3);
            setFirst(0)
            setChange("Time");
        }

    }
    return (<>
    <div className="flex flex-col items-center justify-center h-screen bg-background">
        <div className="bg-card rounded-lg shadow-lg p-6 w-full max-w-md mt-2">
        <div className="bg-card-foreground rounded-md p-4 mb-4 text-white">
            <div className="number-spec">
                <h1>S = {speed}</h1>
                <h1>D = {distance}</h1>
                <h1>T = {Time}</h1>
            </div>
                    <input
                        type="text"
                        className="bg-transparent text-right text-2xl font-bold text-white w-full focus:outline-none"
                        readOnly
                        
                    />
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
                    <Button className="col-span-2" onClick={() => handleSet()}>{"=>>"}</Button>
                    <Button className="col-span-2" onClick={() => handleRemove(value)}>{"<="}</Button>
                </div>
    </div>
</div>
    </>)
}