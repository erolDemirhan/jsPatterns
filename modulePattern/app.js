// basic structure

// (function(){
//     // declare private vars and functions up here

//     return {
//         // declare public vars and functions
//     }
// })();

// this is a standart module patterns
const UICtrl = (function(){
    let text = 'Hello World';

    const changeText = function(){
        const element = document.querySelector('h1');
        element.textContent = text;
    }

    return{
        callChangeText: function(){
            changeText();
            console.log(text);
        }
    }
})();

UICtrl.callChangeText();

console.clear();

// revealing module pattern
const ItemCtrl = (function(){
    let data = [];

    function add(item){
        data.push(item);
        console.log('item added');
    }

    function get(id){
        return data.find(item =>{
            return item.id === id;
        });
    }

    return {
        add: add,
        get: get
    }
})();

ItemCtrl.add({id: 1, name: 'John'});
console.log(ItemCtrl.get(1));

