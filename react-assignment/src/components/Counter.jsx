import {React, useState} from 'react';
function Counter() {
    const [count, setCount] = useState(0);
      
    return (
            <>
                <div className="max-w-md mt-3 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
                <h2 className="text-xl font-semibold">Counter: {count}</h2>
                    <div>
                        <button
                            className="bg-green-500 text-white px-6 py-2 mr-2.5 rounded-md mt-2 hover:bg-green-600"
                            onClick={() => setCount(count + 1)}>
                            Increment
                        </button>
                        <button
                            className="bg-green-500 text-white px-6 py-2 mr-2 rounded-md hover:bg-red-600"
                            onClick={() => setCount(count - 1)}>
                            Decrement
                        </button>
                        <button
                            className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-gray-600"
                            onClick={() => setCount(0)}>
                            Reset
                        </button>
                    </div>
                </div>
            </>
    );    
}

export default Counter;