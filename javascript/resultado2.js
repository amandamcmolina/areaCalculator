
// const meuCabecalho = document.querySelector('h1');
// meuCabecalho.textContent = 'Ola mundo!';s

var select = document.getElementById("figureoptions")
var options = ["Quadrado", "Triângulo-Retângulo", "Retângulo", "Circunferência",'Trapézio']; 

    for(var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("button"); 
        el.textContent = opt;   
        el.value = opt; 
        el.id = opt;
        select.appendChild(el); 
        el.addEventListener('click', selectFigure);
    }



var selectUnit = document.getElementById("opcoesUnidades"); 
var optionsUnit = ["Metro", "Centímetro", "Quilômetro"]; 

    for(var i = 0; i < optionsUnit.length; i++) {
        var optUnit = optionsUnit[i];
        var elUnit = document.createElement("option"); 
        elUnit.textContent = optUnit;   
        elUnit.value = optUnit; 
        selectUnit.appendChild(elUnit); 
    }


function getDatas(){
    var option = document.getElementById('selectedOption').value;
    var height =  document.getElementById('height').value;
    var width = document.getElementById('width').value;
    //var unit = document.getElementById('opcoesUnidades').value;
    // var formDatas = [];
    // formDatas.push(option, height, width, unit);
    // return formDatas;
    return {
        'altura' : height,
        'largura' : width,
        'opcao' : option,
        'unidade' : document.getElementById('opcoesUnidades').value,
        'raio' : document.getElementById('radius').value,
        'baseMenor' : parseInt(document.getElementById('baseMenor').value),
        'baseMaior' : parseInt(document.getElementById('baseMaior').value),
        'alturaTrap' : parseInt(document.getElementById('alturaTrap').value),
    }
}



function areaSquare(inputs){
    areaSquare = inputs.altura * inputs.largura;
    return areaSquare;
}

function areaTriangle(inputs){
    areaTriangle = (inputs.altura * inputs.largura) / 2;
    return areaTriangle;
}

function areaRectangle(inputs){
    areaRectangle = (inputs.altura * inputs.largura);
    return areaRectangle;
}

function areaCircle(inputs){
    var pi = 3.1416;
    areaCircle = 2 * pi * inputs.raio * inputs.raio;
    return areaCircle;
}

function areaTrapezium(inputs){
    areaTrapezium = ((inputs.baseMaior + inputs.baseMenor) * inputs.alturaTrap) / 2;
    return areaTrapezium;
}


function send(unitUse, area) {
    meuResultado = document.querySelector('h3')
    if(area >= 2){
        meuResultado.textContent = ('Área = '+ area +" "+unitUse+"s²");
    }else{
        meuResultado.textContent = ('Área = '+ area +" "+unitUse+"²");
    }
    
}


var functions = {
    'Quadrado': areaSquare,
    'Triângulo-Retângulo' : areaTriangle,
    'Retângulo' : areaRectangle,
    'Circunferência' : areaCircle,
    'Trapézio' : areaTrapezium
}

// var select = document.getElementById('figureoptions');
//     select.addEventListener('change', square);

// function square() {
//     var x = document.getElementById("figureoptions").value;
//     if (['Quadrado', 'Triângulo Retângulo', 'Retângulo'].includes(x)){
//         document.getElementById("showSquare").style.display = 'block'; 
//     }else{
//         document.getElementById("showSquare").style.display = 'none';
//     }
    
// }

// select.addEventListener('change', circle); //solução para desaparecer os outros itens

// function circle() {
//     var x = document.getElementById("figureoptions").value;
//     if(['Circunferência'].includes(x)){
//         document.getElementById("showCircle").style.display = 'block';
//     }
//     else{
//         document.getElementById("showCircle").style.display = 'none';
//     }
// }

// select.addEventListener('change', trapezium); //solução para desaparecer os outros itens

// function trapezium() {
//     var x = document.getElementById("figureoptions").value;
//     if(['Trapézio'].includes(x)){
//         document.getElementById("showTrapezium").style.display = 'block';
//     }
//     else{
//         document.getElementById("showTrapezium").style.display = 'none';
//     }
// }

function selectFigure(option){
    
    var x = option.target.value;
    hideOptions();
    document.getElementById("selectedOption").value = x;
    if(['Trapézio'].includes(x)){
        document.getElementById("showTrapezium").style.display = 'block';
    }else if (['Quadrado', 'Triângulo-Retângulo', 'Retângulo'].includes(x)){
        document.getElementById("showSquare").style.display = 'block'; 
    }else if(['Circunferência'].includes(x)){
        document.getElementById("showCircle").style.display = 'block';
    }
}

function hideOptions(){
    Array.from(document.getElementsByClassName("showFigure")).forEach(     
        function(element, index, array){
            element.style.display = 'none';    
        } 
    );
}


//  var myButton = document.querySelectorAll('#figureoptions > button');

//  myButton.forEach(function(key){
//      key.addEventListener('click', function(){
//          removeStyles();
//          this.setAttribute('class', 'btn');
//      });
//  })

//  function removeStyles(){
//      for(var i = 0;i < myButton.length;i++){
//          document.querySelectorAll('#figureoptions > button')[i].removeAttribute('class');
//      }
//  }


function calculate(){
    // var heightUse = getDatas()[1];
    // var widthUse = getDatas()[2];
    // var optionUse = getDatas()[0];
    // var unitUse = getDatas()[3];
    var inputs = getDatas();
    console.log(inputs);
    //MAP
    var area = functions[inputs.opcao](inputs);
    
    // send(inputs.unidade, area);
    send(inputs.unidade, area);

}
    


// quadrado / retangulo / triagulo retangulo - base  e altura
// a partir da escolha, aparecessem os próximos itens - base e altura

// Trocar select de figuras para botões de imagens.
// adcionar círculo.
// alterar página