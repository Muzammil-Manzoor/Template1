import React from 'react'
import logo from './images/logo.png'
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
   <div id="home">
       <div id="topbar" class="topbar-transparent">
            <div class="container">
                <div class="row">
                    <div class="col-sm-9">
                        <ul class="top-menu">
                            <li><span class="fa fa-phone"></span> <span>+1 (234) 567-890</span></li>
                            <li><span class="fa fa-clock-o"></span> <span> 228 Park Ave S, New York, NY 10003</span></li> 
							

                        </ul>
                    </div>
                    <div class="col-sm-3 hidden-xs">
                       
                       <ul class="social-icons"><li class="social-icon-facebook"><a target="_blank" href="#" aria-label="facebook"><span class="fa fa-facebook" aria-hidden="true"></span></a></li><li class="social-icon-twitter"><a target="_blank" href="#" aria-label="twitter"><span class="fa fa-twitter" aria-hidden="true"></span></a></li><li class="social-icon-google-plus"><a target="_blank" href="#" aria-label="Google Plus"><span class="fa fa-google-plus" aria-hidden="true"></span></a></li><li class="social-icon-pinterest"><a target="_blank" href="#" aria-label="Pinterest"><span class="fa fa-pinterest" aria-hidden="true"></span></a></li><li class="social-icon-linkedin"><a target="_blank" href="#" aria-label="LinkedIn"><span class="fa fa-linkedin" aria-hidden="true"></span></a></li><li class="social-icon-instagram"><a target="_blank" href="#" aria-label="Instagram"><span class="fa fa-instagram" aria-hidden="true"></span></a></li></ul>
                     
                    </div>
                </div>
            </div>
        </div>

        <header id="header" class="header-white">
            <div id="header-wrap">
                <div class="container">
  <div id="logo">
<a href="index.html" class="logo" data-dark-logo="images/logo-dark.html">
<img src={logo} alt="Innovatik_Logo"/> </a>
</div>
                        <div class="container">
						<nav class="main-menu pull-right">


                        <div class="navbar-header">   	
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>
<div class="navbar-collapse collapse clearfix">
<ul class="navigation clearfix">
<li class="current"><Link to='/home'>Home</Link></li>
<li><Link to='/about'>About</Link></li>
<li><a href='#service-section'>Service</a></li>
<li><a href='#portfolio-section'>Our Projects</a></li>
<li><a href='#team-section'>Team</a></li>
<li><a href='#price-section'>Prices</a></li>
<li><a href='#blog-section'>News</a></li>
<li class="dropdown"><a href='#'>Pages</a>
   <ul>
     <li><a href='page-contact.html'>Page with contact</a> </li>
  <li><a href='portfolio-grid3.html'>Portfolio grid 3</a> </li>
  <li><a href='portfolio-grid-space.html'>Portfolio with space</a> </li>
  <li><a href='single-project.html'>Single Portfolio</a> </li>
    <li><a href='portfolio.html'>Portfolio default</a> </li>
   </ul>
</li>
<li><a href='contact.html'>Contact</a></li>
</ul>
</div>
</nav>
                        </div>
                    
         
                </div>
				
				
            </div>
			
			
        </header>
		
</div>	


    </>
  )
}
