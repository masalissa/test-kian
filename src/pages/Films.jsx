import React, { Fragment } from 'react'
import FilmesSlider from '../components/FilmesSlider'
const filmes = [
  {id:1,filmeName:"Film One",director:"Oday Rasheed",duration:"120 min",video1:"https://player.vimeo.com/external/210754416.sd.mp4?s=826dbe91a402d3fc239674b6595a0100b2a45098&profile_id=164&oauth2_token_id=57447761",video2:"https://player.vimeo.com/external/445512080.sd.mp4?s=18fe30a86e6c2ae44e96bd5b48e9ca3315874672&profile_id=164&oauth2_token_id=57447761",video3:"https://player.vimeo.com/external/420602315.sd.mp4?s=2546ea54e95e997ad08cb10a3799e1656f834dbf&profile_id=164&oauth2_token_id=57447761",actors:"Lorem ipsum , dolor sit  , adipiscing elit , Etiam iaculis",aboutFilme:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Etiam sit amet iaculis neque. Phasellus a mi risus. Fusce gravida, tellus ut laoreet."},
  {id:2,filmeName:"Film two",director:"Majd Rasheed",duration:"120 min",video1:"https://player.vimeo.com/external/180399687.sd.mp4?s=8e47052a5dd6d00f6d819185d8f9851fed8c9d0c&profile_id=164&oauth2_token_id=57447761",video2:"https://player.vimeo.com/external/482934181.sd.mp4?s=edb577c0074d6c95c53442a1b7702931211e300a&profile_id=164&oauth2_token_id=57447761",video3:"https://player.vimeo.com/external/210754241.sd.mp4?s=f35aa8e9485fbb06451c39bd5ac22b193615bc83&profile_id=164&oauth2_token_id=57447761",actors:"Lorem ipsum , dolor sit  , adipiscing elit , Etiam iaculis",aboutFilme:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Etiam sit amet iaculis neque. Phasellus a mi risus. Fusce gravida, tellus ut laoreet."},
  {id:3,filmeName:"Film three",director:"Oday Rasheed",duration:"120 min",video1:"https://player.vimeo.com/external/390176462.sd.mp4?s=c756b27bc3bae8bc7c7e67db238f2461b5cec504&profile_id=164&oauth2_token_id=57447761",video2:"https://player.vimeo.com/external/450144621.sd.mp4?s=096e89c01009f6a476e9f1fb0b8f96e3161023cf&profile_id=164&oauth2_token_id=57447761",video3:"https://player.vimeo.com/external/586195010.sd.mp4?s=152b228df472c26787ac57fc82e93f21ce88feba&profile_id=164&oauth2_token_id=57447761",actors:"Lorem ipsum , dolor sit  , adipiscing elit , Etiam iaculis",aboutFilme:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Etiam sit amet iaculis neque. Phasellus a mi risus. Fusce gravida, tellus ut laoreet."},
 
]
export default function Films() {
  return (
    <section className='films'>
        <div className="container">
            <div className="row mt-5 align-items-center">
                {filmes.map(film => {
                return(
                  film.id % 2 == 0 ? 
                  <div className='row mt-5 align-items-center'>
                  <FilmesSlider key={film.id} film={film} />
                  <div className="details text-white-50 col-md-6">
                      <p>Film Name : {film.filmeName}</p>
                      <p>Director : {film.director}</p>
                      <p>Duration : {film.duration}</p>                  
                      <p>Actors : {film.actors}</p>
                      <p>About the film  : {film.aboutFilme}</p>
                      </div> 
                      <div className="line col-12"></div>
                      </div>
                      
                      : <div className='row mt-5 align-items-center'>
                      <div className="details text-white-50 col-md-6" >
                      <p className=''>Film Name : {film.filmeName}</p>
                      <p>Director : {film.director}</p>
                      <p>Duration : {film.duration}</p>                  
                      <p>Actors : {film.actors}</p>
                      <p>About the film  :{film.aboutFilme}</p>
                      </div> 
                      <div className="filmesSlider col-md-6 mt-3">
                      <div
    id="carouselExampleSlidesOnly"
    className="carousel slide"
    data-bs-ride="carousel"
  >
    <div className="carousel-inner border-effect-sliders">
      <div className="carousel-item active">
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
  <div className="line col-12"></div>
                      </div>
                  )   
                })}
            </div>
        </div>
    </section>
  )
}
 