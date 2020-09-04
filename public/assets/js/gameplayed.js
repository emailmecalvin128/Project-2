import $ from "jquery";
var pong = document.querySelector("#pong");
var snake = document.querySelector("#snake");
var tetris = document.querySelector("#tetris");

pong.addEventListener("click", function () {
    $.ajax({.then
        url: "/api/games",
        method: "GET",
        data: { name: "pong" }
    })
})
snake.addEventListener("click", function () {
    $.ajax({.then
        url: "/api/games",
        method: "GET",
        data: { name: "snake" }
    })
})
tetris.addEventListener("click", function () {
    $.ajax({.then
        url: "/api/games",
        method: "GET",
        data: { name: "tetris" }
    })
})