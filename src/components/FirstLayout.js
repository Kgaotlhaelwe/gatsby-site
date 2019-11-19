import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image" ;
import Logo1 from '../components/Pictures/Logo1' ;

const FirstSection = ({ siteTitle }) => (
    <div>
        <div class="container " style={{ marginTop: `15%` }} >
            <div class="row">
                <div class="col-sm">
                    <strong>
                        <h4 class="text-uppercase" >We go above and beyond to deliver digital solution  </h4>
                    </strong>
                    <p> G&G Digital creates breakthrough solutions to ensure your brand dominates the online, offline and social space. We live and breathe all things digital. </p>
                </div>


                <div class="col-sm " style={{ marginTop: `-20%` }}>
                    <Image />
                </div>

            </div>

        </div>

        <div class="mt-3" >

            <div class=" ">
                <strong>
                    <h2 class="text-center text-uppercase" style={{}}> Our Mission and Vision  </h2>
                </strong>

            </div>

            <div class="row mt-2 ">
                <div  class="col-sm text-center">
                <Logo1/>

                </div>
                
                <div class="col-sm ">
                <p class="">We thrive on creativity and innovation. We’re insight driven.    We’re aware and nimble.   We’re not afraid to take calculated risks. We’re accountable.
              We’re forever learning
             
           
            
              </p>
                </div>

            </div>

           

        </div>
    </div>
)


export default FirstSection