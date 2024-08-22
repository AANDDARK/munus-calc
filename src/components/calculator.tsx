'use client'
import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";



export default function Calculator() {
    const [value, setValue] = useState<string>('');
    const [changeValue, setChangeValue] = useState<boolean>(false);   
    const removeButtonRef = useRef(null)
    const [reverse, setReverse] = useState(false)
     useEffect(() => {
        setValue(value);
    }, [changeValue]);
    function add(array: string[]) {
        let numbers = array.map(Number);
        return numbers[0] + numbers[2];
    }
    function subtract(array: string[]) {
        let numbers = array.map(Number);
        return numbers[0] - numbers[2];
    }

    function multiply(array: string[]) {
        let numbers = array.map(Number);
        return numbers[0] * numbers[2];
    }

    function divide(array: string[]) {
        let numbers = array.map(Number);
        return numbers[0] / numbers[2];
    }
    const animationHandleClick = () => {
        return new Promise((resolve) => {
          gsap.to(removeButtonRef.current, {
            x: '40vw',
            opacity: 0,
            duration: 0.5,
            ease: 'power2.out',
            onComplete: resolve 
          });
        });
      };
      const reverseAnimationHandleClick = () => {
        return new Promise((resolve) => {
          gsap.to(removeButtonRef.current, {
            x: 0,
            opacity: 2,
            duration: 1,
            ease: 'power4.out',
            onComplete: resolve 
          });
        });
      };
    function calculate() {
        const calc = value.split(' ');
               
        let result;
        switch (calc[1]) {
            case '+':
                result = add(calc);
                break;
            case '-':
                result = subtract(calc);
                break;
            case '*':
                result = multiply(calc);
                break;
            case '/':
                result = divide(calc);
                break;
            default:
                return;
        }
        setValue(result.toString());
    }

    function addValue(number: number) {
        setValue(value + number.toString());
    }

    function addDo(dos: string) {
        setValue(value + ' ' + dos + ' ');
    }

    function addSymbol(symbol: string) {
        setValue(value + symbol);
    }

    function remove() {
        setValue(value.slice(0, -1));
    }
    const removeAll = async () => {
        setValue(""); 
        setReverse(!reverse); 
        await animationHandleClick(); 
        await new Promise(resolve => setTimeout(resolve, 10)); 
        await reverseAnimationHandleClick(); 
      };
    
      useEffect(() => {
        if (reverse) {
          removeAll();
        }
      }, [reverse]);
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-background">
            <div className="bg-card rounded-lg shadow-lg p-6 w-full max-w-md">
                <div className="flex justify-start place-content-end pb-2 ">
                <Button  onClick={() => removeAll()} variant="outline"  ref={removeButtonRef}><FontAwesomeIcon icon={faArrowRight}  /></Button>
                </div>
                <div className="bg-card-foreground rounded-md p-4 mb-4">
                    <input
                        type="text"
                        className="bg-transparent text-right text-2xl font-bold text-white w-full focus:outline-none"
                        readOnly
                        value={value}
                    />
                </div>
                <div className="grid grid-cols-4 gap-3">
                    <Button variant="outline" className="text-2xl font-bold" onClick={() => addValue(7)}>7</Button>
                    <Button variant="outline" className="text-2xl font-bold" onClick={() => addValue(8)}>8</Button>
                    <Button variant="outline" className="text-2xl font-bold" onClick={() => addValue(9)}>9</Button>
                    <Button variant="outline" className="text-2xl font-bold text-primary" onClick={() => addDo('/')}>/</Button>
                    <Button variant="outline" className="text-2xl font-bold" onClick={() => addValue(4)}>4</Button>
                    <Button variant="outline" className="text-2xl font-bold" onClick={() => addValue(5)}>5</Button>
                    <Button variant="outline" className="text-2xl font-bold" onClick={() => addValue(6)}>6</Button>
                    <Button variant="outline" className="text-2xl font-bold text-primary" onClick={() => addDo('*')}>*</Button>
                    <Button variant="outline" className="text-2xl font-bold" onClick={() => addValue(1)}>1</Button>
                    <Button variant="outline" className="text-2xl font-bold" onClick={() => addValue(2)}>2</Button>
                    <Button variant="outline" className="text-2xl font-bold" onClick={() => addValue(3)}>3</Button>
                    <Button variant="outline" className="text-2xl font-bold text-primary" onClick={() => addDo('-')}>-</Button>
                    <Button variant="outline" className="text-2xl font-bold" onClick={() => addValue(0)}>0</Button>
                    <Button variant="outline" className="text-2xl col-span-2 font-bold text-primary" onClick={() => addDo('+')}>+</Button>
                    <Button variant="outline" className="text-2xl font-bold" onClick={() => addSymbol('.')}>.</Button>
                    <Button className="col-span-2" onClick={calculate}>Calculate</Button>
                    <Button className="col-span-2" onClick={remove}>{"<="}</Button>
                </div>
            </div>
        </div>
    )
}
