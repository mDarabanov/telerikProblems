var facebookProfile = {
  name: 'Mario',
  friends: 100,
  messages: ['Hello buddy', 'Please, like my status!', 'So I will be happy!'],
  postMessage: function(message) {
    this.messages.push(message);
  },
  deleteMessage: function(index) {
    this.messages.splice(index, 1);
  },
  addFriends: function() {
    this.friends++;
  },
  removeFriends: function() {
    this.friends--;
  }
};

console.log(facebookProfile.name);
console.log(facebookProfile.friends);
console.log(facebookProfile.messages);

facebookProfile.removeFriends();
console.log(facebookProfile.friends);
