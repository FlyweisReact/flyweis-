import React, { Component } from 'react';
import Link from 'next/link';

class Portfoliobanner extends Component {
     
    render() {
      let  onImgLoad = ({ target: img }) => {
            const { offsetHeight, offsetWidth } = img;
            console.log(offsetHeight, offsetWidth);
          };

        let { pageTitle, homePageUrl, homePageText, activePageText } = this.props;

        return (
            <div className="page-title-area item-bg1">
               
                {/* <div className="container"> */}
                    <div className="page-title-content">
                    
                       
                        <div className='banner_img'>
                        <img  loading="lazy" src="/images/banner2.png" alt=""  onLoad={onImgLoad}/>
                        
                        </div>
                        <div className="container">
                        <div className="banner-heading">
                        {/* <h2>{pageTitle}</h2> */}
                        <ul>
                            <li>
                                {/* <Link href={homePageUrl}>
                                    <a>{homePageText}</a>
                                </Link> */}
                            </li>
                            {/* <li>{activePageText}</li> */}
                        </ul>
                        </div>
                        </div>

                       
                    </div>
                </div>
            // </div>
        );
    }
}

export default Portfoliobanner;