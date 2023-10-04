import React, { useState }  from 'react'
import './Animation.css'

const Animation = () => {

    const [activeButton, setActiveButton] = useState('home-clicked');

    const handleButtonClick = (className) => {
        setActiveButton(className);
    };

    return (
        <div className='relative'>

            <div className='absolute'>

                <button className={`categories home-head ${
                        activeButton === 'home-clicked' ? 'clicked' : ''
                    }`}
                    onClick={() => handleButtonClick('home-clicked')}
                >
                    Home
                </button>

                <button className={`categories events-head ${
                        activeButton === 'events-clicked' ? 'clicked' : ''
                    }`}
                    onClick={() => handleButtonClick('events-clicked')}
                >
                    Events
                </button>

                <button className={`categories team-head ${
                        activeButton === 'team-clicked' ? 'clicked' : ''
                    }`}
                    onClick={() => handleButtonClick('team-clicked')}
                >
                    Our Team
                </button>

                <button className={`categories what-head ${
                        activeButton === 'what-clicked' ? 'clicked' : ''
                    }`}
                    onClick={() => handleButtonClick('what-clicked')}
                >
                    What we do
                </button>


                
                <div className={`outer-circle-pointer ${activeButton || ''}`}></div>
                
                <div class="path">                    
                    <div class="outer-circle"></div>
                    <div class="outer-circle2"></div> 
                </div>


                    
                <div className={`semi circle ${activeButton || ''}`}>
                    <div class={`semi2 ${activeButton || ''}`}></div>
                </div>

            </div>

            
            
        </div>
    )
}

export default Animation