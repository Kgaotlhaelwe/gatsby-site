import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo1 from '../components/Pictures/Logo1' ;
import Image from "../components/image"
import  MainPic from '../components/Pictures/MainImage'
const FirstSection = ({ siteTitle }) => (
    <div>
        <div class="container " style={{ marginTop: `15%` }} >
            <div class="row">
                <div class="col-sm">
                    <strong>
                        <h4 class="text-uppercase" style={{color:"#3fc5f0"}} >We go above and beyond to deliver digital solution  </h4>
                    </strong>
                    <p> G&G Digital creates breakthrough solutions to ensure your brand dominates the online, offline and social space. We live and breathe all things digital. </p>
                </div>


                <div class="col-sm " style={{ marginTop: `-10%` }}>
                    <Image />
                </div>

            </div>

        </div>

        <div class="mt-3" >

            <div class=" ">
                <strong>
                    <h2 class="text-center text-uppercase" style={{color:"#3fc5f0"}}> Our Mission and Vision  </h2>
                </strong>

            </div>

            <div class="row mt-2 " >
                <div class="col-sm text-center">
                <MainPic style={{heigth:'150px'}} / >
                </div>
                <div class="col-sm " style={{marginTop:'10%'}}>
                    <strong>
                        <h4 class="text-uppercase" style={{color:"#3fc5f0"}} >We go above and beyond to deliver digital solution  </h4>
                    </strong>
                    <p class="">We thrive on creativity and innovation. We’re insight driven.    We’re aware and nimble.   We’re not afraid to take calculated risks. We’re accountable.
                        We’re forever learnin </p>
                </div>

            </div>

           

        </div>
    </div>
)


export default FirstSection