import React from 'react'
import pic from "../assets/second_image.jpg"
import slider_contaner from "./slider.scss"
import { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import mainlogo from "../assets/white_logo.png";

const Slider_contaner = () => {
    const [currentSlide, setcurrentSlide] = useState(0);

    const data = [
        "https://s3-alpha-sig.figma.com/img/1a4a/d7fc/62b7f9d4d028520d0b24f18ccc411146?Expires=1692576000&Signature=OpDNzy8ebPdPM1DmPfwy0TLRDorRjkGj8hUQqlOvWMl2MjIYB60uqu~1IR~1GstMRgjMNjyw2aQfcHTv2OiclRv4~mvgQTP2uruDWI035hzPipvdIumbmPd8CYeh~KO5BlviWu-aW0vzD15os4agb8TLlw~3Bkpw9e3TVwVtb6robgcDahHqUA0F94O~BeEqDkxJWdPAJ57ndsPTs8fdv40AiC6Vb2McEjf~FSAf6dhysLNdK40AU01MaUECNZJVk8Emm8y~gx7jKarZUfOYd3J9PHjOIU1lOvCh8fgIM7iFMOgmi5JHGBK2Qpt0exwoHfZSMGQVTRBjp39sD091xA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        // "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        // "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://s3-alpha-sig.figma.com/img/33db/3764/a30655cf21a53fb7c59fdb5111591380?Expires=1692576000&Signature=WPXlfBmtI5b3tgPPc743FaOaOiLB25mwTitY8BmZ4AVru8PLADk~phOGv0~UlVzenZIP~ToDnjpmYWn4gL6I8urPdEQD6pYcHBhHSoIEGppN0FqCXYOHYwF-i1GuUoA02A9R2fZa~EhaoiKntUfhwe4IN7JSSDxkcBnuhFyWKyRhLEK1SjFLxOxxU2NKlGeuUqVTUci~9K~Sljsfr9TUPIeN7kgVbg7Gr0RZP9yPtN9NzWdd9Vn1VctKqJBCO6tWIIEEBJFi5uEPrt9oL0PnGYRq-O5-wmfUZbDRF05HGGoZKsSVyM8L1LgsGrq-xuBodGR9A0OYdUprTH5GFQaoVw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      ];

    const prevSlide = () => {
        setcurrentSlide(currentSlide === 0? 2: (prev) => prev-1);
    }
    
    const nextSlide = () => {
        setcurrentSlide(currentSlide === 2? 0: (prev) => prev+1);
    }
  return (
    <div className='slider'>
      <div className='mainlogo'>
        <img src={mainlogo} />
      </div>
      <div className='contaner' style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt=''/>
        <img src={data[1]} alt=''/>
        <img src={data[2]} alt=''/>
      </div>

      <div className='icons'>
        <div className='icon' onClick={prevSlide}>
            <ArrowBackIosNewIcon />
        </div>
        <div className='icon' onClick={nextSlide}>
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  )
}

export default Slider_contaner
