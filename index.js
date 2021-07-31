function createRegexSimple(array) {
  if (!Array.isArray(array)) {
    throw new TypeError("Input is not a valid Array");
  }
  array = array
    .map(item => item.toString())
    .sort();

}

function createCrazyRegex(array) {

}

module.exports = {
  createRegex
};

/*

IDEAS

fish,french fries,fruit
-->
f(r(ench fries|uit)|ish)

cake,firefly,pineapple
([pf]i((?<=fi)r|(?<=pi)n)|cak)e(((?<=ne)ap{2}|(?<=re)f)l((?<=pl)e|(?<=fl)y)|(?<=ke))

*/
