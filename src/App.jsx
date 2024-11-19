import { useState } from 'react'
import Badge from './components/Badge/Badge'
import Banner from './components/Banner/Banner'
import Card from './components/Card/Card'
import TestimonialPhoto from './components/Testimonial/TestimonialPhoto'
import Testimonial from './components/Testimonial/Testimonial'
import Tooltip from './components/Tooltip/Tooltip'
import { FaRegQuestionCircle } from "react-icons/fa";

import './index.css'
import './assets/fonts.css'

export default function App() {

  return (
    <main>
      <div className="badges">
        <div className="group">
          <p className="app-text">Square</p>
          <div className="badges-inner">
            <Badge color="green" border="square">Green</Badge>
            <Badge color="blue" border="square">Blue</Badge>
            <Badge color="indigo" border="square">Indigo</Badge>
            <Badge color="purple" border="square">Purple</Badge>
          </div>
        </div>
        <div className="group">
          <p className="app-text">Pill</p>
          <div className="badges-inner">
            <Badge color="pink" border="pill">Pink</Badge>
            <Badge color="red" border="pill">Red</Badge>
            <Badge color="yellow" border="pill">Yellow</Badge>
            <Badge color="gray" border="pill">Gray</Badge>
          </div>
        </div>
      </div>
      
      <div className="banners">
        <Banner status="success" title="Successfully lorem"/>
        <Banner status="warning" title="Sus lorem" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum excepturi ea libero rerum. Numquam recusandae harum vero nemo porro voluptatibus culpa beatae non, earum."/>
        <Banner status="error" title="Flop lorem" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum excepturi ea libero rerum. Numquam recusandae harum vero nemo porro voluptatibus culpa beatae non, earum."/>
        <Banner status="info" title="Info lorem" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum excepturi ea libero rerum. Numquam recusandae harum vero nemo porro voluptatibus culpa beatae non, earum."/>
      </div>

      <Card background="white" imgColor="blue" title="Easy card" text="Numquam recusandae harum vero nemo porro voluptatibus culpa beatae non, earum."/> 

      <div className="testimonials">
        <Testimonial />
        <TestimonialPhoto />
      </div>

      <div className="tooltips">
        <div className="group">
          <p className="app-text">Bold</p>
          <Tooltip themeStyle="pink-bold" />
        </div>
        <div className="group">
          <p className="app-text">Light</p>
          <Tooltip />
        </div>
      </div>
    </main>
  )
}