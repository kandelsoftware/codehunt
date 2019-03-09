import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      productLists: [
        {
          id: 1,
          name: "code4startup",
          link: "https://coder.com/",
          media:
            "https://www.codecademy.com/webpack/e908164f059c81faded2866ab983e950.png",
          upvote: 169,
          description: "code for everyone",
          maker: {
            name: "sila",
            avatar:
              "https://www.codecademy.com/webpack/1ca54a931e939a92042749dc8e8036d7.png"
          }
        },
        {
          id: 2,
          name: "codecademy",
          link: "https://www.codecademy.com",
          media:
            "https://www.codecademy.com/webpack/e908164f059c81faded2866ab983e950.png",
          upvote: 169,
          description: "code for startup",
          maker: {
            name: "silla",
            avatar:
              "https://www.codecademy.com/webpack/01af230155dad200726d7edb6e202e8b.jpg"
          }
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <header>
          <img src="/img/banner.jpg" width="100%" alt="banner " />
        </header>
        <section>
          <section className="container">
            <ul className="product-list">
              <li className="product-item">
                <a href="upvote" className="upvote-button" alt="upvote">
                  <span>
                    <i className="fa fa-sort-asc" />
                  </span>
                  <br />
                  {this.state.productLists[0].upvote}
                </a>
              </li>
            </ul>
            <h2>ProductLists</h2>
          </section>
        </section>
      </div>
    );
  }
}
