import React, { useEffect, useState } from "react";

interface Item {
    id: number;
    name: string;
}

function ApiReq(): JSX.Element {
    //sets initial data to null, setData is used to change data value
    const [data, setData] = useState<Item[] | null>(null);

    useEffect(() => {
        //the function in the perameter is ran every time the state changes within the component
        fetch("http://localhost:8000/api/data")
            .then((response) => response.json())
            .then((data: Item[]) => {
                setData(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);
    //the empty list of dependancies as the second parameter to only run the function once, else the function is keep running in a infinite loop since the function causes and runs due to a change in state

    return (
        <div>
            {data ? (
                //if statement
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            ) : (
                //else statement
                <p>Loading data...</p>
            )}
        </div>
    );
}

export default ApiReq;
