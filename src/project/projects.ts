const Cards ="/Cards.png";

export const projects = [
  {
    id: 1,
    title: "E-comerce Rest API",
    description: [
      "This is Restfull API that can help user to purchase products, they can choose the product an pay them with their prefered payment method.  The admin of the app can add new products, remove them and update them.",
      "This app has all major functionalities an e-commerce app needs to serve it's purpose.",
    ],
    image1: Cards,
    image2: Cards,
    githubLink: "https://github.com/atlp-rwanda/e-comm-team-axel25-bn",
    liveWebsite: "https://cypherapi.onrender.com/docs/",
    techStacks: [
      "Typescript",
      "expressjs",
      "Postgres DB",
      "Sequelize ORM",
      "docker",
      "jest",
      "stripe",
    ],
    skillsGained:
      "Building this project has gave me many skills like teamwork skills, collaboration, devops, database design, testing, writting typesafe code, backend using nodejs and express, websockets and increased my experience with git and github.",
  },
  {
    id: 2,
    title: "E-comerce Front-end",
    description: [
      "This is the front-end of above ecommerce API, it has the main features of ecommerce web application like product listing, adding and removing products to cart and payment. adding new product in store and removing them and much more.",
    ],
    image1: Cards,
    image2: Cards,
    githubLink: "https://github.com/atlp-rwanda/e-comm-team-axel25-fe",
    liveWebsite: "https://team-cypher-ecom-main.netlify.app/",
    techStacks: [
      "React",
      "TypeScript",
      "redux",
      "redux toolkit",
      "tailwindcss",
      "socket.io",
      "jest",
      "webpack",
      "storybook",
    ],
    skillsGained:
      "By building this project it helped me to gain UI/UX and front-end skills: wireframes and prototyping with figma, developing robust web applications with react and redux and ducumenting with storybook.",
  },
  {
    id: 3,
    title: "Personal blog Rest API",
    description: [
      "User can create and read blog posts, comment on blog posts and like them, they can also like comments. except reading a blog post all other action require user to be registered and loged in.",
    ],
    image1: Cards,
    image2: Cards,
    githubLink: "https://github.com/musllim/my_brand_be",
    liveWebsite: "https://my-brand-be.onrender.com/api/v1/docs",
    techStacks: [
      "express",
      "mongodb",
      "mongoose",
      "redis",
      "mocha",
      "passport",
      "chai",
      "joi",
    ],
    skillsGained:
      "I learned git and github, test-Driven development, project management tool(pivotal tracker and Trello), clean coding and modern javascript, best Practices for a pragmatic RESTful API, Continuous Integration.",
  },
];
