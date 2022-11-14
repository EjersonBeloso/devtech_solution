import React from "react";
function AboutUs() {
  return (
    // <h1>this is about us</h1>

    <div id="about" className="container-fluid aboutcontainer">
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="p-5">
                <img
                  className=" about-img"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT11AhhNGJ90AF22BVSo6RKvGdnIANmpFFQbg&usqp=CAU"
                  alt="about.img"
                />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <h2 className="display-4">About DevTech Solutions...</h2>
                <p>
                  DevTech Solutions is an Information Technology Company who is
                  willing to help everyone, especially on students to fix or
                  troubleshoot or even repair their computer devices. Our
                  Computer Services are Affordable for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <img
                  className=" about-img"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqC7TSC6mkScs6XnLZwlVGyEnup7msZ2_bzw&usqp=CAU"
                  alt="about.png"
                />
              </div>
            </div>
            <div className="col-lg-6 order-lg-2">
              <div className="p-5">
                <h2 className="display-4">DevTech Solutions Vision</h2>
                <p>
                  Our Vision is to help everyone especially students to fix
                  their Computers so that they can used it for their study.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="p-5">
                <img
                  className=" about-img"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWmXsYYLn9FLYwbc15EjicuH7VDTkIOFYg&usqp=CAU"
                  alt="aboutus.png"
                />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <h2 className="display-4">DevTech Solutions Mission</h2>
                <p>
                  Our Mission is not only to help everyone or every students to
                  fix their Computers. But our Mission is to convert them as
                  professionals by the help of their computers to finish their
                  studies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
