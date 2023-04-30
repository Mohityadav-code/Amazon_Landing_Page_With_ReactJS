import React from "react";

export default function Shop(props)

{
  return (
    <div>
      <div>
        {/* {props.items.map((item, index) => {
        return (
          <div key={index}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        )
      })} */}
        <h1>{props.name}</h1>
        <h1>{props.description}</h1>
        <h1>{props.price}</h1>
      </div>
    </div>
  );
}
