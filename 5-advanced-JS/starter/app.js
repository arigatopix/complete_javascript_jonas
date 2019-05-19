var john = {
  name : 'John',
  say : function(say, name) {
    if(say === 'Hello') {
      console.log('Hello ' + name + ', I\'m ' +this.name);
    } else if (say === 'Goodbye') {
      console.log('Goodbye ' + name);
    } else {
      console.log('Say something please.');
    }
  }
};

var mike = {
  name : 'Mike'
}

// Mike say hello Sam
john.say.call(mike, 'Hello', 'Sam');

// bind
var sayGoodbye = john.say.bind(john,'Hello');
sayGoodbye('Mike');