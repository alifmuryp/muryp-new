// get id 
const results_post = document.getElementById("list-post-l");
const loadMore = document.getElementById("load-more");
const btn_load_id = document.getElementById("btn-load-more");

// get slug
const getSlugList = function(){
document.body.classList.add("loading")
const tesSlug = document.getElementById("list-section-list");
  const slug = tesSlug.value
  // console.log(slug)
  // get data (bisa disingkat)
  const data1 = $get_json("/blog/index.json").then((data) => {
    return data;
  });
  const data2 = $get_json("/note/index.json").then((data) => {
    return data;
  });

if (slug==="all") {
    const printData = async function printData() {
      const a = await data1;
      const b = await data2;
      const ab = [...a, ...b];
      // console.log(ab);
      // const tags = "";
      // filterTags(ab);
      sortTagList(ab)
    };
  printData()
}else if(slug==="blog"){
    data1.then((e) => {
      // filterTags(e)
      // console.log(e)
      sortTagList(e)
    });
}else{
    data2.then((e) => {
      // filterTags(e)
      // console.log(e)
      sortTagList(e)
    });
}
document.body.classList.remove("loading")
}
// get tags
const getTagsList2 = ()=>{ return document.getElementById("list-tags-list").value }
// sort by tags
let count = 0
const sortTagList=function(data){
      // pagenation
  count=count+5;
  start=count-5
  // console.log(count-5)
  // console.log(count)
  // console.log(getTagsList2())
      // result
      // results_post.innerHTML = "";
  



  const count_lenght = data.filter((item) => {
      return item.tags.toLowerCase().includes(getTagsList2());
    })
  // console.log(count_lenght.length)
  if (count >= count_lenght.length) {
 // console.log("end")
    btn_load_id.classList.add("hide")
}


      data.filter((item) => {
      return item.tags.toLowerCase().includes(getTagsList2());
    })
    .slice(start, count)
    .forEach((e) => {
        const div = document.createElement("div");
        div.innerHTML = `<div class="myread">
	      <a href="${e.link}">
      <div class="content">
        <div class="date">
									<span class="day">${e.date}</span>
							<span class="rest">${e.month}</span>
								</div>
        <div class="readMore">
        ${e.judul}
        </div>
     </div>
            </a>
    </div>
`
        results_post.appendChild(div);
})}
// template
// munculkan
getSlugList()

// update tags
const btnTags = ()=>{
results_post.innerHTML = "";
count = 0
btn_load_id.classList.remove("hide")
getSlugList()
}


// let countPost = 5;
// // catch json
// let url = "/blog/index.json";
// function fetchListPost() {
//   fetch(url)
//     .then((res) => res.json())
//     .then((dataJSON) => {
//       // pagenation
//       const data = dataJSON.slice(0, countPost);
//       // result
//       results_post.innerHTML = "";
//       data.forEach((e) => {
//         const div = document.createElement("div");
//         div.innerHTML = `<div class="myread">
//         <a href="${e.link}">
//       <div class="content">
//         <div class="date">
//                   <span class="day">${e.date}</span>
//               <span class="rest">${e.month}</span>
//                 </div>
//         <div class="readMore">
//         ${e.judul}
//         </div>
//      </div>
//             </a>
//     </div>
// `
//         results_post.appendChild(div);
//       });
//       //end fetch
//     });
// } //end func
//
// fetchListPost();
// load more
//triger
// function triggerLoad() {
//   countPost += 5;
//   fetchListPost();
// }

//end triger
//
//
//
//
//
//




// // get id
// const results_post = document.getElementById("list-post-l");
// const loadMore = document.getElementById("load-more");
// // get slug
// // get tags
// const getTagsList = ()=>{ return document.getElementById("list-tags-search").value }
// const filterTags=(dataJSON)=>{
//       // pagenation
//       const data = dataJSON.slice(0, countPost);
//       // result
//       results_post.innerHTML = "";
//       data
//     .filter((item) => {
//       return item.tags.toLowerCase().includes(getTagsList());
//     })
//     .forEach((e) => {
//         const div = document.createElement("div");
//         div.innerHTML = `<div class="myread">
//         <a href="${e.link}">
//       <div class="content">
//         <div class="date">
//                   <span class="day">${e.date}</span>
//               <span class="rest">${e.month}</span>
//                 </div>
//         <div class="readMore">
//         ${e.judul}
//         </div>
//      </div>
//             </a>
//     </div>`
//         results_post.appendChild(div);
//       });
//       //end fetch
// }
// // sort by tags
// // template
// // munculkan
//
// let countPost = 5;
// const fetchListPost = function () {
//   const slug = $chekList(slug_list);
//   // get data (bisa disingkat)
//   const data1 = $get_json("/blog/index.json").then((data) => {
//     return data;
//   });
//   const data2 = $get_json("/note/index.json").then((data) => {
//     return data;
//   });
//
// if (slug==="all") {
//     const printData = async function printData() {
//       const a = await data1;
//       const b = await data2;
//       const ab = [...a, ...b];
//       // console.log(ab);
//       // const tags = "";
//       filterTags(ab);
//     };
// }else if(slug==="blog"){
//     data1.then((e) => {
//       filterTags(e)
//     });
// }else{
//     data2.then((e) => {
//       filterTags(e)
//     });
// }
//
// } //end func
//
// fetchListPost();
// // load more
// //triger
// const triggerLoad = function () {
//   countPost += 5;
//   fetchListPost();
// }
// //end triger
