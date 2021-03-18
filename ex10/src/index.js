function myFunction() {
  var myMusic = {
    001: {
      artist: "Billy Joel",
      title: "Piano Man",
      release_year: 1973,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP",
      },
      gold: true,
    },
    002: {
      // Add a record here
      artist: "Dino Merlin",
      title: "Sredinom",
      release_year: 2000,
      formats: {
        1: "MP3",
        2: "Vave",
        3: "Audio",
      },
      gold: false,
    },
  };
  return myMusic;
}
console.log(myFunction()[2]);
module.exports = myFunction;
