import React from 'react';
import AboutUs from '../components/AboutUs';

function Home(props) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome to Employee Trip Manager</h1>
      <p className="text-gray-600">Use the navigation menu to manage employees, trips, and drivers.</p>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <AboutUs name={props}></AboutUs>
    </div>
  );
}

export default Home;
