let nothing;

function eyeBlink() {
  var cowEyeL = document.getElementById("cowEyeL");
  var cowEyeR = document.getElementById("cowEyeR");
  setInterval(function () {
    cowEyeL.innerHTML = "-";
    cowEyeR.innerHTML = "-";
    if (nothing) {
      setTimeout(function () {
        cowEyeL.innerHTML = "º";
        cowEyeR.innerHTML = "º";
      }, 100);
    } else {
      setTimeout(function () {
        cowEyeL.innerHTML = "o";
        cowEyeR.innerHTML = "o";
      }, 100);
    }
  }, 2000);
}
function cowSay() {
  var input = String(document.getElementById("input").value);
  eyeBlink();
  input.length > 0 ? (nothing = false) : (nothing = true);

  document.getElementById("cowsay").innerHTML =
    input.length > 0 ? input : "Type somuthing up here!";
}

function mounthMovement() {
  var cowMouth = document.getElementById("cowMouth");
  setTimeout(function () {
    cowMouth.innerHTML = "0 ";
  }, 1);
  setTimeout(function () {
    cowMouth.innerHTML = "o ";
  }, 200);
  setTimeout(function () {
    cowMouth.innerHTML = "_ ";
  }, 400);
  setTimeout(function () {
    cowMouth.innerHTML = "0 ";
  }, 600);
  setTimeout(function () {
    cowMouth.innerHTML = "_ ";
  }, 800);
}
mounthMovement();
