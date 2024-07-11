import React, { forwardRef } from 'react';

const Myclassrefexample = forwardRef((props, ref) => {
    return (
        <div>
            <input ref={ref} type="text" />
        </div>
    );
});

export default Myclassrefexample;