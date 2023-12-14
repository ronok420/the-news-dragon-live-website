import React from 'react';
import qzone1 from '../../../src/assets/qZone1.png'
import qzone2 from '../../../src/assets/qZone2.png'
import qzone3 from '../../../src/assets/qZone3.png'
import newsbg from '../../../src/assets/bg1.png'
import { Button } from 'react-bootstrap';

const Qzone = () => {
    const containerStyle = {
        position: 'relative',
        textAlign: 'center',
        color: '#fff', // Set text color
    };

    const textStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '24px', // Set text font size
    };
    return (
        <div>
            <div className='bg-secondary'>
                <h4 className='mx-4 mt-2'>Q-Zone</h4>
                <div className="text-center mt-2 mb-4">
                 
                    <img src={qzone1} alt="" />
                    <img src={qzone2} alt="" />
                    <img src={qzone3} alt="" />
                </div>

            </div>

            <div style={containerStyle}>
            <img src={newsbg} alt="" style={{ width: '100%' }} />
            <div style={textStyle}>
                <h2>Create an Amazing Newspaper</h2>
                <p><small>Discover thousands of options, easy to customize layouts, one-click to import demo and much mor.
                    </small></p>
                    <Button variant="success">Learn More</Button>

            </div>
        </div>
        </div>

    );
};

export default Qzone;