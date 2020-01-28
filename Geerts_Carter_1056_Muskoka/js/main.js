//// this is a self-invoking anonymous function (IIFE/module)

(() => {
  // print("some message");
  console.log("Hello from JavaScript");

  // find the button element on the page by its ID with JavaScript
  let theButton = document.querySelector("#myButton"),
      theHeading = document.querySelector('h1'),
  }

  function toggleSelected() {
    debugger;
     this.classList.toggle('selected');
  }

  // log the id of the svg to the console when a user hovers on it
  function logSVG() {
    console.log(this.id);
  }

})();
