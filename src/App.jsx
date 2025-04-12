import "./App.css";
import React from "react";
import Logo from "./assets/Logo (1).png";
import firstSecImg from "./assets/Hero area Image.png";
import IconSecondSld from "./assets/icon.png";
import IconSecondSld2 from "./assets/icon (1).png";
import IconSecondSld3 from "./assets/image.png";
import IconSecondSld4 from "./assets/image copy.png";
import thirdImg from "./assets/Image (31).png";
import iconForBtn from "./assets/Polygon 1.png";
import iconFifth from "./assets/icon (2).png";
import iconFifth2 from "./assets/icon (3).png";
import iconFifth3 from "./assets/icon (4).png";
import iconFifth4 from "./assets/icon (5).png";
import iconFifth5 from "./assets/icon (6).png";
import iconFifth6 from "./assets/icon (7).png";
import endStyle from "./assets/Style.png";
import logoCom from "./assets/Logo (2).png";
import imgDis from "./assets/Image (32).png";
import socialIcon from './assets/Icon (8).png'

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <img src={Logo} alt="" />
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>The Team</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
          <button className="navBtn">Sign Up</button>
        </nav>
        <section className="firstSection">
          <aside className="firstSecA">
            <h1>
              <span className="changeColorH">Make</span> a Creative solutions
              for your Creative<span className="changeColorH"> ideas.</span>
            </h1>
            <p className="firstSecP">
              We are here to give you effective ideas. We help the brands to
              become what they want.{" "}
            </p>
            <button className="firstSecBtn">Get Started</button>
          </aside>
          <img className="firstSecImg" src={firstSecImg} alt="" />
        </section>
      </header>
      <section className="secondSection">
        <h2 className="secondH">We provide great services</h2>
        <p className="secondP">
          We help people to think independent. Be the boss of your brand and be
          the <br /> storyteller. An appropriate approach.
        </p>
        <div className="divForBox">
          <article className="boxs">
            <img src={IconSecondSld} alt="" />
            <h3>Web Design</h3>
            <p>Powerful creations for the practice safe design.</p>
          </article>
          <article className="boxs">
            <img src={IconSecondSld2} alt="" />
            <h3>Identity & Branding</h3>
            <p>Powerful creations for the practice safe design.</p>
          </article>
          <article className="boxs">
            <img src={IconSecondSld3} alt="" />
            <h3>Print and Packaging</h3>
            <p>Powerful creations for the practice safe design.</p>
          </article>
          <article className="boxs">
            <img src={IconSecondSld4} alt="" />
            <h3>Content Writing</h3>
            <p>Powerful creations for the practice safe design.</p>
          </article>
        </div>
      </section>
      <section className="thirdSection">
        <aside className="asideThirdSection">
          <h2>Johnatan Doe </h2>
          <p className="marketing">Marketing Specialist ---------</p>
          <p className="thirdP">
            To make your web design company famous in the little we are here to
            provide you as many as catchy and useful web design company will
            surely help your company.
          </p>
          <button className="thirdBtn">Learn More</button>
        </aside>
        <img className="thirdImg" src={thirdImg} alt="" />
      </section>
      <section className="fourthSection">
        <h2>Watch how we work</h2>
        <p>
          Capture more customers with a great brand recall. Whether you need a
          tising or as a tagline for <br /> your business, our slogan generator
          will help you come up with us.
        </p>
        <button>
          <img src={iconForBtn} alt="" />
        </button>
      </section>
      <section className="fifthSection">
        <h2 className="fifthH">Best features in the world</h2>
        <p className="fifthP">
          Capture more customers wd recall. Whether you need a tising or as a
          tagline for you. Capture more <br /> customers wd recall. Whether you
          need a tising or as a tagline for you.
        </p>
        <div className="boxForArticle">
          <article className="boxsFifth">
            <img src={iconFifth} alt="" />
            <h3>Sleek and smooth animation</h3>
            <p>
              Powerful creations for the practice safe design creations for the
              prac.
            </p>
            <img src={endStyle} alt="" />
          </article>
          <article className="boxsFifth">
            <img src={iconFifth2} alt="" />
            <h3>Crafted with detail</h3>
            <p>
              Powerful creations for the practice safe design creations for the
              prac.
            </p>
            <img src={endStyle} alt="" />
          </article>
          <article className="boxsFifth">
            <img src={iconFifth3} alt="" />
            <h3>Save your time</h3>
            <p>
              Powerful creations for the practice safe design creations for the
              prac.
            </p>
            <img src={endStyle} alt="" />
          </article>
          <article className="boxsFifth">
            <img src={iconFifth4} alt="" />
            <h3>Responsive on any device</h3>
            <p>
              Powerful creations for the practice safe design creations for the
              prac.
            </p>
            <img src={endStyle} alt="" />
          </article>
          <article className="boxsFifth">
            <img src={iconFifth5} alt="" />
            <h3>Easy to customize</h3>
            <p>
              Powerful creations for the practice safe design creations for the
              prac.
            </p>
            <img src={endStyle} alt="" />
          </article>
          <article className="boxsFifth">
            <img src={iconFifth6} alt="" />
            <h3>Quickly effective support</h3>
            <p>
              Powerful creations for the practice safe design creations for the
              prac.
            </p>
            <img src={endStyle} alt="" />
          </article>
        </div>
      </section>
      <section className="sixthSection">
        <img src={logoCom} alt="" />
        <p className="sixthP">
          “Always a pleasure to work with The Agency Creative. Such <br />{" "}
          professional and happy people and you know you’ll receive a quick{" "}
          <br /> innovative and no fuss service.”
        </p>
        <div className="boxInfo">
          <img src={imgDis} alt="" />
          <aside>
            <h3 className="sixthH">Johnatan Doe</h3>
            <p>Web Designer</p>
          </aside>
        </div>
      </section>
      <section className="seventhSection">
        <h2>People have tried to predict the future since the dawn of time.</h2>
        <button className="firstSecBtn">Get Started</button>
      </section>
      <footer>
        <div className="footer">
          <div className="boxFooter">
            <h2>Freelancer</h2>
            <h3 className="forPrice">
              <span className="price">$19</span>/mo
            </h3>
            <p>5 Psd fles included</p>
            <p>24 hours free support</p>
            <p>Multiple features installed</p>
            <p>100 Elements PSD + Al</p>
            <button className="btnFooter">Subscribe</button>
          </div>
          <div className="boxFooter">
            <h2>Corporate</h2>
            <h3 className="forPrice">
              <span className="price">$24</span>/mo
            </h3>
            <p>5 Psd fles included</p>
            <p>24 hours free support</p>
            <p>Multiple features installed</p>
            <p>100 Elements PSD + Al</p>
            <button className="btnFooter">Subscribe</button>
          </div>
          <div className="boxFooter">
            <h2>Agency</h2>
            <h3 className="forPrice">
              <span className="price">$25</span>/mo
            </h3>
            <p>5 Psd fles included</p>
            <p>24 hours free support</p>
            <p>Multiple features installed</p>
            <p>100 Elements PSD + Al</p>
            <button className="btnFooter">Subscribe</button>
          </div>
          <div className="boxFooter">
            <h2>Enterprise</h2>
            <h3 className="forPrice">
              <span className="price">$15</span>/mo
            </h3>
            <p>5 Psd fles included</p>
            <p>24 hours free support</p>
            <p>Multiple features installed</p>
            <p>100 Elements PSD + Al</p>
            <button className="btnFooter">Subscribe</button>
          </div>
        </div>
        <div className="finished">
          <ul>
            <li>Home</li>
            <li>Privacy</li>
            <li>Terms & Conditions</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
          <img src={socialIcon} alt="" />
        </div>
      </footer>
    </div>
  );
};

export default App;
