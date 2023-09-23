import React, { useState, useEffect } from 'react';
import Ride from './components/Ride';
import Employee from './components/Employee';
import Customer from './components/Customer';
import './App.css';

function App() {
  const [customerCount, setCustomerCount] = useState(0);
  const [employeeCount, setEmployeeCount] = useState(0);
  const [profits, setProfits] = useState(0);
  const [ridePopularityFactors, setRidePopularityFactors] = useState({
    "Space Mountain": 1.2,
    "Pirates of the Caribbean": 1.0,
    "Haunted Mansion": 1.1,
    "Splash Mountain": 1.5,
    "It's a Small World": 1.0,
  });
  const [rideWaitTimes, setRideWaitTimes] = useState({
    "Space Mountain": 0,
    "Pirates of the Caribbean": 0,
    "Haunted Mansion": 0,
    "Splash Mountain": 0,
    "It's a Small World": 0,
  });

  // State for multiple ride breakdown notifications
  const [breakdownNotifications, setBreakdownNotifications] = useState([]);

  const Rides = [
    "Space Mountain",
    "Pirates of the Caribbean",
    "Haunted Mansion",
    "Splash Mountain",
    "It's a Small World"
  ];

  // Initialize the rides object with instances
  const rides = {};
  for (const rideName of Rides) {
    rides[rideName] = new Ride(rideName, 0);
  }

  const createNewCustomer = () => {
    const randomNumber = Math.floor(Math.random() * 100);

    // Determine ticket price based on age and popularity
    let ticketPrice = 0;
    if (randomNumber < 18) {
      ticketPrice = 50;
    } else if (randomNumber >= 18 && randomNumber < 50) {
      ticketPrice = 100;
    } else {
      ticketPrice = 150;
    }

    // Generate a random number of customers between 1 and 30
    const numberOfCustomers = Math.floor(Math.random() * 30) + 1;

    // Calculate total profits
    const totalProfit = ticketPrice * numberOfCustomers;

    // Update state
    setProfits(profits + totalProfit);
    setCustomerCount(customerCount + numberOfCustomers);
    updateRideWaitTimes(); // Update ride wait times when a new customer arrives
  };

  const createNewEmployee = () => {
    // Generate a random number of employees between 1 and 3
    const numberOfEmployees = Math.floor(Math.random() * 3) + 1;

    // Update employee count
    setEmployeeCount(employeeCount + numberOfEmployees);
  };

  const removeCustomer = () => {
    var removalCount;
    if (customerCount > 100 ){
      removalCount = 2;
    } else if (customerCount > 500) {
      removalCount = 4;
    }
    else if (customerCount > 1000) {
      removalCount = 6;
    }
    else if (customerCount > 2000) {
      removalCount = 8;
    }
    else if (customerCount > 5000) {
      removalCount = 10;
    }
    else if (customerCount > 10000) {
      removalCount = 40;
    }

    setCustomerCount(customerCount - removalCount);
  }


  const updateRideWaitTimes = () => {
    const updatedWaitTimes = { ...rideWaitTimes };

    for (const rideName of Rides) {
      // Calculate wait time based on popularity factor and other factors
      const popularityFactor = ridePopularityFactors[rideName];
      
      // Increase wait time based on customer count
      const customerRatio = customerCount / 100;

      
      const waitTime = Math.round(customerRatio * popularityFactor);

      // Update the wait time for the ride
      updatedWaitTimes[rideName] = waitTime;
    }

    setRideWaitTimes(updatedWaitTimes);
  };

  useEffect(() => {
    // Call the function to update ride wait times initially
    updateRideWaitTimes();

    const customerInterval = setInterval(() => {
      createNewCustomer();
    }, 500); // Simulate customers entering the park every half second

    // Simulate customers leaving the park as the day progresses
    const leaveInterval = setInterval(() => {
      if (customerCount > 0) {
        setCustomerCount(customerCount - 1);
      }
    }, 2000); // Simulate customers leaving every 2 seconds

    if (customerCount % 10 === 0) {
      createNewEmployee();
    }

    removeCustomer();


    // Simulate ride breakdowns
    

    const rideWaitTimeInterval = setInterval(() => {
      updateRideWaitTimes();
    }, 3000); // Update ride wait times every 30 seconds

    return () => {
      clearInterval(customerInterval);
      clearInterval(leaveInterval);
      clearInterval(rideWaitTimeInterval); // Clear the interval when the component unmounts
    };
  }, [customerCount]);

  return (
    <div className="App">
      <section className="customer-section">
        <p className="profits">Profits: ${profits}</p>
        <p className="customer-count">Customer Count: {customerCount}</p>
        <p>Employee Count: {employeeCount}</p>

        {Rides.map((rideName) => (
          <p key={rideName}>Wait time for {rideName}: {rideWaitTimes[rideName]} minutes</p>
        ))}
      </section>

      {/* Render multiple breakdown notifications */}
      <div className="breakdown-notifications">
        {breakdownNotifications.map((notification, index) => (
          <div key={index} className="breakdown-notification">{notification}</div>
        ))}
      </div>
    </div>
  );
}

export default App;




