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
          description: "",
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
          description: "",
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
          description: "",
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
          description: "",
        },
      ],
    },
  ];
};
