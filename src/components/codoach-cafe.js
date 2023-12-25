import React from "react";
import "./cafe.css";

function Cafe() {
  return (
    <div>
      <body>
        <header>
          <h1>Welcome to Codoach Café!</h1>
          <nav>
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <section id="about">
          <h2>About Us</h2>
          <p>
            We're a small café at the heart of the tech city, serving fresh
            coffee and code!
          </p>
        </section>
        <section id="menu">
          <h2>Menu</h2>
          <ul>
            <li>Espresso - $2</li>
            <li>Latte - $3</li>
            <li>Cappuccino - $3</li>
          </ul>
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <p>Email us at hello@codoachcafe.com</p>
        </section>
        <footer>
          <p>&copy; 2023 Codoach Café. All rights reserved.</p>
        </footer>
      </body>
    </div>
  );
}

export default Cafe;
