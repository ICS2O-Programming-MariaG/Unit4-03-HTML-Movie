// Copyright (c) 2022 Maria Goemans All rights reserved
//
// Created by: Maria G
// Created on: May 1, 2022
// This file contains the JS functions for index.html

"use strict"

function ageSent() {
  //initializing and declaring variables
  let age = parseInt(document.getElementById("user-age").value);
  let message = "";
  //beginning if statement: if user age is greater than or equal to 17
  if (age >= 17) {
    message = "You are old enough to see an R-rated movie on your own.";
  }
  //otherwise, if age is greater than or equal to 13
  else if (age >= 13) {
    message = "You can watch a PG-13 movie alone.";
  }
  //otherwise, if age is greater than or equal to 5
  else if (age >= 5) {
    message = "You can see a G or PG movie on your own."
  }
  //else (any age less than 5)
  else {
    message = "You need to be supervised to watch any movie. If you want to watch a movie, we suggest watching a family movie with a parent or guardian.";
  }
  //what should be displayed with all of the options
  document.getElementById("results").innerHTML = message;
}
