
'use client'
import { useRef, useState, useEffect, } from "react"
import { Button } from "@/components/ui/button"

export default function Component() {
    let [value, setValue] = useState(String)
    const [changeValue, setChangeValue] = useState(false)
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    useEffect(() => {
        setValue(value)
        console.log(value)
    }, [changeValue])
    const func = [function add(a: number, b: number){
        return a + b;
    },
    function subtract(a: number, b: number){
        return a - b
    },
    function multiply(a: number, b: number){
        return a * b
    },
    function divide(a: number, b: number){
        return a / b
    }
        ]

    function calculate(){
         
    }
    function addValue(number: number): void{
      setValue(value + number + '')
    }
    function clickUpdateValue(){
        setChangeValue(!changeValue);
    }
    function remove(varieble: string, ){
    let chars = varieble.split("");
    chars.pop();
    console.log(chars)
    const modifiedString = chars.join('');
    varieble == modifiedString;
    return (varieble)
    setChangeValue(!changeValue)
    }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <div className="bg-card rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="bg-card-foreground rounded-md p-4 mb-4">
          <input
            type="text"
            className="bg-transparent text-right text-2xl font-bold text-white w-full focus:outline-none"
            readOnly
            value={value}
          />
        </div>
        <div className="grid grid-cols-4 gap-3">
          <Button variant="outline" className="text-2xl font-bold" onClick={() => addValue(7)}>
            7
          </Button>
          <Button variant="outline" className="text-2xl font-bold" onClick={() => addValue(8)}>
            8
          </Button>
          <Button variant="outline" className="text-2xl font-bold" onClick={() => addValue(9)}>
            9
          </Button>
          <Button variant="outline" className="text-2xl font-bold text-primary">
            /
          </Button>
          <Button variant="outline" className="text-2xl font-bold" onClick={() => addValue(4)}>
            4
          </Button>
          <Button variant="outline" className="text-2xl font-bold" onClick={() => addValue(5)}>
            5
          </Button>
          <Button variant="outline" className="text-2xl font-bold" onClick={() => addValue(6)}>
            6
          </Button>
          <Button variant="outline" className="text-2xl font-bold text-primary">
            *
          </Button>
          <Button variant="outline" className="text-2xl font-bold" onClick={() => addValue(1)}>
            1
          </Button>
          <Button variant="outline" className="text-2xl font-bold" onClick={() => addValue(2)}>
            2
          </Button>
          <Button variant="outline" className="text-2xl font-bold" onClick={() => addValue(3)}>
            3
          </Button>
          <Button variant="outline" className="text-2xl font-bold text-primary">
            -
          </Button>
          <Button variant="outline" className="text-2xl font-bold" onClick={() => addValue(0)}>
            0
          </Button>
          <Button variant="outline" className="text-2xl col-span-2 font-bold text-primary">
            +
          </Button>
          <Button variant="outline" className="text-2xl font-bold">
            .
          </Button>
          <Button className="col-span-2" onClick={clickUpdateValue}>calculate</Button>
          <Button className="col-span-2" onClick={() => remove(value)}>{"<="}</Button>
        </div>
      </div>
    </div>
  )
}

