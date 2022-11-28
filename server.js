function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log('Containers rule!');
    console.log('my fav food : ${process.env.FAVFOOD}');
    await sleep(5000);
  }
}

main();
