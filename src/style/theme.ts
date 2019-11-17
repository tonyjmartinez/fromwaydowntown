const MasterTheme = {
  buttonColor: "shadyLady"
};

module.exports = {
  darkTheme: {
    ...MasterTheme,
    mainColor: "#00D1B2",
    secondaryColor: "#363636",
    backgroundColor: "grey"
  },
  lightTheme: {
    ...MasterTheme,
    mainColor: "#363636",
    secondaryColor: "#F5F5F5",
    backgroundColor: "blue"
  }
};