//answer 1
var prices = items.map (function(element,idx,arr){
return element.price;
});
console.log (prices)
function sum(arr) {
  var sumOfNums = 0;
  for (var i = 0; i < arr.length; i++) {
    sumOfNums = sumOfNums = arr[1]
  }
return sumOfNums;
}
sum(prices) / prices.length
//answer 2
var itemSearch = items.filter(function (element){
  return element.price >= 14.00 && element.price <= 18.00 && element.currency_code === "USD"
}).map (function (element,idx,arr){
  return element.title;
});
var arrySearch = itemSearch.map(function(element){
  return element.title;
})
//answer 3
var currencyCodeFinder = items.filter (function(element,idx,arr){
  return element.currency_code === "GBP"
}).map (function (element,idx,arr){
  return element.title && element.price
});
//answer 4
var itemWood = items.filter (function(element,idx,arr){
 console.log(element.materials);
  return element.materials.indexof("wood") !== -1;
}).map (function (element,idx,arr){
  return element.title
})
//answer 5
var eightOrmore = items.filter (function(element,idx,arr){
 return element.materials.length >= 8;
})
.map (function(element){
  return{
    Title: element.title,
    count: element.quantity,
    matarials: elemnt.materials
  }
})

var myHtml= eightOrmore.map(function(element)){

  var stringOfmaterials = "<ul>"
  element.materials.forEach(function(material){
    stringOfmaterials += `<li> ${material} </li>`;
  });
    stringOfmaterials += "</ul>";
return`<h1>${eightOrmore.title}<h1/>
       <h3> Quantity: ${element.count}</h3>
      `
})


var sum = items.reduce(function(accumulator,element,idx,arr){
  return accumulator + element.price;
},0)
