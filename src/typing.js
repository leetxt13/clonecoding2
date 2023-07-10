"use strict";

new TypeIt(".home__title--strong", { loop: true, speed: 100 }) //joy
  .move(-3)
  .type("Amazing ") // Amazing |joy
  .pause(1500)
  .move(null, { to: "END" })
  .delete()
  .type("funny Joy") //funny Joy|
  .pause(1500)
  //   .move(-4)
  //   .delete(-5)
  //   .type("happy Joy")
  //   .delete()
  .go();
