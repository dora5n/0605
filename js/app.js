// alert(1111);


// const num = 30;

// if (num >= 30) {
//   console.log("30ですよ！！");
// } else {
//   console.log("違います");
// }

// if (num === 30) {
//   console.log("30!!!");
// }else if (num === 40) {
//   console.log("40!!!");
// }else if (num === 50) {
//     console.log("50!!!");
// }else{console.log("どれにも当てはまらない");
// }



$("button").on("click", function () {

$('.a').html('押された');

const random = Math.floor(Math.random() * 5);
console.log(random, "ランダム");

if (random === 0) {
  console.log("大吉です");
  // $(".a").html("大吉です");
  // $(".a").css("color", "red");
  $(".a").html("<img src='../img/1.jpg' >");
  // $(".a").html("<img src='img/1.jpg' >")
} else if (random === 1) {
  console.log("中吉です");
  // $(".a").html("中吉です");
  // $(".a").css("color", "green");
  $(".a").html("<img src='../img/2.jpg' >");
} else if (random === 2) {
  console.log("吉です");
  // $(".a").html("吉です");
  // $(".a").css("color", "yellow");
  $(".a").html("<img src='../img/4.jpg' >");
} else if (random === 3) {
  console.log("凶です");
  // $(".a").html("凶です");
  // $(".a").css("color", "blue");
  $(".a").html("<img src='../img/5.jpg' >");
} else if (random === 4) {
  console.log("大凶です");
  // $(".a").html("大凶です");
  // $(".a").css("color", "black",);
  // $(".a").css("font-size", "50px");
  $(".a").hide('slow');
  $(".a").show('slow');
  $(".a").html("<img src='../img/6.jpg' >");
}


});
