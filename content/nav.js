// Switch to JSON when next.js adds support for getStaticProps in _app.js

export default {
  sections: [
    { name: "Home", path: "/", subSections: [] },
    {
      name: "Work",
      path: "/work",
      subSections: [
        { name: "Quadio", path: "/work/quadio" },
        { name: "Upstatement", path: "/work/upstatement" },
        { name: "HubSpot", path: "/work/hubspot" },
        { name: "Double Negative", path: "/work/double-negative" },
        { name: "Mass Hike", path: "/work/mass-hike" },
        { name: "Brain Arts", path: "/work/brain-arts" },
        { name: "Alignable", path: "/work/alignable" },
      ],
    },
    {
      name: "About",
      path: "/about",
      subSections: [{ name: "Contact", path: "/about#contact" }],
    },
  ],
  colorsHeader: "Colors",
  textColor: "Text Color",
  backgroundColor: "Background Color",
  footerSourceText: "View Source",
  footerSourceUrl: "https://github.com/camden11/portfolio",
};
