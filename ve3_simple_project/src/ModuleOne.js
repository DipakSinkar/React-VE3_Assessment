import React, { useState } from 'react';
import './styles.css';
import image1 from './images/image7.png';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

function ModuleOne() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  
  
  
  };

  return (
    
    <div className="container">
        
        <div className="header"style={{ padding: '10px' }}><h3>Module One</h3></div>
        
      <div className="tabs">
        <button
          className={activeTab === 1 ? '' : 'active'}
          onClick={() => handleTabClick(1)}
        >
          Tab 1
        </button>
        <button
          className={activeTab === 2 ? '' : 'active'}
          onClick={() => handleTabClick(2)}
        >
          Tab 2
        </button>
        <button
          className={activeTab === 3 ? '' : 'active'}
          onClick={() => handleTabClick(3)}
        >
          Tab 3
        </button>
      </div>
      <div className="content">
        <div className={`tab-content ${activeTab === 1 ? 'active' : ''}`}>
          <img src={image1} alt="Tab 1" width="300px" height="300px" />
          <p style={{ padding: '10px' }}searchable="true"><h2>Tab 1 Information</h2>Nunc vel lacinia nibh. Sed vitae elementum tortor. Fusce
                sem magna, pharetra vel cursus sed, egestas gravida sem.
                Nam ullamcorper diam a cursus placerat. Integer consequat
                maximus diam, ut bibendum nisi dapibus et. Vestibulum
                vitae maximus dolor. Suspendisse lacinia non urna at
                dignissim. Ut neque massa, viverra ut arcu eu, ultricies.</p>
        </div>
        <div className={`tab-content ${activeTab === 2 ? 'active' : ''}`}>
          <img src={image2} alt="Tab 2" width="300px" height="300px" />
          <p style={{ padding: '10px' }}searchable="true"><h2>Tab 2 Information</h2>Nunc vel lacinia nibh. Sed vitae elementum tortor. Fusce
            sem magna, pharetra vel cursus sed, egestas gravida sem.
            Nam ullamcorper diam a cursus placerat. Integer consequat
            maximus diam, ut bibendum nisi dapibus et. Vestibulum
            vitae maximus dolor. Suspendisse lacinia non urna at
            dignissim. Ut neque massa, viverra ut arcu eu, ultricies

            efficitur neque.</p>
        </div>
        <div className={`tab-content ${activeTab === 3 ? 'active' : ''}`}>
          <img src={image3} alt="Tab 3" width="300px" height="300px" />
          <p style={{ padding: '10px' }}searchable="true"><h2>Tab 3 Information</h2>Nunc vel lacinia nibh. Sed vitae elementum tortor. Fusce
            sem magna, pharetra vel cursus sed, egestas gravida sem.
            Nam ullamcorper diam a cursus placerat. Integer consequat
            maximus diam, ut bibendum nisi dapibus et. Vestibulum
            vitae maximus dolor. Suspendisse lacinia non urna at
            dignissim. Ut neque massa, viverra ut arcu eu, ultricies

            efficitur neque.</p>
        </div>
        <div className="nav">
  <a href="/">
    <FontAwesomeIcon icon={faHome} />
  </a>
</div>

      </div>
      

    </div>
  );
}

export default ModuleOne;