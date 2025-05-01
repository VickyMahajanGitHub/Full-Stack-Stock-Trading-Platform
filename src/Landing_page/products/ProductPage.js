import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
function ProductPage() {
    return ( 
        <>
        <Navbar />
        <Hero   />
        <LeftSection    />
        <RightSection   />
        <Footer />  
        </>
     );
}

export default ProductPage;