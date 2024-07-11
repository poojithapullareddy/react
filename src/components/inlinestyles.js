// import React from 'react'

// export default function inlinestyles() {
//   const  heading={
//         color: 'blue',
//         fontSize: '20px',
//         margin:'10px'

//     }
//     const paragrap={
//         color: 'red',
//         fontSize: '10px',
//     }
//   return (
//     <div>
//         <h1 style={heading}>hi All</h1>
//         <p style={paragrap}>
//             this is paragraph
//         </p>
//     </div>
//   )
// }

import React from 'react';
import styles from './ExampleComponent.module.css';

export default function ExampleComponent() {
    return (
        <div>
            <h1 className={styles.heading}>CSS Module Example</h1>
            <p className={styles.paragraph}>This is a paragraph styled using CSS Modules.</p>
        </div>
    );
}


