//onclick='orderPosition()'
function orderPosition() {
    c = document.getElementsByTagName('center');
    d = [];
    let m1 = 0;
    let m2 = 0;

    for (let i = 0; i < c.length; i++) {
        d.push(c[i]);
    }
    d.shift();

    for (let i = 0; i < d.length; i++) {
        for(let j=0; j < d.length - 1; j++){
            // obtengo las dos razas
            r1 = d[j].innerHTML.indexOf('human') > -1 
            ? 'human' 
            : (d[j].innerHTML.indexOf('betazoid') > -1 
                ? 'betazoid'
                : 'vulcano'
            )
            r2 = d[j+1].innerHTML.indexOf('human') > -1 ? 'human' : (d[j+1].innerHTML.indexOf('betazoid') > -1 ? 'betazoid': 'vulcano')
            p1 = d[j].innerHTML.indexOf('science') > -1 ? 'science' : (d[j].innerHTML.indexOf('engineering') > -1 ? 'engineering': 'command')
            p2 = d[j+1].innerHTML.indexOf('science') > -1 ? 'science' : (d[j+1].innerHTML.indexOf('engineering') > -1 ? 'engineering': 'command')


            switch (r1, r2, p1, p2, m1, m2) {
                case (r1 == 'human' && p1 == 'command'):
                    return m1 = 3
                case (r1 == 'human' && p1 == 'science'):
                    return m1 = 1
                case (r1 == 'human' && p1 == 'engineering'):
                    return m1 = 2
                case (r1 == 'vulcano' && p1 == 'science'):
                    return m1 = 3
                case (r1 == 'vulcano' && p1 == 'command'):
                    return m1 = 2
                case (r1 == 'vulcano' && p1 == 'engineering'):
                    return m1 = 1
                case (r1 == 'betazoid' && p1 == 'science'):
                    return m1 = 2
                case (r1 == 'betazoid' && p1 == 'command'):
                    return m1 = 1
                case (r1 == 'betazoid' && p1 == 'engineering'):
                    return m1 = 3
                case (r2 == 'human' && p2 == 'command'):
                    return m2 = 3
                case (r2 == 'human' && p2 == 'science'):
                    return m2 = 1
                case (r2 == 'human' && p2 == 'engineering'):
                    return m2 = 2
                case (r2 == 'vulcano' && p2 == 'science'):
                    return m2 = 3
                case (r2 == 'vulcano' && p2 == 'command'):
                    return m2 = 2
                case (r2 == 'vulcano' && p2 == 'engineering'):
                    return m2 = 1
                case (r2 == 'betazoid' && p2 == 'science'):
                    return m2 = 2
                case (r2 == 'betazoid' && p2 == 'command'):
                    return m2 = 1
                case (r2 == 'betazoid' && p2 == 'engineering'):
                    return m2 = 3
                default:
                  console.log("ERROR");
              }

            if (m2 > m1 || (m1 == m2 && p2 == 'command') || (m1 == m2 && p1 != 'command' && p2 == 'science')) {
                let z = d[j]
                let y = d[j + 1]
                d[j] = y
                d[j + 1] = z
            }
        }
    }
    document.querySelector('#tripulation').innerHTML = '';
    for (i = 0; i < d.length; i++) {
        document.querySelector('#tripulation').append(d[i]);
    }
}
//onclick='orderAlphabet()'
function orderAlphabet() {
    c = document.getElementsByTagName('center');
    d = [];
    for (var i = 0; i < c.length; i++) {
        d.push(c[i]);
    }
    d.shift();
    for (var i = 0; i < d.length; i++) {
        for(var j=0; j < d.length - 1; j++){
            // obtengo las dos razas
            n1 = d[j].querySelector('div').innerText;
            n2 = d[j+1].querySelector('div').innerText;            
            if (n1 > n2) {
                var z = d[j]
                var y = d[j + 1]
                d[j] = y
                d[j + 1] = z
            }
        }
    }
    document.querySelector('#tripulation').innerHTML = '';
    for (i = 0; i < d.length; i++) {
        document.querySelector('#tripulation').append(d[i]);
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
    let myArticle = document.createElement('div');
    for (let i = 0; i < a.length; i++) {
            if (a[i].gender) {
                b = '<center id="center"><div id="box">'
                if (a[i].position == 'science') {
                    b += '<div class="boxColour blue"></div>' 

                } else if (a[i].position == 'engineering') {
                    b += '<div class="boxColour red"></div>' 

                } else if (a[i].position == 'command') {
                    b += '<div class="boxColour yellow"></div>' 
                }

                b += '<div class="dates"><div id="box_name">' + a[i].name + '</div>'
                b += '<div id="box_gender">' + 'Gender: ' + '<div class="styleText">' + a[i].gender + '</div></div>'
                b += '<div id="box_id">' + 'Id: ' + a[i].ip_address + '</div>'
                b += '<div id="box_race">' + 'Race: ' + a[i].race + '</div>'
                b += '<div id="box_position">' + 'Position: ' + a[i].position + '</div></div>'

                if (a[i].race == 'human' && a[i].position == 'command') {
                    b += '<div class="boxNumber">x3</div>'
                }
                if (a[i].race == 'human' && a[i].position == 'science') {
                    b += '<div class="boxNumber">x1</div>'
                }
                if (a[i].race == 'human' && a[i].position == 'engineering') {
                    if (a[i].name == 'Scotty') {
                        b += '<div class="boxNumber">x4</div>'
                    } else {
                        b += '<div class="boxNumber">x2</div>'
                    }
                }
                
                if (a[i].race == 'vulcano' && a[i].position == 'command') {
                    b += '<div class="boxNumber">x2</div>'
                }
                if (a[i].race == 'vulcano' && a[i].position == 'engineering') {
                    b += '<div class="boxNumber">x1</div>'
                }
                if (a[i].race == 'vulcano' && a[i].position == 'science') {
                    b += '<div class="boxNumber">x3</div>'
                }
                
                if (a[i].race == 'betazoid' && a[i].position == 'command') {
                    b += '<div class="boxNumber">x1</div>'
                }
                if (a[i].race == 'betazoid' && a[i].position == 'engineering') {
                    b += '<div class="boxNumber">x3</div>'
                }
                if (a[i].race == 'betazoid' && a[i].position == 'science') {
                    b += '<div class="boxNumber">x2</div>'
                }
                b +=  '</div></center>'
            }

        document.body.innerHTML += b;
    }
    tripulationBox.appendChild(myArticle);
}
