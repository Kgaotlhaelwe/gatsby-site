import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image";
import Logo1 from '../components/Pictures/Logo1';
import Logo2 from '../components/Pictures/Logo2';
import Logo3 from '../components/Pictures/Logo3';
import Logo4 from '../components/Pictures/Logo4';

const ClientsLogoSections = ({ siteTitle }) => (

    <div>
        <div class="container-fluid  pt-4 d-none d-md-block  d-lg-block  d-xl-block d-sm-none ">
            <div class="container">
                <h3 class="text-center" >OUR CLIENTS</h3>
                <p>We’ve worked with some of the world’s best brands to develop digital strategies and design digital products including websites, social media, online campaigns, games, apps and breakthrough content.</p>
                <div class="row">
                <div class="col-sm">
                    < Logo1/>
                </div>
                <div class="col-sm">
                    < Logo2/>
                </div>
                <div class="col-sm">
                    < Logo3/>
                </div>
                <div class="col-sm">
                    < Logo4/>
                </div>

                </div>
            </div>
        </div>
        <h3 class=" pl-5 text-center  d-flex d-md-none  d-lg-none  d-xl-none d-sm-block" >OUR CLIENTS</h3>
        <div id="carouselExampleSlidesOnly" class="carousel slide  d-flex d-md-none  d-lg-none  d-xl-none d-sm-block" data-ride="carousel">
        <div class="carousel-item active"> 
        < Logo1/>
        </div>

        <div class="carousel-item">
        < Logo2/>
        </div>
        <div class="carousel-item">
        < Logo3/>
        </div>
        <div class="carousel-item">
        < Logo4/>
        </div>
        </div>
    </div>
)


export default ClientsLogoSections