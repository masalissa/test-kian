import React from 'react'
import aboutUs from "../images/about us - img 1.png"
export default function About() {
  return (
    <section className='bg-white padding'>
        <div className="row justify-content-center w-75 mx-auto bg-black text-white align-items-center p-4 rounded-4" >
            <div className="left-img col-12 col-md-4">
                <img src={aboutUs} alt="team-img" />
            </div>
            <div className="right-txt col-12 col-md-6">
                <h2>About us</h2>
                <p className='text-white-50'>Kian film production</p>
                <p className='text-white-50'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident eius ab nesciunt culpa iste aliquid ullam porro? Velit modi ducimus omnis praesentium eum dolor quibusdam obcaecati recusandae atque, nostrum illo exercitationem officiis suscipit dolorem voluptatem qui enim, sed veritatis totam deleniti. Odit ab, praesentium consequuntur veritatis nisi eos harum veniam optio quod! Architecto dolore autem amet praesentium sint vel adipisci voluptatibus officiis deserunt quis aliquam a perferendis delectus quo deleniti voluptates sequi, provident exercitationem eveniet id distinctio, harum dolorem! Aperiam dolor similique nesciunt eos, quisquam minus, quod accusamus est iusto ea dolorem, aliquid voluptatibus reprehenderit aspernatur culpa omnis quae. Optio.</p>
            </div>
        </div>
    </section>
  )
}
