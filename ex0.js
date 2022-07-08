        /*les exercice en js. lundi,20/06/2022*/


/*execice1: ecrire un programme en js pour renvoyer la valeur minimale-maximale d'un tableau apres avoir appliquer la fonction
fournie pour la  regle de comparaison */

let myArray = [1, 2, 5, 3, 6, 9];
let m = Math.min.apply(null, myArray);
console.log(m)
/* output 1 */

/* exercice2: ecrire un programme en js qui renvoie true si la fonction de predicat fournie renvoie true pour tous 
les elements d'une ecollection fauxx autrement */
/* i will use array.prototype.every() */
let all = (arr, fn = Boolean) => arr.every(fn);
console.log(all([4, 2, 3], X => X > 1));
/* output: true */

/* exercice3: ecrire un programme js pour diviser les valeurs de deux tableaux donnees en deux groupes. si un element
dans le filter est truthly l'element correspondant dans la collection appartient au premier groupe, sinon,il 
appartient au deuxieme groupe */
/* ceci est la premiere methode */

function split(arr, filter) {
    let newArr = [[],[]]
    for (let i = 0; i < arr.length; i ++) {
        if (filter[i]) {
            newArr[0].push(arr[i])
        } else {
            newArr[1].push(arr[i])
        }
    }
    return newArr
}

/* exercice4: write a js program to remove specified elements from the left of a given arrays of elements*/
let arrays = ['apple', 'mango', 'banana', 'tomato', 'mandanrine']
let x = arrays.slice(-1);
let remoteRight =(myArray,y)=> {
    return myArr.splice(y)
}
/*exercice5: c'est le meme mais avec le right*/
let removeLeft =(myArray,x)=> {
    return myArr.splice(x)
} 
  // exercice8: write a javascript program to filter out the non-unique values in an arrays.
   let filter = (x) => {
    return x.filter(i => x.indexof(i) !== x.lastindexof(i));
   }

   // exercice9:
   let arrays1 = [1,2,3,4,5,7,9,8,11,44,55,77];
   let uniqueval2 = (arrays) => arrays.reduce((acc,currentval) => (acc.includes(currentval)))

   




