text = document.getElementsByClassName("animate");
titlesLine = document.getElementById("titles");
defaultTexts = [];
for (let i = 0; i < text.length; i++) {
  console.log(text.length);
  text[i].addEventListener("mouseover", () => replaceLetters(text[i], i));
  defaultTexts.push(text[i].innerHTML);
}

titleAnimValues = {
  titles: ["Computer Science Student", "C# Developer"],
  step: 0,
  delay: 25,
  typeDelay: 50,
  holdDuration: 2500,
  iteration: 0,
  txt: "",
};

//text.addEventListener('mouseover', () => replaceLetters(text));
//var characters = '∐∑√∛∜∝∫∀αβγπϕω∞';
var characters = "√∝∫αβγπϕω∞";
var txt = "123456";

function onLoad() {
  replaceLetters(text[0], 0);
}

function animate() {
  let id = null;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (end) {
    } else {
    }
  }
}

function replaceLetters(ctrl, id) {
  let iteration = 0;
  let interval = null;
  let originalText = ctrl.innerHTML;
  clearInterval(interval);

  interval = setInterval(() => {
    let character = characters[Math.floor(Math.random() * characters.length)];
    ctrl.innerHTML = originalText.replaceAt(iteration, character);

    if (iteration >= originalText.length) {
      clearInterval(interval);
      ctrl.innerHTML = defaultTexts[id];
    }
    iteration += 1;
  }, 250);
}

var animateTitles = function () {
  let titles = titleAnimValues.titles;
  let step = titleAnimValues.step;
  let delay = titleAnimValues.delay;
  let typeDelay = titleAnimValues.typeDelay;
  let holdDuration = titleAnimValues.holdDuration;
  let iteration = titleAnimValues.iteration;

  if (step < titles[iteration].length) {
    titlesLine.innerHTML += titles[iteration].charAt(step);
    titleAnimValues.step++;
    titleAnimValues.delay = typeDelay;
    titleAnimValues.txt = titles[iteration];
  }
  if (step == titles[iteration].length - 1) {
    titleAnimValues.delay = holdDuration;
    titleAnimValues.step++;
  }

  if (step > titles[iteration].length) {
    let str = titles[iteration];
    for (let i = 0; i < step - titles[iteration].length; i++) {
      str = str.slice(0, -1);
    }
    titlesLine.innerHTML = str;
    titleAnimValues.step++;
    titleAnimValues.delay = typeDelay;
  }

  if (titlesLine.innerHTML.length <= 0) {
    titleAnimValues.step = 0;
    titleAnimValues.iteration =
      iteration + 1 >= titles.length ? 0 : iteration + 1;
  }
  setTimeout(animateTitles, titleAnimValues.delay);
};
setTimeout(animateTitles, titleAnimValues.delay);

String.prototype.replaceAt = function (index, replacement) {
  return (
    this.substring(0, index) +
    replacement +
    this.substring(index + replacement.length)
  );
};

onLoad();
