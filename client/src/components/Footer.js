import React from "react";
import "../assets/stylesheets/footer.css";
const Footer = () => {
  return (
    <>
      <body>
        <footer className="footer">
          <div className="container bottom_border">
            <div className="row">
              <div className=" col-sm-4 col-md col-sm-4  col-12 col">
                <h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>

                <p className="mb10">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
                <p>
                  <i className="fa fa-location-arrow"></i>{" "}
                  <span className="createGap"> 9878/25 sec 9 abc 35</span>
                </p>
                <p>
                  <i className="fa fa-phone"></i>
                  <span className="createGap">+91-9999878398</span>
                </p>
                <p>
                  <i className="fa fa fa-envelope"></i>
                  <span className="createGap">info@example.com</span>
                </p>
              </div>

              <div className=" col-sm-4 col-md  col-6 col">
                <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>

                <ul className="footer_ul_amrc">
                  <li>
                    <a href="http://webenlance.com">Image Rectoucing</a>
                  </li>
                  <li>
                    <a href="http://webenlance.com">Clipping Path</a>
                  </li>
                  <li>
                    <a href="http://webenlance.com">Hollow Man Montage</a>
                  </li>
                  <li>
                    <a href="http://webenlance.com">Ebay & Amazon</a>
                  </li>
                  <li>
                    <a href="http://webenlance.com">Hair Masking/Clipping</a>
                  </li>
                  <li>
                    <a href="http://webenlance.com">Image Cropping</a>
                  </li>
                </ul>
              </div>

              <div className=" col-sm-4 col-md  col-6 col">
                <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>

                <ul className="footer_ul_amrc">
                  <li>
                    <a href="http://webenlance.com">Remove Background</a>
                  </li>
                  <li>
                    <a href="http://webenlance.com">
                      Shadows & Mirror Reflection
                    </a>
                  </li>
                  <li>
                    <a href="http://webenlance.com">Logo Design</a>
                  </li>
                  <li>
                    <a href="http://webenlance.com">Vectorization</a>
                  </li>
                  <li>
                    <a href="http://webenlance.com">Hair Masking/Clipping</a>
                  </li>
                  <li>
                    <a href="http://webenlance.com">Image Cropping</a>
                  </li>
                </ul>
              </div>

              <div className=" col-sm-4 col-md  col-12 col">
                <h5 className="headin5_amrc col_white_amrc pt2">Follow us</h5>

                <ul className="footer_ul2_amrc">
                  <li>
                    <a href="#">
                      <i class="zmdi zmdi-twitter"></i>{" "}
                    </a>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing...
                      <a href="#">https://www.lipsum.com/</a>
                    </p>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="zmdi zmdi-instagram"></i>{" "}
                    </a>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing...
                      <a href="#">https://www.lipsum.com/</a>
                    </p>
                  </li>
                  <li>
                    <a href="#">
                      <i className="zmdi zmdi-facebook"></i>{" "}
                    </a>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing...
                      <a href="#">https://www.lipsum.com/</a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="container">
            <ul className="foote_bottom_ul_amrc">
              <li>
                <a href="http://webenlance.com">Home</a>
              </li>
              <li>
                <a href="http://webenlance.com">About</a>
              </li>
              <li>
                <a href="http://webenlance.com">Services</a>
              </li>
              <li>
                <a href="http://webenlance.com">Pricing</a>
              </li>
              <li>
                <a href="http://webenlance.com">Blog</a>
              </li>
              <li>
                <a href="http://webenlance.com">Contact</a>
              </li>
            </ul>

            <p className="text-center">
              Copyright @2017 | Designed With by{" "}
              <a href="#">Your Company Name</a>
            </p>

            <div className="wrapper">
              <div className="button">
                <div className="icon">
                  <i class="zmdi zmdi-facebook"></i>
                </div>
                <a href="#">
                  <span>Facebook</span>
                </a>
              </div>
              <div className="button">
                <div className="icon">
                  <i class="zmdi zmdi-twitter"></i>
                </div>
                <a href="#">
                  <span>Twitter</span>
                </a>
              </div>
              <div className="button">
                <div className="icon">
                  <i class="zmdi zmdi-instagram"></i>
                </div>
                <a href="#">
                  <span>Instagram</span>
                </a>
              </div>
              <div className="button">
                <div className="icon">
                  <i class="zmdi zmdi-github-alt"></i>
                </div>
                <a href="#">
                  <span>Github</span>
                </a>
              </div>
              <div className="button">
                <div className="icon">
                  <i class="zmdi zmdi-youtube-play"></i>
                </div>
                <a href="https://www.youtube.com/watch?v=sFMRqxCexDk&list=RDsFMRqxCexDk&start_radio=1">
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </>
  );
};
export default Footer;
