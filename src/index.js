
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Player, rollDice} from './pigdie.js';
let pOneScore = new Player (0,0);
let results = 0
let pTwoScore = new Player (0,0);

function AHHHH() {
  if (results===1) {
    $('#play-area-1').toggle();
    $('#play-area-2').toggle();
  };
}



$(document).ready(function() {
  $("form#roll-dice1").submit(function(event) {
    event.preventDefault();
    results = rollDice(1,6);
    pOneScore.roll(results);
    AHHHH(results);
    $("#chalkboard1").text(pOneScore.current);
  });

  $("form#hold-one").submit(function(event) {
    event.preventDefault();
    pOneScore.hold(pOneScore.current);
    $("#totalscore1").text(pOneScore.total);
    $("#play-area-2").show();
    $("#play-area-1").hide();
  });


  $("form#roll-dice2").submit(function(event){
    event.preventDefault();
    results= rollDice(1,6);
    pTwoScore.roll(results);
    AHHHH(results);
    $("#chalkboard2").text(pTwoScore.current);
  });

  $("form#hold-two").submit(function(event) {
    event.preventDefault();
    pTwoScore.hold(pTwoScore.current);
    $("#totalscore2").text(pTwoScore.total);
    $("#play-area-2").hide();
    $("#play-area-1").show();
  });
});

