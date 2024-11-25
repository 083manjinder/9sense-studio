import { work1, work2, work3, work4, work5 , icon1, icon2, icon3, icon4, icon5} from './images';




function WorkSection() {
    return (
      <>
    
      
      <div id="work">
             <div className="name"><i className="bi bi-pen"></i>Creative Work</div>
             <div className="poster">
               <div className="poster1"><img style={{borderRadius: "40px"}} src={work1} alt="error in program"/>
               <div className="head">
                 <h2>9 Sense Studio</h2>
                 <p>Mobile App Design</p>
               </div>
               </div>
               <div className="poster2"><img  style={{borderRadius: "40px"}} src={work2} alt="error in program"/>
                 <div className="head2">
                   <h2>9 Sense Studio</h2>
                   <p>Product Label Design</p>
                 </div>
               </div>
               <div className="poster3"><img style={{borderRadius: "40px"}} src={work3} alt="error in program"/>
                 <div className="head3">
                   <h2>9 Sense Studio</h2>
                   <p>Product Label Design</p>
                 </div>
               </div>
               <div className="poster4"><img style={{borderRadius: "40px"}} src={work4} alt="error in program"/>
                 <div className="head4">
                   <h2>9 Sense Studio</h2>
                   <p>visiting card design</p>
                 </div>
               </div>
               <div className="poster5"><img style={{borderRadius: "40px"}} src={work5} alt="error in program"/>
                 <div className="head4">
                   <h2>9 Sense Studio</h2>
                   <p>cartoon characters Design (2D)</p>
                 </div>
               </div>
             </div>
           </div>
        
         
           
           <div className="clear"></div>
               <div style={{backgroundColor: "rgb(235, 235, 235)"}}>
               <div className="headline">
                 <h2>The ways I can help you</h2>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam minima error ducimus recusandae sed ipsam, cumque optio reiciendis nihil labore!</p>
               </div>
               <div className="icon">
                 <div className="icon1">
                   <img style={{width: "100px"}} src={icon4} alt="error"/>
                   <img style={{width: "100px"}} src={icon5} alt="error"/>
                   
                  <h2>Website Design</h2>
                  <p>Objectively productivate interoperable process improvements after team building testing procedures. Distinctively architect resource-leveling portals.</p>
                 </div>
                 <div className="icon2">
                   <img style={{width: "100px"}} src={icon1} alt="error"/>
                  <h2>Responsive Website</h2>
                  <p>Objectively productivate interoperable process improvements after team building testing procedures. Distinctively architect resource-leveling portals.</p>
                 </div>
                 <div className="icon3">
                   <img style={{width: "100px"}} src={icon2} alt="error"/>
                  <h2>Photoshop</h2>
                  <p>Objectively productivate interoperable process improvements after team building testing procedures. Distinctively architect resource-leveling portals.</p>
                 </div>
                 <div className="icon4">
                   <img style={{width: "100px"}} src={icon3} alt="error"/>
                  <h2>Illustrator</h2>
                  <p>Objectively productivate interoperable process improvements after team building testing procedures. Distinctively architect resource-leveling portals.</p>
                 </div>
               </div>
             </div>
           
             <div className="clear"></div>
      </>
    );
  }
  
  export default WorkSection;
  