import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguagePopUp.css';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिन्दी' },
  // Add more languages as needed
];

const LanguagePopup = ({ isOpen, onClose, onLanguageSelect }) => {
  const { t } = useTranslation();

  const handleLanguageSelect = (code) => {
    onLanguageSelect(code);
    onClose();
  };

  return (
    <div className={`language-popup ${isOpen ? 'open' : ''}`}>
      <div className="language-popup-content">
        <div className="language-popup-header">
          <span>{t('Select Language')}</span>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="language-list">
          {languages.map((lang) => (
            <div
              key={lang.code}
              className="language-item"
              onClick={() => handleLanguageSelect(lang.code)}
            >
              {lang.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguagePopup;
