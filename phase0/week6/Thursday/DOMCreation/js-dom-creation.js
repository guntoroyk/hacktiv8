var body = document.body;

var mainDiv = document.createElement('div');

var mainDivAttrId = document.createAttribute('id');

mainDivAttrId.value = "main";

mainDiv.setAttributeNode(mainDivAttrId);

body.appendChild(mainDiv);

var insideMainDiv = document.createElement('div');

insideMainDiv.setAttribute('id', 'inside-main');

mainDiv.appendChild(insideMainDiv);

var h1 = document.createElement('h1');
var h1Text = document.createTextNode('Heading Sample 1');
h1.appendChild(h1Text);

insideMainDiv.appendChild(h1);

var button = document.createElement('button');
var buttonText = document.createTextNode('Click Me!');
button.appendChild(buttonText);
button.addEventListener('click', function(){
    alert('Hello!');
});

insideMainDiv.appendChild(button);
insideMainDiv.removeChild(h1);