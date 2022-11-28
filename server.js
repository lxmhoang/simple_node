const fav_food = process.env.FAVFOOD;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log('Containers rule!');
    await sleep(2500);
    console.log('my fav food : ${fav_food}');
    await sleep(2500);
  }
}

main();
