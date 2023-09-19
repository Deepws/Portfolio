import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".digitalhouse",
  `Currently working as a Technical Head at IEEE SIESGST
  where our role is to build and maintain the official
  website and conduct various seminars.`,
  "IEEE SIESGST",
  "Technical Head",
  "June 2023 till continue"
);

hoverChangeExperience(
  ".zuplae",
  `Utilized my Front-End Web Development Knowledge by
  building various websites. Been a facilitator and speaker of an offline hands-on
  session. Established a community member and learned ways to
  collaborate in a team.
  `,
  "GDSC SIESGST",
  "Jr. Web and App Coordinator",
  "Aug 2022- Jul 2023"
);

hoverChangeExperience(
  ".contweb",
  `Worked as a freelancer for a startup named Leaf-Coder. Built 3 minor and 1 major web projects.
  Learnt about marketing and client handling.`,
  "Front end Developer",
  "Leaf-Coders",
  "March 2023 to May 2023"
);

hoverChangeExperience(
  ".codigofontetv",
  `Realizei o estágio na ContWeb, uma empresa de contabilidade. 
  Onde pela primeira vez tive experiência com o React. Além do
  desenvolvimento frontend criei os designs da nova plataforma da empresa.`,
  "Developer frontend e UI Designer",
  "ContWeb",
  "Set 2021 - Nov 2021 (3 meses)"
);

hoverChangeDescription(
  ".html",
  "HTML is a markup language, where we mark elements to define what information the page will display."
);
hoverChangeDescription(
  ".css",
  "CSS is a style sheet language made up of “layers”, created for the purpose of styling pages."
);
hoverChangeDescription(
  ".js",
  "JavaScript is a programming language that allows you to implement dynamic elements on web pages."
);
hoverChangeDescription(
  ".sass",
  "Sass is a CSS preprocessor that adds some features that are not available natively."
);
hoverChangeDescription(
  ".react",
  "React is a JavaScript library focused on creating user interfaces in a componetized way."
);
hoverChangeDescription(
  ".next",
  "Next.js is a web framework that enables functionality such as server-side rendering and generating static React-based web sites."
);
hoverChangeDescription(
  ".styled",
  "styled-components is a library that uses the concept of CSS-in-JS, that is, it allows us to write CSS codes within Javascript."
);
hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS is a CSS framework that provides us with utility classes for the purpose of styling pages."
);
hoverChangeDescription(
  ".typescript",
  "TypeScript is a superset of JavaScript that includes features that are not natively present in the language, in addition to making it static."
);
hoverChangeDescription(
  ".radix",
  "Radix is ​​a library that provides accessible, styleless components for creating React applications."
);
hoverChangeDescription(
  ".cypress",
  "Cypress is a framework for end-to-end test automation, which currently uses the JavaScript language."
);
hoverChangeDescription(
  ".storybook",
  "Storybook is a tool that aims to document and test application components"
);
