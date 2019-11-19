import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import VideoMarketingImage from "../components/Pictures/ServiceImages/VideoMarketing"
import  SeoImage from './Pictures/ServiceImages/seo'
import  EmailMarketingImages from "./Pictures/ServiceImages/EmailMarketingImage"
import  WebsiteImages from "./Pictures/ServiceImages/Website"
const ServicesSection = () => (

    <div>
        <div class=" container-fluid  text-center pt-5 mt-5" style={{backgroundColor:'#3fc5f0' , color:'white' , height:'300px'}}>
        <h1>Full Stack Digital Marketing Solution</h1>
        <p>We’re full service which means we’ve got you covered on design & content right through to digital. You’ll form a lasting relationship with us.</p>
        </div>
        <div class="container d-none d-md-block  d-lg-block  d-xl-block d-sm-none " style={{marginTop:'-5%'}}> 
        <div class="row">
        <div class="col-sm">
        <div class="card">
            <VideoMarketingImage class="card-img-top" alt=""/>
        <div class="card-body">
        <h5 class="card-title">Video Marketing</h5>
        <span>Reach a huge area of users and get a publicty of your product and service ,video marketing solution.</span>
        </div>
        </div>
        </div>

        <div class="col-sm">
        <div class="card">
            <  SeoImage class="card-img-top" alt=""/>
        <div class="card-body">
        <h5 class="card-title">SEO optimization</h5>
        <span class="card-text"> we provide wide range of seo service to make your site at top to reach your target customers provided.</span>
        </div>
        </div>
        </div>

        <div class="col-sm">
        <div class="card">
            < EmailMarketingImages class="card-img-top" alt="" />
        <div class="card-body">
        <h5 class="card-title">Email Marketing</h5>
        <span class="card-text">Email Marketing is a great solution to reach a high range of customers eagrerly waiting to get a service</span>
        </div>
        </div>
        </div>

        <div class="col-sm">
        <div class="card">
            <WebsiteImages  class="card-img-top" alt="" />
        <div class="card-body">
        <h5 class="card-title">Video Marketing</h5>
        <span>Reach a huge area of users and get a publicty of your product and service ,video marketing solution.</span>
        </div>
        </div>
        </div>
        </div>
        </div>

        <div class="container d-flex d-md-none  d-lg-none  d-xl-none d-sm-block  mt-3">
        <div class="row">
        <div class="col-sm">
        <div class="card">
            <VideoMarketingImage class="card-img-top" alt=""/>
        <div class="card-body">
        <h5 class="card-title">Video Marketing</h5>
        <span>Reach a huge area of users and get a publicty of your product and service ,video marketing solution.</span>
        </div>
        </div>
        </div>

        <div class="col-sm  mt-3">
        <div class="card">
            <  SeoImage class="card-img-top" alt=""/>
        <div class="card-body">
        <h5 class="card-title">SEO optimization</h5>
        <span class="card-text"> we provide wide range of seo service to make your site at top to reach your target customers provided.</span>
        </div>
        </div>
        </div>

        <div class="col-sm  mt-3">
        <div class="card">
            < EmailMarketingImages class="card-img-top" alt="" />
        <div class="card-body">
        <h5 class="card-title">Email Marketing</h5>
        <span class="card-text">Email Marketing is a great solution to reach a high range of customers eagrerly waiting to get a service</span>
        </div>
        </div>
        </div>

        <div class="col-sm  mt-3">
        <div class="card">
            <WebsiteImages  class="card-img-top" alt="" />
        <div class="card-body">
        <h5 class="card-title">Video Marketing</h5>
        <span>Reach a huge area of users and get a publicty of your product and service ,video marketing solution.</span>
        </div>
        </div>
        </div>
        </div>
        </div>
    </div>

)

export default ServicesSection