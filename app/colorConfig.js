exports.colorSelection = {
    label: 'Change color',
    submenu: [
        {
            label: 'yellow',
            click: () => {changeColor('yellow');}
        },
        {
            label: 'green',
            click: () => {changeColor('green');}
        },
        {
            label: 'blue',
            click: () => {changeColor('blue');}
        },
        {
            label: 'aqua',
            click: () => {changeColor('aqua');}
        },
        {
            label: 'gold',
            click: () => {changeColor('gold');}
        },
        {
            label: 'orange',
            click: () => {changeColor('orange');}
        },
        {
            label: 'red',
            click: () => {changeColor('red');}
        },
        {
            label: 'grey',
            click: () => {changeColor('grey');}
        },
        {
            label: 'white',
            click: () => {changeColor('white');}
        },
        {
            label: 'brown',
            click: () => {changeColor('brown');}
        },
        {
            label: 'lightgreen',
            click: () => {changeColor('lightgreen');}
        },
    ]
};

exports.changeColor = function(colorVal){
    return colorVal
}