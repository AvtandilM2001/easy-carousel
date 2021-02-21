const options=[
    [-15,0],
    [-15,0],
    [-7, 11],
    [10, 15],
    [37.6, 25],
    [75, 15],
    [96, 11],
    [106,0],
    [106,0]
];

var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var img5 = document.getElementById("img5");


img1.style.left = options[4][0] + "%";
img1.style.width= options[4][1] + "%";

img2.style.left = options[5][0] + "%";
img2.style.width= options[5][1] + "%";

img3.style.left = options[6][0] + "%";
img3.style.width= options[6][1] + "%";

img4.style.width=0 +"%";
img5.style.width=0 +"%";


var a=4;

window.addEventListener('keydown',keyboard);

function keyboard(e){
    switch(e.keyCode){
        case 37:
            prev();
            break;
        case 39:
            next();
            break;
    }
}

    document.getElementById("leftbutt").disabled= true;
function next(){
    if(a>0 && a<=4){
        
        if(a==1){document.getElementById("rightbutt").disabled = true;}

        a--;
    
        img1.style.left =options[a][0] + "%";
        img1.style.width=options[a][1] + "%";
    
        img2.style.left = options[a+1][0]+"%";
        img2.style.width= options[a+1][1]+"%";

        img3.style.left = options[a+2][0]+"%";
        img3.style.width= options[a+2][1]+"%";

        img4.style.left= options[a+3][0]+ "%";
        img4.style.width=options[a+3][1] +"%";
        
        img5.style.left=options[a+4][0] + "%";
        img5.style.width=options[a+4][1]+ "%";
        
        document.getElementById("leftbutt").disabled= false;

    }else if(a==0){
        
        document.getElementById("rightbutt").disabled = true;
        document.getElementById("leftbutt").disabled= false;
    }
}

    function prev(){
        if(a<4 ){

        if(a==3){document.getElementById("leftbutt").disabled= true;}

        a++;

        img1.style.left =options[a][0] + "%";
        img1.style.width=options[a][1] + "%";
    
        img2.style.left = options[a+1][0]+"%";
        img2.style.width= options[a+1][1]+"%";

        img3.style.left = options[a+2][0]+"%";
        img3.style.width= options[a+2][1]+"%";

        img4.style.left= options[a+3][0]+ "%";
        img4.style.width=options[a+3][1] +"%";
    
        img5.style.left=options[a+4][0] + "%";
        img5.style.width=options[a+4][1]+ "%";

        document.getElementById("rightbutt").disabled = false;

    }else if(a==4){
        document.getElementById("leftbutt").disabled= true;
        document.getElementById("rightbutt").disabled = false;
    }
    }

//document.getElementById("checker").innerHTML= slide[1]; 