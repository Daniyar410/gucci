import React, { useState } from 'react';
import './TabsWrap.scss';

const TabsWrap = () => {
  // Состояние для хранения активной вкладки
  const [activeTab, setActiveTab] = useState('tab1');

  // Функция для смены вкладки
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section>
      <div className="container">
        <div className="tabs__wrapper">
          {/* Список вкладок */}
          <div className="tabs">
            <button
              className={`tab-button ${activeTab === 'tab1' ? 'active' : ''}`}
              onClick={() => handleTabClick('tab1')}
            >
              Вкладка 1
            </button>
            <button
              className={`tab-button ${activeTab === 'tab2' ? 'active' : ''}`}
              onClick={() => handleTabClick('tab2')}
            >
              Вкладка 2
            </button>
            <button
              className={`tab-button ${activeTab === 'tab3' ? 'active' : ''}`}
              onClick={() => handleTabClick('tab3')}
            >
              Вкладка 3
            </button>
          </div>

          {/* Контент для вкладки 1 */}
          <div className={`tab-content ${activeTab === 'tab1' ? 'active' : ''}`}>
            <h3>Контент для Вкладки 1</h3>
            <p>Это описание или информация для первой вкладки.</p>
          </div>

          {/* Контент для вкладки 2 */}
          <div className={`tab-content ${activeTab === 'tab2' ? 'active' : ''}`}>
            <h3>Контент для Вкладки 2</h3>
            <p>Это описание или информация для второй вкладки.</p>
          </div>

          {/* Контент для вкладки 3 */}
          <div className={`tab-content ${activeTab === 'tab3' ? 'active' : ''}`}>
            <h3>Контент для Вкладки 3</h3>
            <p>Это описание или информация для третьей вкладки.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabsWrap;
