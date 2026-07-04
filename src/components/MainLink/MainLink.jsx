import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './MainLink.css';

const MainLink = () => {
  const { t } = useTranslation();

  const textAnimation = {
    hidden: {
      y: 100,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.5
      }
    }
  };

  return (
    <motion.a
      href='https://elenaiartseva.ru'
      className='mainLink'
      target='_blank'
      rel='noopener noreferrer'
      variants={textAnimation}
      initial='hidden'
      animate='visible'
    >
      <h3 className='mainLink__text'>{t('mainLink')}</h3>
    </motion.a>
  );
};

export default MainLink;
