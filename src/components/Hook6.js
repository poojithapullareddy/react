import React, { useState, useEffect } from 'react';

function TimerComponent() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Set up the timer
    console.log("effect is calling")
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Cleanup function to clear the timer
    return () => {
        console.log("useeffect is unmount")
      //clearInterval(timer);
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div>
      <h1>Elapsed Time: {seconds} seconds</h1>
    </div>
  );
}

export default TimerComponent;
// import React, { useEffect } from 'react';

// function ScrollLogger() {
//   useEffect(() => {
//     const handleScroll = () => {
//       console.log('Scroll position:', window.scrollY);
//     };

//     console.log('Adding scroll event listener');
//     // Set up the event listener
//     window.addEventListener('scroll', handleScroll);

//     // Cleanup function
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       console.log('Removing scroll event listener');
//     };
//   }, []); // Empty dependency array ensures this runs only once

//   return (
//     <div style={{ height: '200vh' }}>
//       <h1>Scroll to see the effect</h1>
//     </div>
//   );
// }

// export default ScrollLogger;
