import { Button } from './Button';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader';
import { Modal } from './Modal';
import { Searchbar } from './Searchbar';
import { useState, useEffect } from 'react';
import api from '../api/api';

export const App = () => {
  const [images, setImages] = useState([]);
  const [searchStr, setSearchStr] = useState('');
  const [isLoader, setIsLoader] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [isShowModal, setIsShowModal] = useState(false);
  const [srcModal, setSrcModal] = useState('');
  const [isLoadMore, setIsLoadMore] = useState(false);

  useEffect(() => {}, [images]);

  useEffect(() => {
    if (searchStr)
      api.getSearch(searchStr, page).then(data => {
        setImages(prev => [...prev, ...data.hits]);
        setIsLoader(false);
        setIsLoadMore(page < Math.ceil(data.totalHits / 12));
      });
  }, [page, searchStr]);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const handleShowModal = e => {
    setIsShowModal(true);
    setSrcModal(e);
  };

  const handleSearch = searchInput => {
    setIsLoader(true);
    setSearchStr(searchInput);
    setPage(1);
    setImages([]);
  };

  const handleCloseModal = e => {
    setIsShowModal(false);
  };

  return (
    <>
      {/* Компонент приймає один проп onSubmit – функцію для передачі 
        значення інпута під час сабміту форми. */}
      <Searchbar onSubmit={handleSearch} />
      {images.length > 0 && (
        <ImageGallery images={images} showModal={handleShowModal} />
      )}
      {isLoader && <Loader />}
      {isLoadMore && <Button onLoadMore={handleLoadMore} />}

      {isShowModal && <Modal imgURL={srcModal} keyClose={handleCloseModal} />}
    </>
  );
};
