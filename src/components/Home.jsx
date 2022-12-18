import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
const Home=()=>
{
	

    return (
        <>
      <Header/>
		
	<div id="header-background">
	<div class="intro center-vertically">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="header-content text-left">
                            <h1 class="margin-auto">Better Design Experiences <br/>
On Any Devices</h1>
                         <a class="btn btn-rs" href="#rooms">GET STARTED</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>	
<section id="booking-section" class="content-booking">
        <div class="container">
            <div class="form-container col-sm-12">
<div class="row">
<div class="col-md-6 col-sm-6 col-xs-12">
<h2>
We help to <br/>
grow creativity that<br/>
today break rules.
</h2>
</div>

<div class="col-md-3 col-sm-6 col-xs-12">
<div class="feature-box">
<i class="et-icon-lightbulb icon"></i>
<h3 class="name">Branding Design</h3>
<p class="description">Quisque in fermentum velit. Viva mus pharetra, quam ut tincidunt interdum, leo elit ornare.</p>
</div>
</div>

<div class="col-md-3 col-sm-6 col-xs-12">
<div class="feature-box">
<i class="et-icon-trophy icon"></i>
<h3 class="name">Event Design</h3>
<p class="description">Quisque in fermentum velit. Viva mus pharetra, quam ut tincidunt interdum, leo elit ornare.</p>
</div>
</div>

</div>
							
						</div>
    
        </div>
		 </section>

<Footer/>
        </>
    )
}

export default Home;