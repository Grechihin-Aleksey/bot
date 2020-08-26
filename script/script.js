"use strict";

let name = prompt("Какое Ваше имя?");
function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}
DomElement.prototype.ride = function () {
  let i = this.selector.slice(1);
  if (this.selector.startsWith(".")) {
    const div = document.createElement("div");
    div.classList.add(i);
    document.body.append(div);
    div.textContent = name;
    div.style.cssText = `height: ${this.height};
      width: ${this.width};
      background: ${this.bg};
      font-size: ${this.fontSize};`;
  }
  if (this.selector.startsWith("#")) {
    const p = document.createElement("p");
    document.body.append(p);
    let elem = document.querySelectorAll("p");
    console.log(elem);
    elem.forEach((element) => {
      element.setAttribute("id", i);
      element.style.cssText = `height: ${this.height};
      width: ${this.width};
      background: ${this.bg};
      font-size: ${this.fontSize};`;
      element.textContent = name;
    });
  }
};

// let car = new DomElement("#elem", "100px", "100px", "#eee", "20px");
let car_1 = new DomElement(".elem", "400px", "200px", "#eee", "40px");

// car.ride();
car_1.ride();
