import React from 'react';
import './Banner.css';

function Banner(props: any) {
    return (<>
        <div className='text-light text-center banner-section'>
            <img src={props.imgPath} style={{ height: '700px', width: '100%' }} alt="Banner Image" />
        </div>
    </>
    );
}

export default Banner;
