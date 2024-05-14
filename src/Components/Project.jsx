import React from "react";
import image_1 from "../Images/image_web.jpg";
import image_2 from "../Images/cart-page.png";
import image_3 from "../Images/Resturant.jpg";
import image_4 from "../Images/todoapp.jpg";
import image_5 from "../Images/random-pass.png";
import image_6 from "../Images/bgChange.png";
import Cart from "./Cart";

function Project() {
  return (
    <>
      <div id="project" className="bg-[#061229] text-white py-10 px-10">
        <h1 className="pb-10 text-3xl font-bold text-center">
          Latest <span className="text-[#04dae5] ">Project</span>
        </h1>
        <div className="grid  grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6  grid-flow-row place-items-center">
          <Cart
            title={"Mobile selling Ecommers Website"}
            img={image_1}
            description={
              "I have used filter and reuce and  search functionality in this website and product details page also Cart page and this website is fully responsive"
            }
            live={"https://ar-mobile-ecommers.netlify.app/"}
            github={"https://github.com/md-asfak/Mobile_Ecommers_website"}
          />

          <Cart
            title={"Product Details And Related Product with Same Page"}
            img={image_2}
            description={
              "Through this website we can do product increment and decrement so our price can be lower and higher and we have used same page for related products and this website is fully responsive it is created with htm csc and javascript"
            }
            live={"https://ar-cart-page.netlify.app"}
            github={"https://github.com/md-asfak/Buy_Now_page"}
          />

          <Cart
            title={"Resturant Website"}
            img={image_3}
            description={
              "In this website we have used html css and this website is responsive this website contains home page about page contact page price page"
            }
            live={"https://ar-resturant-web.netlify.app/"}
            github={"https://github.com/md-asfak/Resturant_Web"}
          />

          <Cart
            title={"Todos App"}
            img={image_4}
            description={
              "Through this project I have learned how to delete posts and updates through the Todos app"
            }
            live={"https://ar-todos-app.netlify.app/"}
            github={"https://github.com/md-asfak/Todo-App"}
          />

          <Cart
            title={"Random Password Generator"}
            img={image_5}
            description={
              "Through this project I learned a lot about useState and callback Hook and UseEffect array method random and map through this project"
            }
            live={"https://ar-random-password.netlify.app/"}
            github={"https://github.com/md-asfak/random_password_generator"}
          />

          <Cart
            title={"Background Color Change With RGB Color Copy functionality"}
            img={image_6}
            description={
              "Learned a lot through technology can be small this is my first react project"
            }
            live={"https://ar-random-change.netlify.app/"}
            github={"https://github.com/md-asfak/Mobile_Ecommers_website"}
          />
        </div>
      </div>
    </>
  );
}

export default Project;
