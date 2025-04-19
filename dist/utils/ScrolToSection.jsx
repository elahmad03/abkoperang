// utils/scrollToSection.js
import { useNavigate } from 'react-router-dom';

export const scrollToSection = (id, navigate, currentPath) => {
  if (currentPath === '/') {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    navigate(`/?scrollTo=${id}`);
  }
};
