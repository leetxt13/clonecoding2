"use strict";

new TypeIt(".home__title--strong", { loop: true, speed: 110 }) //joy
  .move(-3)
  .type("Amazing ") // Amazing |joy
  .pause(1500)
  .move(null, { to: "END" })
  .delete()
  .type("funny Joy") //funny Joy|
  .pause(1500)
  .move(-4)
  .delete(5) // funny| Joy
  .type("happy")
  .pause(1500)
  .move(null, { to: "END" })
  .delete()
  //   .move(-4)
  //   .delete(-5)
  //   .type("happy Joy")
  //   .delete()
  .go();
