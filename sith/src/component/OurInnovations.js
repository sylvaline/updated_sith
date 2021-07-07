import React, {useState} from 'react'
import bg from '../assets/image/office_img1.jpg'

function InnovationWatch() {
    const [bannerScroll, setBannerScroll] = useState(false);

  const banner_on_scroll = () => {
    if (window.scrollY >= 50) {
      setBannerScroll(true);
    } else {
      setBannerScroll(false);
    }
  };

  window.addEventListener("scroll", banner_on_scroll);

    return (
        <div className="our_innovations">
            <div className="banner">
            <img src={bg} alt="" />
                <div className={bannerScroll ? "banner_card open":"banner_card"}>
                    <div className="banner_card_inner">
                        <div className="banner_item">
                        <h2>Co Working Space</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non in ducimus laboriosam, assumenda magni maiores labore at error temporibus nisi sunt.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InnovationWatch
