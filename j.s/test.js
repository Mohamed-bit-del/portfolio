// function myFunction() {
//   const x = document.getElementById('myBtn');
//     document.getElementById('sc').style = 'transform: rotatex(180deg);transform: rotatex(180deg);transition: transform 0.6s;backface-visibility: hidden '
// }

// Craete bottem screen mobile 

function mobile() {
  document.getElementById("head-phone-visible").style.left = "0px";
  let x = document.getElementById("head-phone-visible");
  if(x.style.display === "block") {
    x.style.display = "none"
  } else {
    x.style.display = "block"
  }
}

// Creat ul image
filterSelection("all")
function filterSelection(img) {
  var x, y;
  x = document.getElementsByClassName("pic");
  if (img == "all") img = "";
  for (y = 0; y < x.length; y++) {
    removeClass(x[y], "show");
    // console.log("removeClass x[y] " + y ,x[y])
    if (x[y].className.indexOf(img) > -1) addClass(x[y], "show");
  }
}

function addClass(element, name) {
  var arr1;

  arr1 = element.className.split(" ");
    
  if (arr1.indexOf(name) == -1) {element.className += " " + name;}

}

function removeClass(element, name) {

  var i, arr1;

  arr1 = element.className.split(" ");

  while (arr1.indexOf(name) > -1) {
      arr1.splice(arr1.indexOf(name), 1);
  }

  element.className = arr1.join(" ")
}

// const home = document.getElementById('btn-one').addEventListener('click', function myHome(e) {
//     // document.createElement('ananimate');
//     console.log('heloo world')
// });
// const about = document.getElementById('btn-two').addEventListener('click', function myAbout(e) {
//   console.log('heloo world one')
// });
// const resume = document.getElementById('btn-three').addEventListener('click', function myResume(e) {
//   console.log('heloo world two')
// });
// const portfolio = document.getElementById('btn-four').addEventListener('click', function myPortfolio(e) {
//   console.log('heloo world three')
// });
// const blog = document.getElementById('btn-fife').addEventListener('click', function myBlog(e) {
//   console.log('heloo world four')
// });
// const contact = document.getElementById('btn-six').addEventListener('click', function myContact(e) {
//   console.log('heloo world fife')
// });

// function myHome() {
//   document.getElementById('btn-one').className = 'animate';
// }

// function myAbout() {
//   document.getElementById('btn-two').className = 'animate';
// }

// function myResume() {
//   document.getElementById('btn-three').className = 'animate';
// }

// function myPortfolio() {
//   document.getElementById('btn-four').className = 'animate';
// }

// function myBlog() {
//   document.getElementById('btn-fife').className = 'animate';
// }

// function myContact() {
//   document.getElementById('btn-six').className = 'animate';
// }


// // Get the container element


// Active botton 


// Get all buttons with class="btn" inside the container
var btns = document.getElementsByClassName("collection-item");
var section = document.querySelectorAll(".sectionClass");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    
    // current[0].className = current[0].className.replace(" active", "");
    var child = this.querySelector("a");
    var editChild = child.getAttribute("href").replace("#",'')
    // console.log(editChild)
    var current="",next="";
    
    // console.log("i",i)

    let animeTop = document.querySelectorAll(".body-page").className = "'page-rotatepullTop', 'page-rotatepullBottom'";
    // let animeBottom = document.querySelectorAll(".body-page").className = "page-rotatepullBottom";
    console.log("animeTop", animeTop)

    for(let m = 0 ; m < section.length ; m++){
      if( section[m].classList.contains("page-active") ){
        // helperSetClass(m,i)
        m > i ? current = "'page-rotatePushTop', 'page-rotatepullTop'" : current = "'page-rotatePushBottom', 'page-rotatepullBottom'";
        m < i ? next = "'page-rotatePushBottom', 'page-rotatepullBottom'" : next = "'page-rotatePushTop', 'page-rotatepullTop'";
        console.log("current", current)
        console.log("next", next)
      }
    }

    // console.log("current",current)
    // console.log("next",next)

    for(var x = 0 ; x < section.length ; x++){
      element=section[x]

      if(editChild == element.getAttribute("id") && element.classList.contains("page-active")) return //to chack if the same section
      

      if(element.classList.contains("page-active")){ //to add or remove class only
        
        element.classList.add("page-rotatePushTop")
        helper(element,"page-rotatePushTop","page-active",680)

      }else if(editChild == element.getAttribute("id") ){

        element.classList.add("page-active", "page-rotatePushBottom")
        helper(element,"page-rotatePushBottom",null,1000)
        
      }
    }


  });
}


function helper(element,nameofClass,secondClass,time) {
  setTimeout( function () {
    if (secondClass) {
      element.classList.remove(nameofClass,secondClass)
    } else {
      element.classList.remove(nameofClass)
    }
    // console.log("element from settime",element)
  }, time  )
}



// x=1

// function name(params) {
//   var c=5
//   function name(params) {
//     return c + 1
//   }
// }

// console.log(c)