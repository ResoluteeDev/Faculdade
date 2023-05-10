function imprimir(){
    
    var btn = document.querySelector('#imprimir');
    var container = document.querySelector('.container');2

    btn.addEventListener('click', function() {
        
        if(container.style.display === 'block') {
            container.style.display = 'none';
        } 
        else{
            container.style.display = 'block';
        }
    
    });

    var anoAtual = parseInt(document.getElementById("campo1").value)
    var anoNascimento = parseInt(document.getElementById("campo2").value);
    
    var idade = anoAtual - anoNascimento
        
    document.getElementById("idade").textContent = idade;

    document.getElementById("resultado").style.display = "block";

}