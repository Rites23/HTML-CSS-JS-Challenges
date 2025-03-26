// snippet-2
let friends = ["nader", "matty", "jennifer", "lora"];

let chosen = friends[0];

friends.forEach(function (friend) {
  if (friend.length > chosen.length) {
    chosen = friend;
  }
});

console.log(chosen);
