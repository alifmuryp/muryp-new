let url = "/index.json";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((e) => {
      // let tagdata = {...e.tags}
console.log(...e.tags)
      // console.log(tagdata)
      // console.log(...e.tags)
          // const uniqueSet = new Set(tagdata);
    // console.log(tagdata);
// console.log(e.tags)
    })

    //     var tagList = "";
// for (let step = 0; step < lengData; step++) {
//   let tagList = data[step].tags;
//   var tagEnd = tagList
//     // console.log(data[step].tags)
// }
// console.log(tagEnd)
    // const uniqueSet = new Set(data.tags);
    // console.log(uniqueSet);
  });

// const filterItems = (arr, query) => {
//   return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
// }
// let url = "/index.json";
// fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//     const lengData = Object.keys(data).length;
//     for (let step = 0; step < lengData; step++) {
//       // Runs 5 times, with values of step 0 through 4.
//       // console.log(data[step].tags);
//       const myTags = data[step].tags;
//       // console.log(myTags);
// // console.log(filterItems(myTags, 'ja'))
//       const tes1 = filterItems(myTags, 'ja')
//       console.log(tes1)
//     }
//   });
