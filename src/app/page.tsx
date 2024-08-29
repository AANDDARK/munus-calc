'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useRef, useState } from "react"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';

export default function Index(){
  let [first, setFirst] = useState(0);
  const [value, setValue] = useState<string>('');
  const [changeValue, setChangeValue] = useState<boolean>(false);  
  const removeButtonRef = useRef(null);
  const [reverse, setReverse] = useState(false);
  const handleClear = async() => {
    setValue("")
    setReverse(!reverse); 
        await animationHandleClick(); 
        await new Promise(resolve => setTimeout(resolve, 10)); 
        await reverseAnimationHandleClick(); 
  }
  useEffect(() => {
    setValue(value);
}, [changeValue]);
  const handleAdd = (newValue: any) => {
    if(first == 0){
      setValue(newValue);
      setFirst(1)
    } else{
      setValue(value + newValue);
    }
  }
  const handleCalculate = (value: string) =>{
    const result = eval(value);
    setValue(result);
    setChangeValue(!changeValue)
  }
  const handleRemove = (prevValue: any) => {
    setValue(prevValue => prevValue.slice(0, -1));
  }
  const animationHandleClick = () => {
    return new Promise((resolve) => {
      gsap.to(removeButtonRef.current, {
        x: '20vw',
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
        onComplete: resolve,
        transformOrigin: 'center center',
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
        onComplete: resolve,
        transformOrigin: 'center center',
      });
    });
  };
  useEffect(() => {
    if (reverse) {
      handleClear();
    }
  }, [reverse])
  return(<>

  <div className="flex flex-col items-center justify-center h-screen bg-background">
    <div className='pb-36 drop-shadow-lg text-slate-950'>
      <Input className='bg-zinc-300 text-slate-950'/>
    </div>
            <div className="bg-card rounded-lg shadow-lg p-6 w-full max-w-md mt-2">
                <div className="flex justify-start place-content-end pb-2 ">
                <Button variant="outline" onClick={() => handleClear()} ref={removeButtonRef}><FontAwesomeIcon icon={faArrowRight}  /></Button>
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
                    <Button className="col-span-2" onClick={() => handleCalculate(value)}>Calculate</Button>
                    <Button className="col-span-2" onClick={() => handleRemove(value)}>{"<="}</Button>
                </div>
            </div>
        </div>
        </>)
}