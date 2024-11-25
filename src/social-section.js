import scroller from './images/scroller.jpg'
function SocialSection() {
    return (
      <>
       <div id="about" className="container" style={{backgroundColor: "rgba(228, 228, 228, 0.76)", maxWidth: "100%"}} >
          <div className="row justify-content-center text-center mt-0">
            <div className="col-lg-8">
              <div>
                <h3 className="fw-bolder h1 mt-4 mb-4">Creative Graphics Designer & Web Developer Based in <span className="gradiant2">India</span></h3>
                <p className="mb-5 lead text-black-50 fw-extralight">Specializing in crafting visually appealing designs and functional websites. Passionate about turning ideas into impactful digital experiences.</p>
              </div>
            </div>
          </div>
        </div>
        <div >
        <div className="parallax" style={{backgroundImage: `url(${scroller})`}} >
          <div className="link">
            <a href="#">#behance</a>
            <a href="#">#dribbble</a>
            <a href="#">#upwork</a>
            <a href="#">#freelancer</a>
           </div>
        </div>
      </div>
     <div className="clear"></div>
      </>
    );
  }
  
  export default SocialSection;
  