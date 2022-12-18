import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

import img_top01 from "./images/img_top01.jpg"
import img_top02 from "./images/img_top02.jpg"
import img_top03 from "./images/img_top03.jpg"
import img_top04 from "./images/img_top04.jpg"
export const About = () => {
  return (
    <>
    <Header/>
    <section id="about-section" class="aboutus-area">
<div class="container-fluid">
<div class="row">

<div class="nosp col-md-3 col-sm-6 col-xs-12">
<div class="abtus">
<h3 class="title">About Us</h3>
<div class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat.</div>
</div>
</div>

<div class="nosp col-md-3 col-sm-6 col-xs-12">
<div class="box"> 
<img src={img_top01} alt="Joomla template"/>
<div class="overbox">
<div class="title-box overtext"> Easy and Fast </div>
<div class="description-box overtext"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat.
</div>
</div>
</div>
</div>

<div class="nosp col-md-3 col-sm-6 col-xs-12">
<div class="abtus">
<h3 class="title">Who We Are</h3>
<div class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat.</div>
</div>
</div>

<div class="nosp col-md-3 col-sm-6 col-xs-12">
<div class="box"> 
<img src={img_top02} alt="Joomla template"/>
<div class="overbox">
<div class="title-box overtext"> Easy and Fast </div>
<div class="description-box overtext"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat.
</div>
</div>
</div>
</div>

<div class="nosp col-md-3 col-sm-6 col-xs-12">
<div class="box"> 
<img src={img_top03} alt="Joomla template"/>
<div class="overbox">
<div class="title-box overtext"> Easy and Fast </div>
<div class="description-box overtext"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat.
</div>
</div>
</div>
</div>

<div class="nosp col-md-3 col-sm-6 col-xs-12">
<div class="abtus">
<h3 class="title">Why Us</h3>
<div class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat.</div>
</div>
</div>

<div class="nosp col-md-3 col-sm-6 col-xs-12">
<div class="box"> 
<img src={img_top04} alt="Joomla template"/>
<div class="overbox">
<div class="title-box overtext"> Easy and Fast </div>
<div class="description-box overtext"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat.
</div>
</div>
</div>
</div>

<div class="nosp col-md-3 col-sm-6 col-xs-12">
<div class="abtus">
<h3 class="title">Our Goal</h3>
<div class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat.</div>
</div>
</div>

</div>
</div>

</section>
<Footer/>
    </>
  )
}
