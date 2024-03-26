import { APIsetting } from "../settings/APIsetting";

function uniqueRandomNumbers(k, N) {
  let nums = new Set();
  while (nums.size < k) {
    let num = Math.floor(Math.random() * N) + 1;
    nums.add(num);
  }
  return Array.from(nums);
}

async function getPokemonInfo({ id, shiny }) {
  let url = `${APIsetting.PokemonURL}/${id}`;
  //console.log(url);
  const res = await fetch(url);
  const { name, sprites } = await res.json();
  const img = sprites[shiny ? "front_shiny" : "front_default"];
  return { name, img, id };
}

async function fetchApool({ poolSize, setLoaded }) {
  const randomIntArray = uniqueRandomNumbers(poolSize, APIsetting.MAXID);
  const poolList = [];

  for (let num of randomIntArray)
    poolList.push({ id: num, shiny: APIsetting.shiny });

  const promises = poolList.map((item) =>
    getPokemonInfo(item).then((data) => {
      setLoaded((val) => val + 1);
      return data;
    })
  );

  const responses = await Promise.all(promises);

  return responses;
}

export default fetchApool;
