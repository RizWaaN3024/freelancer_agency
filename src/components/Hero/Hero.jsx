import React from 'react'
import '../Hero/Hero.css'
import number from '../../assets/02.png'
import Button from '../Button/Button'

function Hero() {
  return (
    <section className='container hero_container'>
        <div className="hero_image">
        
        </div>
        <div className="top_img">
        <img src={number} alt="" />
        <p className='summer_text'>#Summer2024</p>
        </div>
        
        <h1>
            GET DESIGN <br /> WORK DONE <br/> BY <span>SOPHIA</span>
        </h1>
        <div className="hero_text">
        <p>
        Irish skinny, grinder affogato, dark, sweet carajillo, flavour seasonal <br /> aroma single, so you can give an attitude away from your feel
        </p>
        </div>
        <Button />
    </section>
  )
}

export default Hero