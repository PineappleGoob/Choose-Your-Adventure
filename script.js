function len(obj) {
  if (obj === null || obj === undefined) {
    return 0;
  }
  if (typeof obj.length === 'number') {
    return obj.length;
  }
  if (obj instanceof Map || obj instanceof Set) {
    return obj.size;
  }
  if (typeof obj === 'object') {
    return Object.keys(obj).length;
  }
  return 0;
}

async function loadgamedata() {
    
const getgamedata = await fetch("game.json");
const gamedata = await getgamedata.json();

const filename = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)
console.log(`filename ${filename}`)
try {
const numbering = filename.match(/\d+/)
const zenumber = numbering[0]
console.log(zenumber)
} catch {
    console.log('prolly first index or some other weird stuffs')
}


console.log(filename)
const mastergotmewooorking = document.createElement('ul');
mastergotmewooorking.id = "somedaymastersetmefree"

if (filename == "index.html") {
document.getElementById('explainerer').textContent = gamedata['1']['Description']
document.getElementById('title').textContent = gamedata['1']['Title']
choices = gamedata['1'].choices
for (let i = 0; len(choices) > i; i++) {
const dayisneverfinished = document.createElement('li');
const themaster = document.createElement('a');

dayisneverfinished.textContent = `${gamedata['1']['choices'][`choice${i+1}`]}`
console.log(dayisneverfinished.textContent)
if (gamedata['1']['choicelinks'][`choice${i+1}`] == 1) {
themaster.href = "index.html"
}
else {
themaster.href = "index"+`${gamedata['1']['choicelinks'][`choice${i+1}`]}`+".html"
}

themaster.appendChild(dayisneverfinished)
mastergotmewooorking.appendChild(themaster);
}
}
else {

const numbering = filename.match(/\d+/)
const zenumber = numbering[0]
console.log(zenumber)
document.getElementById('title').textContent = gamedata[`${zenumber}`]['Title']
document.getElementById('explainerer').textContent = gamedata[`${zenumber}`]['Description']
choices = gamedata[`${zenumber}`].choices
for (let i = 0; len(choices) > i; i++) {
const dayisneverfinished = document.createElement('li');
const themaster = document.createElement('a');

dayisneverfinished.textContent = `${gamedata[`${zenumber}`]['choices'][`choice${i+1}`]}`
console.log(dayisneverfinished.textContent)
if (gamedata[`${zenumber}`]['choicelinks'][`choice${i+1}`] == 1) {
  themaster.href = `index.html`
} else {
themaster.href = `${gamedata[`${zenumber}`]['choicelinks'][`choice${i+1}`]}`
}
themaster.appendChild(dayisneverfinished)
mastergotmewooorking.appendChild(themaster);
}
}





document.getElementById('choicebox').appendChild(mastergotmewooorking)


};

function funnyfunc() {

  console.log('its funny time');
  
}

loadgamedata()