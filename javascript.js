const boxWidth = 960;
let gapPercent = 1;

function addElement(etype,styles,parent) {
    let e = document.createElement(etype);
    e.setAttribute('style',styles);
    parent.appendChild(e);
    return e;
};

function getGridSize(n) {
  return `calc(100%/${n})`;
};

function setGrid(n) {
    let container = document.querySelector("#container");
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    for (let i =0;i<n**2;i++) {
        let e = addElement('div',`background-color: rgb(153, 153, 153);
            box-sizing:border-box;
            border:0.1em solid rgb(153, 153, 153);
            aspect-ratio:1/1;
            height:${getGridSize(n)};width: ${getGridSize(n)};
            class='gridBox';
            `, 
            document.querySelector('#container'));
    
        e.addEventListener('mouseover',() => {
            e.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
        });
    
    };

    container.setAttribute('style',`padding:${0}%;
    gap:${0}%;`);    
};

let button = document.querySelector('#gridButton')
button.addEventListener('click',()=>{
    let n = prompt('Enter Grid Size: ')
    setGrid(n);
});

