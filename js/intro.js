/*
    var array = ['Red', 'Blue', 'black'];
    var temp = [37.9, 89, 49];
    var obj = {
        name: 'abdul',
        clas: 'grad',
        fa: 'AG',
        likes: ['Blue', 'Black', 'Grapes']
    }
    */
function pet(type, name, weight, likes) {
    this.type = type;
    this.name = name;
    this.weight = weight;
    this.likes = likes;
}
window.onload = init;

function init() {
    /*
    console.log(array);
    console.log(temp);
    console.log(obj);
    */
    var pickels = new pet("Cat", "Pickels", 7, ["Sleeping", "Purring", "Eating Butter"]);
    console.log(pickels);
    var pickelsJson = JSON.stringify(pickels);
    console.log(pickelsJson);
    var tilla = new pet("Dog", "Tilla", 2, ["Sleeping", "Eating", "Walking"]);
    console.log(tilla);
    var tillaJson = JSON.stringify(tilla);
    console.log(tillaJson);
    var petsArray = [pickels, tilla];
    console.log(petsArray);
    var petsArrayJson = JSON.stringify(petsArray);
    console.log(petsArrayJson);
    var anotherArray = JSON.parse(petsArrayJson);
    console.log(anotherArray);
}