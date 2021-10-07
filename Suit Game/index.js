const gambar = document.querySelectorAll('.wrapper');

function mainFunction() {
    var clear=1, userNumber, mapping;

    // clear style
    for (i=0; i<gambar.length; i++) {
        gambar[i].style.backgroundColor='initial';
        res = document.querySelector('.result');
        res.innerHTML = '';
        res.style.backgroundColor = 'initial';
    }
    
    // hover effect
    for (i=0; i<(gambar.length/2)-1; i++) {
        gambar[i].addEventListener('mouseenter', runEvent);
        gambar[i].addEventListener('mouseleave', clearEvent);
        gambar[i].addEventListener('mouseup', testEvent);
    }
    
    //reset button
    gambar[6].addEventListener('mouseenter', runEvent);
    gambar[6].addEventListener('mouseleave', clearEvent);

    //additional keyboard shortcut -> press r for restart
    document.addEventListener('keydown', function(event) {
        if(event.keyCode == 82) {
            mainFunction();
        }
    });

    return 0;
}

function runEvent(e) {
    e.target.style.backgroundColor='#c4c4c4';
    e.target.style.borderRadius='.5rem';
    return 0;
}

function clearEvent(e) {
    e.target.style.backgroundColor='initial';
    return 0;
}

// input user
function testEvent(e) {
    if (e.target.className=='resizeimg') {
        e.target.parentNode.style.backgroundColor='#d4d4d4';
        e.target.parentNode.style.borderRadius='.5rem';   
        if (e.target.alt=='batu') {
            userNumber=0
        } else if (e.target.alt=='gunting') {
            userNumber=1
        } else {
            userNumber=2
        } 
    } else {
        e.target.style.backgroundColor='#d4d4d4';
        e.target.style.borderRadius='.5rem';
        if (e.target.childNodes[1].alt=='batu') {
            userNumber=0
        } else if (e.target.childNodes[1].alt=='gunting') {
            userNumber=1
        } else {
            userNumber=2
        }
    }

 
    // testing logic
    if (userNumber==0) {
        var1 = 'batu';
    } else if (userNumber==1) {
        var1 = 'gunting';
    } else if (userNumber==2){
        var1 = 'kertas';
    }

    game(userNumber);

    for (i=0; i<gambar.length/2; i++) {
        gambar[i].removeEventListener('mouseenter', runEvent);
        gambar[i].removeEventListener('mouseleave', clearEvent);
        gambar[i].removeEventListener('mouseup', testEvent);
    }
    return 0;
}

// logic game
function game(input1) {
    const computerNumber = Math.floor(Math.random() * 3);
    if (computerNumber==0) {
        mapping=0
    } else if(0-computerNumber<0) {
        if (0-computerNumber==-1) {
            mapping=2
        } else {
            mapping=1
        }
    }

    // hover computer choice
    document.querySelectorAll('.wrapper')[3+mapping].style.backgroundColor='#d4d4d4';
    document.querySelectorAll('.wrapper')[3+mapping].style.borderRadius='.5rem';

    // testing logic
    if (computerNumber==0) {
        var2 = 'batu';
    } else if (computerNumber==1) {
        var2 = 'gunting';
    } else {
        var2 = 'kertas';
    }

    // result logic
    if (input1==computerNumber) {
        console.log(`${var1} VS ${var2} DRAW CUY`);
        displayDraw();
    } else if (((input1==0) && (computerNumber==1)) || (input1==1 && computerNumber==2) || (input1==2 && computerNumber==0)) {
        console.log(`${var1} VS ${var2} WINNER WINNER CHICKEN DINNER`);
        displayWin('PLAYER 1');
    } else {
        console.log(`${var1} VS ${var2} LOSER!`);
        displayWin('COM');
    }
    return 0;
} 

function displayWin(name) {
    res = document.querySelector('.result');
    res.innerHTML = '<h3>' + name + '</h3><h3>WIN</h3>';
    res.style.backgroundColor = '#4C9654';
    res.style.borderRadius = '10px';
    res.style.zIndex = 1;
    return 0;
}

function displayDraw() {
    res = document.querySelector('.result');
    res.innerHTML = '<h3>DRAW</h3>';
    res.style.backgroundColor = '#035B0C';
    res.style.borderRadius = '10px';
    res.style.zIndex = 1;
    return 0;
}