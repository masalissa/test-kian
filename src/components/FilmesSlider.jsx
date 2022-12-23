import React from 'react'

export default function FilmesSlider({film}) {
  return (
    <div className="filmesSlider col-md-6">
                  <div
    id="carouselExampleSlidesOnly"
    className="carousel slide"
    data-bs-ride="carousel"
  >
    <div className="carousel-inner border-effect-sliders">
      <div className="carousel-item active ">
        <video muted loop autoPlay src={film.video1} className="d-block w-100" alt="..." ></video>
      </div>
      <div className="carousel-item">
      <video muted loop autoPlay src={film.video2} className="d-block w-100" alt="..." ></video>
      </div>
      <div className="carousel-item">
      <video muted loop autoPlay src={film.video3} className="d-block w-100" alt="..." ></video>
      </div>
    </div>
  </div>
                  </div>
  )
}
