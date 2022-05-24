//Import Images
import Lujam from "./assets/images/Lujam.png";
import ConnectFour from "./assets/images/ConnectFour.png";
import Punk from "./assets/images/Punk.png";
import Calc from "./assets/images/Calc.png";
import Morse from "./assets/images/Morse.png";

export const ProjectState = () => {
  return [
    {
      title: "Lujam - Client Project",
      mainImg: Lujam,
      url: "/ian-mason-portfolio/projects/lujam",
      details: [
        {
          title: "Details",
          description1:
            "As part of the _nology software developer course, this project demonstrated possible design changes for a client's dashboard. The project ran for four weeks, with each week taking the form of a sprint, and pair programming with new peers each sprint. Each sprint ended with a demo to the clients. Trello was used to manage workflow. A git branching strategy was used to work on multiple features. Once a pull request was completed the feature would be added to the codebase.",
          description2:
            "Throughout the four weeks, I worked on the header component design, the login page and it's functionality using Firebase, secure routing for the site with React Router, and the individual device page, including map functionality.",
          code: "https://github.com/ism90/jersey-client-project",
          live: "https://lujam-jersey.web.app/",
        },
      ],
    },
    {
      title: "Connect Four",
      mainImg: ConnectFour,
      url: "/ian-mason-portfolio/projects/connect-four",
      details: [
        {
          title: "Details",
          description1:
            "A browser based game created in HTML, CSS and JavaScript for _nology week 5. Styled with SCSS and using BEM naming conventions, with a responsive layout and animations for disc drops.",
          description2:
            "I particularly wanted to develop my understanding of HTML DOM elements, classList manipulation, arrays, and class methods.",

          code: "https://github.com/ism90/connect-four",
          live: "https://ism90.github.io/connect-four/",
        },
      ],
    },
    {
      title: "Punk API",
      mainImg: Punk,
      url: "/ian-mason-portfolio/projects/punk-api",
      details: [
        {
          title: "Details",
          description1:
            "A website built in React using the Punk API, with search and filtering functionality, for _nology course week 7.",
          description2:
            "The project requirements were to build a website in React with search and filtering functionality for Brewdog's Punk API, following a component tree provided in the brief. Once this functionality was implemented, I added further filtering options for bitterness, smokiness and some food pairings.",

          code: "https://github.com/ism90/beers-api",
          live: "https://ism90.github.io/beers-api/",
        },
      ],
    },
    {
      title: "JS Calculator",
      mainImg: Calc,
      url: "/ian-mason-portfolio/projects/js-calculator",
      details: [
        {
          title: "Details",
          description1:
            "A simple calculator created in vanilla JavaScript for _nology course week 4. Styling with SCSS, utilising CSS grid and a responsive design for mobile and tablet.",
          description2: "E2E tested with Cypress",
          code: "https://github.com/ism90/simple-JS-calculator",
          live: "https://ism90.github.io/simple-JS-calculator/",
        },
      ],
    },
    {
      title: "Morse Code Translator",
      mainImg: Morse,
      url: "/ian-mason-portfolio/projects/morse-code-translator",
      details: [
        {
          title: "Details",
          description1:
            "Morse Code Translator developed Fri-Monday as a challenge for _nology course. Objectives included taking a Test Driven Development approach. The translator detects the input language (Morse Code or English) and translates accordingly. This was achieved with Object Key Value pairs and a constructor class. A third party library to play Morse sound was also added.",
          description2: "",
          code: "https://github.com/ism90/morse-translator",
          live: "https://ism90.github.io/morse-translator/",
        },
      ],
    },
  ];
};
