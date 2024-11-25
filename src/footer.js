



function Footer() {
    return (
      <>
    
      
    <footer id="footer">
        <div >
          <div className="foter" >
            <div className="footer">
              <div className="topic" >
                <h2 style={{fontSize: "43px", marginBottom: "20px"}}>Got a Project?
                  <br/>
                  Let's Talk!
                </h2>
                <p style={{fontSize: "17px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, veniam magni. </p>
                <a href="mailto: manjinderdhillon083@gmail.com" style={{textTransform: "none", fontSize: "25px"}}><u>noreplay@9sensestudio.in</u>
                  <i className="bi bi-arrow-right-short"></i></a>
                  
              </div>
              <div className="form1"  >
                <h2 style={{marginBottom: "24px"}}>Estimate your Project?</h2>




               


                <form >
                 <div style={{display: "flex", flexDirection: "column",  marginBottom: "28px"}}> <label>What is Your Name:</label>
                  <input style={{height: "40px", border: "none", backgroundColor: "transparent", borderBottom: "2px solid rgba(0,0,0,0.07)", outline: "none"}} type="text" name="name" id="name" required/>
                </div>
                 <div style={{display: "flex", flexDirection: "column",  marginBottom: "28px"}} > <label>Your Email Address Please:</label>
                  <input style={{height: "40px", border: "none", backgroundColor: "transparent", borderBottom: "2px solid rgba(0,0,0,0.07)", outline: "none"}}  type="email" name="email" id="email" required/>
                </div>
                 <div style={{display: "flex", flexDirection: "column",  marginBottom: "28px"}}> <label>Tell more about your Project:</label>
                 <textarea  style={{height: "40px", border: "none", backgroundColor: "transparent", borderBottom: "2px solid rgba(0,0,0,0.07)", outline: "none"}} name="content" id="content" cols="10" rows="3" required></textarea>
                </div>
               <button className="btn" type="submit" id="submit">
               <i className="bi bi-arrow-right-short"></i>
            </button>
            </form>
           </div>
          </div>
       </div>
      </div>
     </footer>
      </>
    );
  }
  
  export default Footer;
  