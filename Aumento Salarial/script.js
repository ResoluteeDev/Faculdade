document.getElementById('calculate').addEventListener('click', function(){
    const value = document.getElementById('value').value;
    const fee = (document.getElementById('fee').value / 100);

    const total = value * (1 + fee);

    const juros = total - value;
    
    


    
    document.getElementById('total').innerHTML = ("R$" + total.toFixed(2).replace(".", ","));

    document.getElementById('juros').innerHTML = ("R$" + juros.toFixed(2).replace(".", ","));

})
