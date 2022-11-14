import HomeNavbar from "../components/frontendComponent/Navbar";
import Footer from "../components/frontendComponent/Footer";
import React from "react";
import { useNavigate } from "react-router-dom";

function Services() {
  // for modal

  const navigate = useNavigate();
  const OnBook = () => {
    navigate("/contact");
  };

  return (
    <>
      <section>
        <HomeNavbar />
        <div id="services" className="heading services-section">
          <h1>Our Services</h1>
        </div>

        <div className="content services-section services-content">
          {/* content1 */}
          <div className="card mb-3 p-2 shadow  ">
            <img
              src="https://media.istockphoto.com/vectors/computer-repair-concept-vector-id1336601182?k=20&m=1336601182&s=612x612&w=0&h=9PmyhuR1RX-S4I4Y0q1B2jKgv_ISlPLdgwNQVwWQR7I="
              className="card-img-top"
              alt="..."
            />
            <div className="card-body service-card">
              <h5 className="card-title service-card">Format and Reformat</h5>
              <p className="card-price service-card">Php 299</p>
              {/* modal starts here */}
              {/* <!-- Button trigger modal --> */}
              <button
                type="button"
                class=" hero-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Read more...
              </button>

              {/* <!-- Modal --> */}
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Services
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div className="content">
                        <img
                          className="card-img-top"
                          src="https://media.istockphoto.com/vectors/computer-repair-concept-vector-id1336601182?k=20&m=1336601182&s=612x612&w=0&h=9PmyhuR1RX-S4I4Y0q1B2jKgv_ISlPLdgwNQVwWQR7I="
                          alt="service.img"
                        />
                        <div className="card-body mx-1 service-card">
                          <h5 className="card-title service-card">
                            Computer format and Reformat
                          </h5>
                          <p className="card-text service-card">
                            This will erase all of your data so we need to
                            backup first before this procedure. It will help
                            your computer to be fast and reliable.
                          </p>
                          <p className="card-price service-card">Php 299</p>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class=" hero-btn"
                        data-bs-dismiss="modal"
                        onClick={OnBook}
                      >
                        Book now
                      </button>
                      <button
                        type="button"
                        data-bs-dismiss="modal"
                        class="btn btn-secondary"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* modal ends here */}
            </div>
          </div>
          {/* endcontent1 */}

          {/* content2 */}
          <div className="card mb-3 p-2 shadow ">
            <img
              src="https://img.freepik.com/free-vector/system-administrator-technical-work-with-server-software-installation-configuration-computer-systems-networks-flat-vector-illustration_613284-1460.jpg?w=2000"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body service-card">
              <h5 className="card-title service-card">Software Installation</h5>
              <p className="card-price service-card">Php 349</p>
              {/* modal starts here */}
              {/* <!-- Button trigger modal --> */}
              <button
                type="button"
                class=" hero-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal1"
              >
                Read more...
              </button>

              {/* <!-- Modal --> */}
              <div
                class="modal fade"
                id="exampleModal1"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Services
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div className="content">
                        <img
                          className="card-img-top"
                          src="https://img.freepik.com/free-vector/system-administrator-technical-work-with-server-software-installation-configuration-computer-systems-networks-flat-vector-illustration_613284-1460.jpg?w=2000"
                          alt="service.img"
                        />
                        <div className="card-body mx-1 service-card">
                          <h5 className="card-title service-card">
                            Software Installation
                          </h5>
                          <p className="card-text service-card">
                            Installing the software you might need on studies
                            and on your work. We will guarantee you that it is
                            authentic and secure.
                          </p>
                          <p className="card-price service-card">Php 349</p>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class=" hero-btn"
                        data-bs-dismiss="modal"
                        onClick={OnBook}
                      >
                        Book now
                      </button>
                      <button
                        type="button"
                        data-bs-dismiss="modal"
                        class="btn btn-secondary"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* modal ends here */}
            </div>
          </div>
          {/* endcontent2 */}

          {/* content3 */}
          <div className="card mb-3 p-2 shadow ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz_lVd6Dsbe9M4BYvbwBssoT3N9daMDeVBFw&usqp=CAU"
              className="card-img-top"
              alt="Ssd-upgrade.img"
            />
            <div className="card-body service-card">
              <h5 className="card-title service-card">
                SSD Upgrade and Installation
              </h5>
              <p className="card-price service-card">Php 299</p>
              {/* modal starts here */}
              {/* <!-- Button trigger modal --> */}
              <button
                type="button"
                class=" hero-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
              >
                Read more...
              </button>

              {/* <!-- Modal --> */}
              <div
                class="modal fade"
                id="exampleModal2"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Services
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div className="content">
                        <img
                          className="card-img-top"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz_lVd6Dsbe9M4BYvbwBssoT3N9daMDeVBFw&usqp=CAU"
                          alt="service.img"
                        />
                        <div className="card-body mx-1 service-card">
                          <h5 className="card-title service-card">
                            SSD Upgrade and Installation
                          </h5>
                          <p className="card-text service-card">
                            Installing SSD on your computer gives you a big
                            upgrade in terms of speed. It is 6x faster than the
                            usual HDD.
                          </p>
                          <p className="card-price service-card">Php 299</p>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class=" hero-btn"
                        data-bs-dismiss="modal"
                        onClick={OnBook}
                      >
                        Book now
                      </button>
                      <button
                        type="button"
                        data-bs-dismiss="modal"
                        class="btn btn-secondary"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* modal ends here */}
            </div>
          </div>

          {/* endcontent3 */}
          {/* content4 */}
          <div className="card mb-3 p-2 shadow ">
            <img
              src="https://media.istockphoto.com/vectors/computer-service-icon-vector-id506903730?k=20&m=506903730&s=612x612&w=0&h=ecrwFlKO0n3JD83pm5nsRD0n2cjkB1jkt6nQ24NgB38="
              className="card-img-top"
              alt="Ssd-upgrade.img"
            />
            <div className="card-body service-card">
              <h5 className="card-title service-card">Computer Checkup</h5>
              <p className="card-price service-card">Php 199</p>
              {/* modal starts here */}
              {/* <!-- Button trigger modal --> */}
              <button
                type="button"
                class=" hero-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal3"
              >
                Read more...
              </button>

              {/* <!-- Modal --> */}
              <div
                class="modal fade"
                id="exampleModal3"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Services
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div className="content">
                        <img
                          className="card-img-top"
                          src="https://media.istockphoto.com/vectors/computer-service-icon-vector-id506903730?k=20&m=506903730&s=612x612&w=0&h=ecrwFlKO0n3JD83pm5nsRD0n2cjkB1jkt6nQ24NgB38="
                          alt="service.img"
                        />
                        <div className="card-body mx-1 service-card">
                          <h5 className="card-title service-card">
                            Computer Checkup
                          </h5>
                          <p className="card-text service-card">
                            To ensure the stability and durability of your
                            computers we need to maintain its quality because
                            nowadays computer is our main tool in schools and
                            jobs.
                          </p>
                          <p className="card-price service-card">Php 199</p>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class=" hero-btn"
                        data-bs-dismiss="modal"
                        onClick={OnBook}
                      >
                        Book now
                      </button>
                      <button
                        type="button"
                        data-bs-dismiss="modal"
                        class="btn btn-secondary"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* modal ends here */}
            </div>
          </div>
          {/* endcontent4 */}

          {/* content5 */}
          <div className="card mb-3 p-2 shadow">
            <img
              src="https://img.freepik.com/free-vector/computer-repair-support-service-isometric-illustration_1284-57663.jpg?w=2000"
              className="card-img-top"
              alt="Ssd-upgrade.img"
            />
            <div className="card-body service-card">
              <h5 className="card-title service-card">Computer Repair</h5>
              <p className="card-price service-card">Php 399</p>
              {/* modal starts here */}
              {/* <!-- Button trigger modal --> */}
              <button
                type="button"
                class=" hero-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal4"
              >
                Read more...
              </button>

              {/* <!-- Modal --> */}
              <div
                class="modal fade"
                id="exampleModal4"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Services
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div className="content">
                        <img
                          className="card-img-top"
                          src="https://img.freepik.com/free-vector/computer-repair-support-service-isometric-illustration_1284-57663.jpg?w=2000"
                          alt="service.img"
                        />
                        <div className="card-body mx-1 service-card">
                          <h5 className="card-title service-card">
                            Computer Repair
                          </h5>
                          <p className="card-text service-card">
                            We will identify, troubleshoot and reolve problems
                            and issues on your faulty computer. We will also
                            identify if it is a software, hardware or network
                            problems.
                          </p>
                          <p className="card-price service-card">Php 399</p>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class=" hero-btn"
                        data-bs-dismiss="modal"
                        onClick={OnBook}
                      >
                        Book now
                      </button>
                      <button
                        type="button"
                        data-bs-dismiss="modal"
                        class="btn btn-secondary"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* modal ends here */}
            </div>
          </div>

          {/* endcontent5 */}
          {/* content6 */}
          <div className="card mb-3 p-2 shadow  ">
            <img
              src="https://previews.123rf.com/images/magurok/magurok1605/magurok160500105/58310932-vector-random-access-memory-set-ram-memory-sticks-computer-data-storage-set-vector-illustration.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body service-card">
              <h5 className="card-title service-card">
                RAM Upgrade and Installation
              </h5>
              <p className="card-price service-card">Php 299</p>
              {/* modal starts here */}
              {/* <!-- Button trigger modal --> */}
              <button
                type="button"
                class=" hero-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal6"
              >
                Read more...
              </button>

              {/* <!-- Modal --> */}
              <div
                class="modal fade"
                id="exampleModal6"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Services
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div className="content">
                        <img
                          className="card-img-top"
                          src="https://previews.123rf.com/images/magurok/magurok1605/magurok160500105/58310932-vector-random-access-memory-set-ram-memory-sticks-computer-data-storage-set-vector-illustration.jpg"
                          alt="service.img"
                        />
                        <div className="card-body mx-1 service-card">
                          <h5 className="card-title service-card">
                            Ram Upgrade and Installation
                          </h5>
                          <p className="card-text service-card">
                            Generally, the faster the RAM, the faster the
                            processing speed. With faster RAM, you increase the
                            speed at which memory transfers information to other
                            components.
                          </p>
                          <p className="card-price service-card">Php 299</p>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class=" hero-btn"
                        data-bs-dismiss="modal"
                        onClick={OnBook}
                      >
                        Book now
                      </button>
                      <button
                        type="button"
                        data-bs-dismiss="modal"
                        class="btn btn-secondary"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* modal ends here */}
            </div>
          </div>
          {/* endcontent6 */}
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Services;
