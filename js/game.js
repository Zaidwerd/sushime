$(document).ready(function (){

  // Top Belt
function movePlateTop(){
    let plateT = $('#plateTop1');
    let distance = 1000;
    setInterval(function(){
      plateT.css('left', distance + 'px');
      if (distance < -300) {
        distance = 1000;
      } else {
        distance -= 5;
      }
    },100);
  };

function movePlateTop2(){
    let plateT2 = $('#plateTop2');
    let distance = 750;
    setInterval(function(){
      plateT2.css('left', distance + 'px');
      if (distance < -300) {
        distance = 1000;
      } else {
        distance -= 5;
      }
    }, 100);
  };

function movePlateTop3(){
    let plateT3 = $('#plateTop3');
    let distance = 500;
    setInterval(function(){
      plateT3.css('left', distance + 'px');
      if (distance < -300) {
        distance = 1000;
      } else {
        distance -= 5;
      }
    }, 100);
  };

function movePlateTop4(){
    let plateT4 = $('#plateTop4');
    let distance = 250;
    setInterval(function(){
      plateT4.css('left', distance + 'px');
      if (distance < -300) {
        distance = 1000;
      } else {
        distance -= 5;
      }
    }, 100);
  };

function movePlateTop5(){
    let plateT5 = $('#plateTop5');
    let distance = 0;
    setInterval(function(){
      plateT5.css('left', distance + 'px');
      if (distance < -300) {
        distance = 1000;
      } else {
        distance -= 5;
      }
    }, 100);
  };

movePlateTop();
movePlateTop2();
movePlateTop3();
movePlateTop4();
movePlateTop5();

  // Bottom Belt

function movePlateBottom(){
    let plateB = $('#plateBottom5');
    let distance = 1000;
    setInterval(function(){
      plateB.css('right', distance + 'px');
      if (distance < -300) {
        distance = 1000;
      } else {
        distance -= 5;
      }
    }, 100);
  };

function movePlateBottom2(){
    let plateB2 = $('#plateBottom4');
    let distance = 750;
    setInterval(function(){
      plateB2.css('right', distance + 'px');
      if (distance < -300) {
        distance = 1000;
      } else {
        distance -= 5;
      }
    }, 100);
  };

function movePlateBottom3(){
    let plateB3 = $('#plateBottom3');
    let distance = 500;
    setInterval(function(){
      plateB3.css('right', distance + 'px');
      if (distance < -300) {
        distance = 1000;
      } else {
        distance -= 5;
      }
    }, 100);
  };

function movePlateBottom4(){
    let plateB4 = $('#plateBottom2');
    let distance = 250;
    setInterval(function(){
      plateB4.css('right', distance + 'px');
      if (distance < -300) {
        distance = 1000;
      } else {
        distance -= 5;
      }
    }, 100);
  };

function movePlateBottom5(){
    let plateB5 = $('#plateBottom1');
    let distance = 0;
    setInterval(function(){
      plateB5.css('right', distance + 'px');
      if (distance < -300) {
        distance = 1000;
      } else {
        distance -= 5;
      }
    }, 100);
  };

movePlateBottom();
movePlateBottom2();
movePlateBottom3();
movePlateBottom4();
movePlateBottom5();

var plateArr = $('.sushiPlate');
var emptyPlates = [];
var score= 0;

function updateEmptyPlateArr(){
  for(var i = 0; i < plateArr.length; i++){
    if(plateArr.html() == ''){
      emptyPlates.push(plateArr[i])
      console.log(emptyPlates)
    }
  }
};

function randomPlate(array) {
  min= Math.ceil(0);
  max= Math.floor(11);
  return array [Math.floor(Math.random() * (max-min)+min)];
}

function addGoodSushi(){
  console.log('makin good sush')
  $(randomPlate(emptyPlates)).append("<img src='images/goodSushi.png' class= 'goodSushi'/>")
};

function addAmazingSushi(){
  console.log('makin some other good sush')
  $(randomPlate(emptyPlates)).append("<img src='images/amazingSushi.png' class= 'amazingSushi'/>");
};

function populateGoodSushi(){
  addGoodSushi();
  addAmazingSushi();
  updateEmptyPlateArr();
}
setInterval(populateGoodSushi, 3000);
setTimeout(populateGoodSushi, 5000);

$(function(){
$('.goodSushi').on('click', '.goodSushi', function(){
  $(this).removeClass();
  score += 10;
})
});

})
