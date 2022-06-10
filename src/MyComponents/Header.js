import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div class='container'>
        <div class='row'>
          <div class='col-1 text-right'>
            <a href='/#'>
              <img
                class='img-fluid'
                src='https://nitdgp.ac.in/front/assets/images/logo.png'
                alt='/#'
              ></img>
            </a>
          </div>
          <div class='col-10'>
            <a href='#/'>
              <img
                class='img-fluid'
                src='https://nitdgp.ac.in/front/assets/images/logotext.png'
                alt='/#'
              ></img>
            </a>
          </div>
        </div>
      </div>
      <div class='search-btn'>
        <div class='col-1'>
          <form class='d-flex' role='search'>
            <input
              class='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button class='btn btn-outline-success' type='submit'>
              Search
            </button>
          </form>
        </div>
      </div>

      <div class='container-fluid'>
        <div class='row'>
          <div class='col-lg-6'>
            <div class='top-menu'>
              <ul class='list-unstyled'>
                <li>
                  <a href='https://nitdgp.ac.in/'>Home</a>
                </li>
                <li>
                  <a href='https://nitdgp.ac.in/p/nirf-1'>NIRF</a>
                </li>
                <li>
                  <a href='/#'>Library</a>
                </li>
                <li>
                  <a href='https://nitdgp.ac.in/acad/promotion'>
                    NITD at a glance
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class='col-lg-6'>
            <div class='top-menu'>
              <ul class='pull-right'>
                <li>
                  <a href='https://mail.google.com/a/nitdgp.ac.in'>Mail</a>
                </li>
                <li>
                  <a href='https://nitdgp.ac.in/p/contact'>Contact</a>
                </li>
                <li>
                  <a href='https://nitdgp.ac.in/hindi'>In Hindi</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
