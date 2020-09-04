import $ from "jquery";
var pong = document.querySelector("#pong");
var snake = document.querySelector("#snake");
var tetris = document.querySelector("#tetris");

pong.addEventListener("click", function () {
  $.ajax({
    url: "/api/games/pong",
    method: "GET",
  });
});
snake.addEventListener("click", function () {
  $.ajax({
    url: "/api/games/snake",
    method: "GET",
  });
});
tetris.addEventListener("click", function () {
  $.ajax({
    url: "/api/games/tetris",
    method: "GET",
  });
});
