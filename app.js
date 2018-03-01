var app = new Vue({
  el: '#vue-app',
  data: {
    todos: [
      { text: 'Learn JS' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' },
    ],
  },
  methods: {

  }
});

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!',
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('');
    }
  }
});

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!',
  }
});

Vue.component('todo-item', {
  props: ['todo1'],
  template: '<li>{{ todo1.text }}</li>',
});

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { text: 'Vegetables' },
      { text: 'Cheese' },
      { text: 'Whatever else humans are supposed to eat' },
    ]
  }
});

var vm = new Vue({
  data: {
    a: 1
  },
  created: function() {
    console.log('a is: ' + this.a);
  }
});

var appSome = new Vue({
  el: '#some-el',
  data: {
    message: 'This is the message that shuold never be changed:)',
  }
});

var vm2 = new Vue({
  el: '#example',
  data: {
    message: 'Hello',
  },
  computed: {
    reversedMessage: function() {
      return this.message.split('').reverse().join('');
    }
  }
});

var demoNameVar = new Vue({
  el: '#demoName',
  data: {
    firstName: 'Don',
    lastName: 'Joe'
  },
  computed: {
    fullName: {
      get: function() {
        return this.firstName + ' ' + this.lastName;
      },
      set: function(newValue) {
        var names = newValue.split(' ');
        this.firstName = names[0];
        this.lastName = (names[names.length - 1]).toUpperCase();
      }

    }
  }
});
