
function SlideSection() {
  return (
    <>
      <section
        id="slider"
        className="slider-element min-vh-md-100 py-4 include-header"
        
      >
        <div className="slider-inner">
          <div className="vertical-middle slider-element-fade">
            <div className="container text-center ">
              <div>
                <h4 className="text-uppercase ls3 fw-bolder mb-0">
                  I'm a Freelance
                </h4>
                <h1 className="mt-3 animat ">
                  <span className="cssanimate">
                    <div className="ocitem1"></div>
                  </span>
                </h1>
              </div>

              <div className="mx-auto " style={{ maxWidth: "600px" }}>
                <p className="lead fw-normal mb-5 text2">
                  Authoritatively expedite backward-compatible e-commerce with
                  cross-media e-commerce. Credibly provide access to world-className
                  action items through resource-leveling resources.
                </p>
                <a className="buttonview">
                  <span>View our Works</span>
                  <i className="bi-arrow-right-short"></i>
                </a>
                <a href="#" className="text-dark" style={{ fontSize: "20px" }}>
                  {" "}
                  <i className="bi bi-arrow-down-circle-fill"></i> <u>Contact Me</u>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SlideSection;
