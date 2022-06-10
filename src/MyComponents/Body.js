import React from "react";

export default function Body() {
  return (
    <div>
      <section class='scroll-news'>
        <div class='container-fluid scroll'>
          <marquee>
            <p>
              NIT Durgapur ranked 6th in all NITs and 29th in NIRF Engineering
              Institute 2021
            </p>
          </marquee>
        </div>
      </section>
      <section class='slider-section'>
        <div class='container-fluid carousel'>
          <div class='row'>
            <div class='col-lg-12'>
              <div class='card blue-gradient main-slider'>
                <div
                  id='carouselExampleIndicators'
                  class='carousel slide'
                  data-bs-ride='true'
                >
                  <div class='carousel-indicators'>
                    <button
                      type='button'
                      data-bs-target='#carouselExampleIndicators'
                      data-bs-slide-to='0'
                      class='active'
                      aria-current='true'
                      aria-label='Slide 1'
                    ></button>
                    <button
                      type='button'
                      data-bs-target='#carouselExampleIndicators'
                      data-bs-slide-to='1'
                      aria-label='Slide 2'
                    ></button>
                    <button
                      type='button'
                      data-bs-target='#carouselExampleIndicators'
                      data-bs-slide-to='2'
                      aria-label='Slide 3'
                    ></button>
                  </div>
                  <div class='carousel-inner'>
                    <div class='carousel-item active'>
                      <img
                        src='https://nitdgp.ac.in/uploads/academic_1550x51721.jpg'
                        class='d-block w-100'
                        alt='NIT Durgapur ranked 6th in all NITs'
                      />
                    </div>
                    <div class='carousel-item'>
                      <img
                        src='https://nitdgp.ac.in/uploads/WhatsApp_Image_2022-03-31_at_5_02_37_PM.jpeg'
                        class='d-block w-100'
                        alt='Pariksha pe Charcha'
                      />
                    </div>
                    <div class='carousel-item'>
                      <img
                        src='https://nitdgp.ac.in/uploads/09.jpg'
                        class='d-block w-100'
                        alt='Inauguration'
                      />
                    </div>
                  </div>
                  <button
                    class='carousel-control-prev'
                    type='button'
                    data-bs-target='#carouselExampleIndicators'
                    data-bs-slide='prev'
                  >
                    <span
                      class='carousel-control-prev-icon'
                      aria-hidden='true'
                    ></span>
                    <span class='visually-hidden'>Previous</span>
                  </button>
                  <button
                    class='carousel-control-next'
                    type='button'
                    data-bs-target='#carouselExampleIndicators'
                    data-bs-slide='next'
                  >
                    <span
                      class='carousel-control-next-icon'
                      aria-hidden='true'
                    ></span>
                    <span class='visually-hidden'>Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class='navigation-section'>
        <div class='container-fluid menu-container'>
          <tr>
            <td>
              {" "}
              <br />{" "}
            </td>
          </tr>
          <div class='row'>
            <div class='col'>
              <div class='card'>
                <div class='btn-group'>
                  <button
                    type='button'
                    class='btn btn-primary btn-lg dropdown-toggle'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    Academics
                  </button>
                  <ul class='dropdown-menu'>
                    <li>
                      <a class='dropdown-item' href='/#'>
                        Academic Research
                      </a>
                    </li>
                    <li>
                      <a class='dropdown-item' href='/#'>
                        Academic Courses
                      </a>
                    </li>
                    <li>
                      <a class='dropdown-item' href='/#'>
                        Accreditation
                      </a>
                    </li>
                    <li>
                      <hr class='dropdown-divider' />
                    </li>
                    <li>
                      <a class='dropdown-item' href='/#'>
                        Convocation
                      </a>
                    </li>
                    <li>
                      <a class='dropdown-item' href='/#'>
                        NIRF
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class='col'>
              <div class='card'>
                <div class='btn-group'>
                  <button
                    type='button'
                    class='btn btn-danger  btn-lg dropdown-toggle'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    Administration
                  </button>
                  <ul class='dropdown-menu'>
                    <li>
                      <a class='dropdown-item' href='/#'>
                        Directors
                      </a>
                    </li>
                    <li>
                      <a class='dropdown-item' href='/#'>
                        Deans
                      </a>
                    </li>
                    <li>
                      <a class='dropdown-item' href='/#'>
                        Heads
                      </a>
                    </li>
                    <li>
                      <a class='dropdown-item' href='/#'>
                        Senate
                      </a>
                    </li>
                    <li>
                      <a class='dropdown-item' href='/#'>
                        Officers
                      </a>
                    </li>
                    <li>
                      <hr class='dropdown-divider' />
                    </li>
                    <li>
                      <a class='dropdown-item' href='/#'>
                        BWC & IFC
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class='col'>
              <div class='card'>
                <div class='btn-group'>
                  <button
                    type='button'
                    class='btn btn-success btn-lg dropdown-toggle'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    Admission
                  </button>
                  <ul class='dropdown-menu'>
                    <li>
                      <a class='dropdown-item' href='/#'>
                        Admission 2021
                      </a>
                    </li>
                    <li>
                      <a class='dropdown-item' href='/#'>
                        Admission 2022
                      </a>
                    </li>
                    <li>
                      <a class='dropdown-item' href='/#'>
                        NIT Durgapur at a glance
                      </a>
                    </li>
                    <li>
                      <hr class='dropdown-divider' />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class='col'>
              <div class='card'>
                <div class='btn-group'>
                  <button
                    type='button'
                    class='btn btn-warning btn-lg dropdown-toggle'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    Research and Collaboration
                  </button>
                  <ul class='dropdown-menu'>
                    <li>
                      <a class='dropdown-item' href='/#'>
                        Achievements
                      </a>
                    </li>
                    <li>
                      <a class='dropdown-item' href='/#'>
                        BRICS
                      </a>
                    </li>
                    <li>
                      <a class='dropdown-item' href='/#'>
                        Collaboration
                      </a>
                    </li>
                    <li>
                      <hr class='dropdown-divider' />
                    </li>
                    <li>
                      <a class='dropdown-item' href='/#'>
                        IPR
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <tr>
            <td>
              {" "}
              <br />{" "}
            </td>
          </tr>

          <div class='row'>
            <div class='col'>
              <div class='card'>
                <div class='btn-group'>
                  <button
                    type='button'
                    class='btn btn-dark btn-lg dropdown-toggle'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    Facilities
                  </button>
                  <ul class='dropdown-menu'>
                    <li>
                      <a class='dropdown-item' href='/#'>
                        Centers
                      </a>
                    </li>
                    <li>
                      <a class='dropdown-item' href='/#'>
                        Medical Unit
                      </a>
                    </li>
                    <li>
                      <a class='dropdown-item' href='/#'>
                        Banks
                      </a>
                    </li>
                    <li>
                      <hr class='dropdown-divider' />
                    </li>
                    <li>
                      <a class='dropdown-item' href='/#'>
                        Post Office
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class='col'>
              <div class='card'>
                <div class='btn-group'>
                  <button
                    type='button'
                    class='btn btn-success btn-lg dropdown-toggle'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    Information
                  </button>
                  <ul class='dropdown-menu'>
                    <li>
                      <a class='dropdown-item' href='/#'>
                        About Us
                      </a>
                    </li>
                    <li>
                      <a class='dropdown-item' href='/#'>
                        NIT Act and Statues
                      </a>
                    </li>
                    <li>
                      <a class='dropdown-item' href='/#'>
                        Staff Grievance Cell
                      </a>
                    </li>
                    <li>
                      <a class='dropdown-item' href='/#'>
                        Departmental Promotion
                      </a>
                    </li>
                    <li>
                      <hr class='dropdown-divider' />
                    </li>
                    <li>
                      <a class='dropdown-item' href='/#'>
                        Mission & Vision
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class='col'>
              <div class='card'>
                <div class='btn-group'>
                  <button
                    type='button'
                    class='btn btn-primary btn-lg dropdown-toggle'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    Students & Alumni
                  </button>
                  <ul class='dropdown-menu'>
                    <li>
                      <a class='dropdown-item' href='/#'>
                        Achievements
                      </a>
                    </li>
                    <li>
                      <a class='dropdown-item' href='/#'>
                        Activities and Sports
                      </a>
                    </li>
                    <li>
                      <a class='dropdown-item' href='/#'>
                        Clubs
                      </a>
                    </li>
                    <li>
                      <a class='dropdown-item' href='/#'>
                        Research
                      </a>
                    </li>
                    <li>
                      <hr class='dropdown-divider' />
                    </li>
                    <li>
                      <a class='dropdown-item' href='/#'>
                        Notices
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class='col'>
              <div class='card'>
                <div class='btn-group'>
                  <button
                    type='button'
                    class='btn btn-danger btn-lg dropdown-toggle'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    Institutional Activities
                  </button>
                  <ul class='dropdown-menu'>
                    <li>
                      <a class='dropdown-item' href='/#'>
                        Career Development Center
                      </a>
                    </li>
                    <li>
                      <a class='dropdown-item' href='/#'>
                        Covid 19 informations
                      </a>
                    </li>
                    <li>
                      <a class='dropdown-item' href='/#'>
                        NCC
                      </a>
                    </li>
                    <li>
                      <hr class='dropdown-divider' />
                    </li>
                    <li>
                      <a class='dropdown-item' href='/#'>
                        Fit India Movements
                      </a>
                    </li>
                    <li>
                      <a class='dropdown-item' href='/#'>
                        Newsletter
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
