axios
  .get(`http://api.open-notify.org/iss-now.json`)
  .then((res) => {
    console.log(res)
apimaker(res.data.iss_position.latitude, res.data.iss_position.longitude)
    })
    .catch(err => {
      console.log('oh no!, ', err);
    })

function apimaker(issPosition, issPositionLong) {



    ///creating elements
 const newDiv = document.createElement('div');
 const newImg = document.createElement('img');
 const newDiv2 = document.createElement('div');
 const newH3 = document.createElement('h3');
 const p = document.createElement('p');
 const p1 = document.createElement('p');
 const p2 = document.createElement('p');
 const panelButtonsContainer = document.createElement('div');
 const buttonOpen = document.createElement('button');
 const content = document.createElement('div');
 const body = document.querySelector('body');

    ///appending them

document.body.appendChild(newDiv);
newDiv.appendChild(newImg);
newDiv.appendChild(newDiv2);
newDiv2.appendChild(newH3);
newDiv2.appendChild(panelButtonsContainer);
document.body.appendChild(content);
// content.appendChild(p);
// content.appendChild(p);
// content.appendChild(p2);
panelButtonsContainer.appendChild(buttonOpen);
panelButtonsContainer.appendChild(content)


    ///styling them

newImg.src = 'img/Screen Shot 2020-06-12 at 6.35.34 PM.png';
newDiv.style = 'display: flex; flex-direction: column; align-items: center; margin-top: 10%;'
newImg.style = 'border: 10px solid black; align-items: center;'
body.style.backgroundImage = "url('img/milky-way-Tasman-Valley-cropped1.jpg')";
content.innerText = 
p.innerText = `INTERNATIONAL SPACE STATION POSITION LATITUDE: ${issPosition} : INTERNATIONAL SPACE STATION POSITION LATITUDE: ${issPositionLong}`;
content.classList.add('panel-content');
buttonOpen.style = 'height: 50px; width: 550px; background-color: #A9A9A9; font-family: Space Mono, monospace; font-size: 2rem;';
buttonOpen.innerText = 'WHERE AM I RIGHT NOW?'
panelButtonsContainer.style = 'display: flex; flex-direction: column; align-items: center;'

// event listener 

panelButtonsContainer.addEventListener('click', (e) => {
  // buttonOpen.classList.toggle('hide-btn');
  content.classList.toggle('toggle-on');

});
}