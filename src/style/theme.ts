const MasterTheme = {
  buttonColor: "shadyLady"
};

module.exports = {
  darkTheme: {
    ...MasterTheme,
    mainColor: "#00D1B2",
    secondaryColor: "#363636",
    backgroundColor: "#4A4A4A",
    titleColor: "#00D1B2",
    iconColor: "#FF9800"
  },
  lightTheme: {
    ...MasterTheme,
    mainColor: "#363636",
    secondaryColor: "#F5F5F5",
    backgroundColor: "#DBDBDB",
    titleColor: "#363636",
    iconColor: "#FF5722"
  }
};
