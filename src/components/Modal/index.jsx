import { useEffect } from 'react';

export const Modal = ({ imgURL, keyClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') keyClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [keyClose]);

  const handleClick = e => {
    if (e.target === e.currentTarget) keyClose();
  };

  return (
    <div className="overlay" onClick={handleClick}>
      <div className="modal">
        <img src={imgURL} alt="Text" />
      </div>
    </div>
  );
};
