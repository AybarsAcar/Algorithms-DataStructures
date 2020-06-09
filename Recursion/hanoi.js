// Hanoi Towers Game
// n = number of discs
// f = first (initial)
// h = helper -- the one in the middle
// t = target

function move(f, t){
  console.log(`Move the disc from ${f} to ${t}`);
}

function moveVia(f, h, t){
  move(f, h);
  move(h, t);
}

function hanoi(n, f, h, t){
  if (n>0){
    hanoi(n-1, f, t, h);
    move(f, t);
    hanoi(n-1, h, f, t)
  }
}

hanoi(5, "A", "B", "C");
