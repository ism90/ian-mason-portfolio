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
            "The project is built in React and uses Firebase for hosting and authorization. The project ran for four weeks, with each week taking the form of a sprint with a new product owner assigned. Each sprint ended with a demo to the clients.",
          description2:
            "The project is built in React and uses Firebase for hosting and authorization. The project ran for four weeks, with each week taking the form of a sprint with a new product owner assigned. Each sprint ended with a demo to the clients.",
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
