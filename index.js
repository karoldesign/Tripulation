//onclick='orderPosition()'
function orderPosition() {
    let center = document.getElementsByTagName('center');
    var arr = Array.from(center);
    let newArray = [];
    const human ='human';
    const vulcano = 'vulcano';
    const betazoid = 'betazoid';
    const command= 'command';
    const science = 'science';
    const engineering = 'engineering';

    for (let i = 0; i < arr.length; i++) {
        newArray.push(center[i]);
    }

    newArray.shift();

    for (let i = 0; i < newArray.length; i++) {
        for(let j=0; j < newArray.length - 1; j++){
            let m1 = 0;
            let m2 = 0;
            let r1 = newArray[j].innerHTML.indexOf(human) > -1 
            ? human 
            : (newArray[j].innerHTML.indexOf(betazoid) > -1
                ? betazoid
                : vulcano
            )
            let p1 = newArray[j].innerHTML.indexOf(science) > -1 
            ? science 
            : (newArray[j].innerHTML.indexOf(engineering) > -1 
                ? engineering
                : command
            )
            let p2 = newArray[j+1].innerHTML.indexOf(science) > -1 
            ? science 
            : (newArray[j+1].innerHTML.indexOf(engineering) > -1 
                ? engineering
                : command
            )
            // debugger;

            if (r1 == human) {
                switch (p1) {
                    case command:
                        m1 += 3
                        m2 += 3
                        break;
                    case science:
                        m1 += 1
                        m2 += 1
                        break;
                    case engineering:
                        m1 += 2
                        m2 += 2
                        break;
                    default:
                    console.log("ERROR r1 == human");
                }

            } else if(r1 == vulcano) {
                switch (p1) {
                    case command:
                        m1 += 2
                        m2 += 2
                        break;
                    case science:
                        m1 += 3
                        m2 += 3
                        break;
                    case engineering:
                        m1 += 1
                        m2 += 1
                        break;
                    default:
                    console.log("ERROR r1 == vulcano");
                    }

            } else if (r1 == betazoid){
                switch (p1) {
                    case command:
                        m1 += 1
                        m2 += 1
                        break;
                    case science:
                        m1 += 2
                        m2 += 2
                        break;
                    case engineering:
                        m1 += 3
                        m2 += 3
                        break;
                    default:
                    console.log("r1 == betazoid");
                }
            }
    
            if (m2 > m1 || (m1 == m2 && p2 == command) || (m1 == m2 && p1 != command && p2 == science)) {
                let z = newArray[j]
                let y = newArray[j + 1]
                newArray[j] = y
                newArray[j + 1] = z
            }
        }
    }
    document.querySelector('#tripulation').innerHTML = '';
    for (i = 0; i < newArray.length; i++) {
        document.querySelector('#tripulation').append(newArray[i]);
    }
}
//onclick='orderAlphabet()'
function orderAlphabet() {
    c = document.getElementsByTagName('center');
    newArray = [];
    for (var i = 0; i < c.length; i++) {
        newArray.push(c[i]);
    }
    newArray.shift();
    for (var i = 0; i < d.length; i++) {
        for(var j=0; j < d.length - 1; j++){
            // obtengo las dos razas
            n1 = newArray[j].querySelector('div').innerText;
            n2 = newArray[j+1].querySelector('div').innerText;            
            if (n1 > n2) {
                var z = newArray[j]
                var y = newArray[j + 1]
                newArray[j] = y
                newArray[j + 1] = z
            }
        }
    }
    document.querySelector('#tripulation').innerHTML = '';
    for (i = 0; i < newArray.length; i++) {
        document.querySelector('#tripulation').append(newArray[i]);
    }
}

/**
  *  MOCK_DATA.json
  */
let rawFile = new XMLHttpRequest();
rawFile.open("GET", 'MOCK_DATA.json', true);
rawFile.send(null);
rawFile.onload = function() {
    var tripulationMembers = rawFile.response;
    if (rawFile.readyState === 4 && rawFile.status == "200") {
        show(tripulationMembers);
    } else {
        alert('ERROR!!');
    }
  }

function show() {
    let tripulationBox = document.querySelector('#tripulation');
    a = eval(rawFile.responseText);

    const human ='human';
    const vulcano = 'vulcano';
    const betazoid = 'betazoid';
    const command= 'command';
    const science = 'science';
    const engineering = 'engineering';
    
    let myArticle = document.createElement('div');
    for (let i = 0; i < a.length; i++) {
        let position = a[i].position;
        let race = a[i].race;
        let name = a[i].name;
        let gender = a[i].gender;
        let ip = a[i].ip_address;
            
                b = '<center id="center"><div id="box">'
                if (a[i].position == science) {
                    b += '<div class="boxColour blue"></div>' 

                } else if (a[i].position == engineering) {
                    b += '<div class="boxColour red"></div>' 

                } else {
                    b += '<div class="boxColour yellow"></div>' 
                }

                b += '<div class="dates"><div id="box_name">' + name + '</div>'
                b += '<div id="box_gender">' + 'Gender: ' + '<div class="styleText">' + gender + '</div></div>'
                b += '<div id="box_id">' + 'Id: ' + ip + '</div>'
                b += '<div id="box_race">' + 'Race: ' + race + '</div>'
                b += '<div id="box_position">' + 'Position: ' + position + '</div></div>'

                if (race == human) {
                    switch (position) {
                        case command:
                            b += '<div class="boxNumber">x3</div>'
                            break;
                        case science:
                            b += '<div class="boxNumber">x1</div>'
                            break;
                        case engineering:
                            if (name == 'Scotty') {
                                b += '<div class="boxNumber">x4</div>'
                            break;
                            } else {
                                b += '<div class="boxNumber">x2</div>'
                            break;
                            }
                        default:
                        console.log("ERROR race == human");
                    }

                } else if(race == vulcano) {
                    switch (position) {
                        case command:
                            b += '<div class="boxNumber">x2</div>'
                            break;
                        case engineering:
                            b += '<div class="boxNumber">x1</div>'
                            break;
                        case science:
                            b += '<div class="boxNumber">x3</div>'
                            break;
                        default:
                        console.log("ERROR race == vulcano");
                        }

                } else if (race == betazoid){
                    switch (position) {
                        case command:
                            b += '<div class="boxNumber">x1</div>'
                            break;
                        case engineering:
                            b += '<div class="boxNumber">x3</div>'
                            break;
                        case science:
                            b += '<div class="boxNumber">x2</div>'
                            break;
                        default:
                        console.log("race == betazoid");
                    }

                }
                b +=  '</div></center>'
            

        document.body.innerHTML += b;
    }
    tripulationBox.appendChild(myArticle);
}
