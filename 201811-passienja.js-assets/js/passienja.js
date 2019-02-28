const passienja = $(".passienja");
const flip = $(passienja).children(); //Adds flip classes to desired elements

$.each(flip, () => {
  $(flip).addClass("flip-container flipper");
});
$(document).ready(() => {
  setTimeout(() => {
    function log(i) {
      $(flip[i]).toggleClass("hover");

      if (i < flip.length) {
        setTimeout(() => {
          i++;
          log(i); //Set your desired flip start delay in ms
        }, 200);
      }
    }

    log(0); //Set your desired flip interval in ms
  }, 100);
});