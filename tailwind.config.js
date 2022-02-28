// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        appBlack: "#29325A",
        appPurple: "#677ACB",
        appSeaBlue: "#6FC9D9",
        applightGray: "#29325A33",
        appDeepGray: "#29325A66",
        appAlmostWhite: "#F2F5FF",
        selectedItemColor: "#29325A66",
        medium: "#CB9134",
        appHigh: "#B93909",
        appProgress: "#677ACB66",
        appHouseKeeping: "#CB916733",
        completed: "#F4FFF2",
        money: "#67CBAC33",
        low: "#6FC9D9",
        appOverdue: "#EFCACA",
        appHouse: "#CB916733",
        family: "#E58D8D33",
        education: "#8A904833",
        work: "#A867CB33",
        travel: "#7367CB33",
      },
      fontFamily: {
        caligra: ["Caligature Hunters", "caliga"],
        vernir: ["Avenir", "vernir"],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("kutty")],
};
