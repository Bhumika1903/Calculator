var btn = document.getElementsByClassName("button");
var display = document.getElementById('display-container');
var opr1 = 0;
var opr2 = null;
var operator = null;
for(var i = 0;i<btn.length;i++){
    btn[i].addEventListener('click' , function(){
        var value = this.getAttribute('data-value');
        var text = display.textContent.trim();
        
        if (value == 'AC'){
            display.innerText = " ";

        }else if(value == '+' || value == '-' || value == '*' || value == '/' || value == '%'){
            operator = value;
            opr1 = parseFloat(text);
            display.innerText = opr1 + " " + operator;
        }else if(value == '+/-'){
            opr1 = parseFloat(text);
            opr1 = (-1)*opr1;
            display.innerText = opr1;
        }
        else if (value == '='){
            opr2 = parseFloat(text);
            var result = eval(opr1 + " " + operator + " " + opr2);
            display.innerText = result;
            opr1 = result;
            opr2 = null;
            operator = null;
        }else{
            display.innerText += value;
        }
    })
}
