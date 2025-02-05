// fonction pour convertir de decimal en octal,hexadecimal,binaire
function convertFromDecimal() {
    
    // obtenez l'élément une seule fois avant d'ajouter l'écouteur d'évènements 
    let decimalInput = document.getElementById('decimal');

  //  decimalInput.addEventListener('input',() => {
// utiliser une variable différente pour la valeur
        let decimalValue = decimalInput.value;
      if (decimalValue !=="" && !isNaN(parseInt(decimalValue, 10))) {

        // si la condition est vrai le nombre est converti en binaire et affiché dans le champ correspondant
        document.getElementById('binaire').value = parseInt(decimalValue, 10).toString(2); 
                // si la condition est vrai le nombre est converti en hexadecimal et affiché dans le champ correspondant
       document.getElementById('hexadecimal').value = parseInt(decimalValue, 10).toString(16).toUpperCase(); // Ajoutez .toUpperCase() ici
               // si la condition est vrai le nombre est converti en octal et affiché dans le champ correspondant
       document.getElementById('octal').value = parseInt(decimalValue, 10).toString(8);

      }   else {
        /* Si la valeur entrée n'est pas valide ou est vide, la
         fonction netoyer() est appelée pour effacer toutes les valeurs dans les champs.*/
        nettoyer();
      } 

   // }) 

}
convertFromDecimal();

// une fonction pour convertir de binaire en decimal , hexadecimal , octal
function convertFromBinaire() {
        // obtenez l'élément une seule fois avant d'ajouter l'écouteur d'évènements
        let binaireInput = document.getElementById('binaire');

     //  binaireInput.addEventListener('input',()=> {
            // utiliser une variable différente pour la valeur
            let binaireValue = binaireInput.value;

            if (binaireValue !=="" && !isNaN(parseInt(binaireValue, 2))) {

        // si la condition est vrai le nombre est converti en decimal et affiché dans le champ correspondant

                document.getElementById("decimal").value = parseInt(binaireValue, 2).toString(10);
        // si la condition est vrai le nombre est converti en hexadecimal et affiché dans le champ correspondant

                document.getElementById('hexadecimal').value = parseInt(binaireValue, 2).toString(16).toUpperCase();
                        // si la condition est vrai le nombre est converti en octal et affiché dans le champ correspondant

                document.getElementById("octal").value = parseInt(binaireValue, 2).toString(8);
            }
            else {
                /* Si la valeur entrée n'est pas valide ou est
                 vide, la netoyer() est appelée pour effacer toutes les valeurs dans les champs.*/
                 nettoyer(); 
            }
       // }) 

}
convertFromBinaire();

// une fonction pour convertir de l'hexadecimal en decimal,binaire et octal
function convertFromHexadecimal() {
        // obtenez l'élément une seule fois avant d'ajouter l'écouteur d'évènements
        let hexaInput = document.getElementById('hexadecimal');

      //  hexaInput.addEventListener('input',() => {
                        // utiliser une variable différente pour la valeur
                        let hexaValue = hexaInput.value;

                        if (hexaValue !=="" && !isNaN(parseInt(hexaValue, 16))) {
                                    // si la condition est vrai le nombre est converti en decimal et affiché dans le champ correspondant
                                    document.getElementById('decimal').value = parseInt(hexaValue, 16);
          // si la condition est vrai le nombre est converti en binaire et affiché dans le champ correspondant
          document.getElementById('binaire').value = parseInt(hexaValue,16).toString(2);
 // si la condition est vrai le nombre est converti en octal et affiché dans le champ correspondant
 document.getElementById('octal').value = parseInt(hexaValue, 16).toString(8);

                        }  
                        else {
                            nettoyer();
                        }

      //  })



}

convertFromHexadecimal();

// une fonction pour convertir de octal en decimal, hexadecimal, binaire
function convertFromOctal() {
            // obtenez l'élément une seule fois avant d'ajouter l'écouteur d'évènements
            let octalInput = document.getElementById('octal');

           // octalInput.addEventListener('input', () => {
                                        // utiliser une variable différente pour la valeur
                                        let octalValue = octalInput.value;

                                        if (octalValue !=="" && !isNaN(parseInt(octalValue, 8))) {
 // si la condition est vrai le nombre est converti en decimal et affiché dans le champ correspondant
 document.getElementById('decimal').value = parseInt(octalValue, 8);
                     // si la condition est vrai le nombre est converti en binaire et affiché dans le champ correspondant
                     document.getElementById('binaire').value = parseInt(octalValue, 8).toString(2);
                      // si la condition est vrai le nombre est converti en hexadecimal et affiché dans le champ correspondant
                      document.getElementById('hexadecimal').value = parseInt(octalValue, 8).toString(16).toUpperCase();



                                        
                                        }
                                        else {
                                            nettoyer();
                                        }

                
           // })

}

convertFromOctal();

// Si la valeur entrée n'est pas valide ou est vide, la
// fonction nettoyer est appelée pour effacer toutes les valeurs dans les champs.
function nettoyer() {
    document.getElementById("decimal").value ="";
    document.getElementById('binaire').value="";
    document.getElementById('hexadecimal').value ="";
    document.getElementById('octal').value ="";
}

// FIN DU PROGRAMME