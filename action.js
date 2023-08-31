(function()
{

    let numbers = document.querySelectorAll('.btn');
    let screen = document.querySelector('.screen');

    let toggleBtn = document.querySelector('.toggle');

    const equalBtn = document.getElementById('equal');

    const clearBtn = document.getElementById('clear');

    numbers.forEach(function(button)
    {
        button.addEventListener('click',function(event)
        {
            let value = event.target.dataset.num;
    
            screen.value += value;
        })
    })

    equalBtn.addEventListener('click',function(event){

        let result = eval(screen.value);

        if(result == 'Infinity')
        {
            screen.value = 'Error';
        }else{

            screen.value = result;
        }
            

            
    })

    clearBtn.addEventListener('click',function()
    {
        screen.value = '';

    })

    toggleBtn.addEventListener('click',function(){
        let result =screen.value;

        if(result.startsWith("-"))
        {
            //screen.value= "+" +(eval(screen.value) * (-1)).toString();
            screen.value= "+"+ result.slice(1,result.length);
        }else if(result.startsWith("+")){
            //result ="-"+ result.slice(1,result.length);
            screen.value = "-"+ result.slice(1,result.length);
        }
        else {
            screen.value = "+" + result;
        }
    })


}) ();