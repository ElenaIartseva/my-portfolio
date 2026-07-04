import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const handleToggle = e => {
    changeLanguage(e.target.checked ? 'ru' : 'en');
  };

  return (
    <div className='languageSwitcher'>
      <input
        type='checkbox'
        id='filter'
        checked={currentLanguage === 'ru'}
        onChange={handleToggle}
      />
      <label htmlFor='filter' className='switch' aria-label='Toggle Filter' />
      <div className='language'>
        <span
          className={
            currentLanguage === 'en'
              ? 'language__option active'
              : 'language__option'
          }
          onClick={() => changeLanguage('en')}
        >
          EN
        </span>
        <span
          className={
            currentLanguage === 'ru'
              ? 'language__option active'
              : 'language__option'
          }
          onClick={() => changeLanguage('ru')}
        >
          RU
        </span>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
