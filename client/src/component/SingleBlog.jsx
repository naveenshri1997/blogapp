import React from 'react'
import Header from './Header'
import bai from '../bai.jpg'
import blogimgcom from '../blog1.png'
import SquareRelatedblog from './SquareRelatedblog'
export const SingleBlog = () => {
  return (
    <>
    <Header/>
    <section>
        <div className="container">
            <div className="row justify-content-start">
            <div className="col-lg-6 offset-lg-3">
            <div className='Single_blog_container'>
            <div className='blog_detail'>
                    <div className='bdp1'>
                        <h2 className='blog_title text-start fs-1'>Back-End & Web Development Trends For 2024</h2>
                        <h3 className='blog_para text-start hev'>By Mary Moore, copywriter at Shakuro The ever-shifting
                            landscape of digital innovation</h3>
                    </div>                
                </div>

                <div className='author'>
                    <div  className="author_img"><img src={bai} alt="bai" className='img-fluid' /></div>
                    <div className="author_title hev">fatfish in JavaScript in Plain English</div>
                    <div className="author_date hev">Aug 12 2023</div>
                </div>                               
                
                 <div className="bdp2">
                        <img src={blogimgcom} className='img-fluid' width="100%" alt="" />

                    <h4 className='fs-5 fw-normal mt-5 text-center'>The performance of large language models (LLMs) is growing at a breakneck pace.
                         Models provide more coherent and consistent answers, with a progressive and
                          significant reduction of hallucinations. This improvement is mainly related
                           to the overall optimization of model architecture and training data, as well
                            as the constant increase in parameters. Nonetheless, hallucinations are 
                            still occurring, sometimes in unexpected ways, and it is still a significant 
                            challenge to trace the source of these anomalies. Our understanding of
                             the inner workings of LLMs is less detailed than what one could assume 
                             when looking at their widespread application, and this is a considerable
                              limit in specific domains where random and unexpected errors could lead 
                              to severe consequences (e.g., healthcare and finance)</h4>
                    </div>
            </div>                
            </div>
            </div>
        </div>       
    </section>
    <section className='bg-light py-4'>
        <div className="container-fluid">
        <div className="row justify-content-start">
        <div className="col-lg-6 offset-lg-3">
           <div className="row">
           <div className="col-md-6">
            <SquareRelatedblog/>
            </div>
            <div className="col-md-6">                     
            <SquareRelatedblog/>
            </div>
           </div>
        </div>
        </div>
        </div>
        </section>
    </>
  )
}
