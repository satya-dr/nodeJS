const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  console.log("Hoter page get", req.url, req.method);
  res.render("addHome", { pageTitle: "Add home" });
  // res.sendFile(path.join(rootPath,'views','addHome.html'));
};
exports.postAddHome = (req, res, next) => {
  const { houseName, number, price, location, rating, imageUrl } = req.body;
  const home = new Home(houseName, number, price, location, rating, imageUrl);
  home.save();

  res.render("homeAdded", { pageTitle: "Home Added Success full" });
  // res.sendFile(path.join(rootPath,'views','homeAdded.html'));
};

exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("home", {
      registeredHomes: registeredHomes,
      pageTitle: "Home Page",
    });
  });

  //  res.sendFile(path.join(rootPath,'views','home.ejs'));
};
