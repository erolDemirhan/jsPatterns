const User = function(name){
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    send: function(message, to){
        this.chatroom.send(message, this, to);
    },
    receive: function(message, from){
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
}

const Chatroom = function(){
    let users = {};
    return {
        register: function(user){
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function(message, from, to){
            if(to){
                // single user message
                to.receive(message, from);
            }else{
                // mass message
                for(key in users){
                    if(users[key] !== from){
                        users[key].receive(message, from);
                    }
                }
            }
        }
    }
}

const user1 = new User('John');
const user2 = new User('Jack');
const user3 = new User('Joey');

const chatroom = new Chatroom();

chatroom.register(user1);
chatroom.register(user2);
chatroom.register(user3);

user1.send('Hello Joey', user3);
user3.send('Hello John', user1);
user2.send('What\'s up guys!');

