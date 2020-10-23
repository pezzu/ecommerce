const fs = require("fs");
const path = require("path");

if (process.argv.length < 3) {
  console.error(`Usage: ${path.basename(__filename)} <source.json> <output.json>`);
  process.exit(1);
}

try {
  const source = JSON.parse(fs.readFileSync(process.argv[2], "utf-8"));

  const output = source.map((product) => {
    const [_, w, h] = product.image.match(/dummyimage\.com\/(\d+)x(\d+)/);
    const seed = product.id.split('-')[0]
    return { ...product, image: `https://picsum.photos/seed/${seed}/${w}/${h}` };
  });

  fs.writeFileSync(process.argv[3], JSON.stringify(output));
} catch (e) {
  console.error(e);
  process.exit(1);
}

console.log("Done");
