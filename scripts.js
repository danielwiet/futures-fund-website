function openNav() {
  document.getElementById("myNav").style.height = "55%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

function humanOrRobot() {
  let robot = confirm("Are you human? Ok for yes, cancel for no");
  if (robot == true) {
    //If the test condition 1 is TRUE then these it will check for test condition 2
    let rUSure = confirm("Are you certain? OK for yes, cancel for no");
    if (rUSure == false) {
      //If the test condition 2 is TRUE then these statements will be executed
      alert("Only humans question their own existence");
    } else {
      //If the c test condition 2 is FALSE then these statements will be executed
      alert("Nice try, nobody likes a lying robot!");
    }
  } else {
    //If the test condition 1 is FALSE then these statements will be executed
    alert("Honest robots also welcome");
  }
}
