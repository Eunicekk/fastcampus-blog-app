import { useState } from 'react';

const IMAGE_1_URL =
  'https://plus.unsplash.com/premium_photo-1668136403317-1230640e4b9f?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUVBJUIwJTgwJUVDJTlEJTg0fGVufDB8fDB8fHww';
const IMAGE_2_URL =
  'https://images.unsplash.com/photo-1482015527294-7c8203fc9828?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8JUVBJUIwJTgwJUVDJTlEJTg0fGVufDB8fDB8fHww';
const IMAGE_3_URL =
  'https://images.unsplash.com/photo-1507371341162-763b5e419408?q=80&w=1478&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export default function Carousel() {
  const [activeImage, setActiveImage] = useState(1);

  return (
    <div>
      <div className="carousel">
        <ul className="carousel__slides">
          <input type="radio" name="radio-button" id="image-1" checked={activeImage === 1} readOnly />
          <li className="carousel__slide-container">
            <div className="carousel__slide-img">
              <img src={IMAGE_1_URL} alt="scenery 1" />
            </div>
            <div className="carousel__controls">
              <label className="carousel__slide-prev" onClick={() => setActiveImage(3)}>
                <span>&lsaquo;</span>
              </label>
              <label className="carousel__slide-next" onClick={() => setActiveImage(2)}>
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
          <input type="radio" name="radio-button" id="image-2" checked={activeImage === 2} readOnly />
          <li className="carousel__slide-container">
            <div className="carousel__slide-img">
              <img src={IMAGE_2_URL} alt="scenery 2" />
            </div>
            <div className="carousel__controls">
              <label className="carousel__slide-prev" onClick={() => setActiveImage(1)}>
                <span>&lsaquo;</span>
              </label>
              <label className="carousel__slide-next" onClick={() => setActiveImage(3)}>
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
          <input type="radio" name="radio-button" id="image31" checked={activeImage === 3} readOnly />
          <li className="carousel__slide-container">
            <div className="carousel__slide-img">
              <img src={IMAGE_3_URL} alt="scenery 3" />
            </div>
            <div className="carousel__controls">
              <label className="carousel__slide-prev" onClick={() => setActiveImage(2)}>
                <span>&lsaquo;</span>
              </label>
              <label className="carousel__slide-next" onClick={() => setActiveImage(1)}>
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
          <div className="carousel__dots">
            <label className="carousel__dot" onClick={() => setActiveImage(1)} id="image-dot-1" />
            <label className="carousel__dot" onClick={() => setActiveImage(2)} id="image-dot-2" />
            <label className="carousel__dot" onClick={() => setActiveImage(3)} id="image-dot-3" />
          </div>
        </ul>
      </div>
    </div>
  );
}
