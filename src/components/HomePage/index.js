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
                <img
                  src={this.state.productLists[0].media}
                  alt=""
                  className="product-item-media"
                />
                <section className="product-item-info">
                  <a href="" className="">
                    <h2>{this.state.productLists[0].name}</h2>
                  </a>
                  <p>{this.state.productLists[0].description}</p>
                  <a href="#">
                    <img
                      src={this.state.productLists[0].maker.avatar}
                      alt=""
                      className="small-avatar"
                    />
                  </a>
                </section>
                <a
                  href={this.state.productLists[0].link}
                  className="product-item-link"
                >
                  <span>
                    <i className=" fa fa-external-link" />
                  </span>
                </a>
              </li>

              <li className="product-item">
                <a href="upvote" className="upvote-button" alt="upvote">
                  <span>
                    <i className="fa fa-sort-asc" />
                  </span>
                  <br />
                  {this.state.productLists[1].upvote}
                </a>
                <img
                  src={this.state.productLists[1].media}
                  alt=""
                  className="product-item-media"
                />
                <section className="product-item-info">
                  <a href="" className="">
                    <h2>{this.state.productLists[1].name}</h2>
                  </a>
                  <p>{this.state.productLists[1].description}</p>
                  <a href="#">
                    <img
                      src={this.state.productLists[1].maker.avatar}
                      alt=""
                      className="small-avatar"
                    />
                  </a>
                </section>
                <a
                  href={this.state.productLists[0].link}
                  className="product-item-link"
                >
                  <span>
                    <i className=" fa fa-external-link" />
                  </span>
                </a>
              </li>
            </ul>
          </section>
        </section>
      </div>
    );
  }
}
