'use strict';
var log = console.log;
function fibonacci() {
  var $__2,
      prev,
      curr;
  return $traceurRuntime.generatorWrap(function($ctx) {
    while (true)
      switch ($ctx.state) {
        case 0:
          $__2 = [0, 1], prev = $__2[0], curr = $__2[1];
          $ctx.state = 9;
          break;
        case 9:
          $ctx.state = (1) ? 1 : -2;
          break;
        case 1:
          $ctx.state = 2;
          return curr;
        case 2:
          $ctx.maybeThrow();
          $ctx.state = 4;
          break;
        case 4:
          ($__2 = [curr, prev + curr], prev = $__2[0], curr = $__2[1], $__2);
          $ctx.state = 9;
          break;
        default:
          return $ctx.end();
      }
  }, this);
}
var gen = fibonacci();
gen.next();
for (var $__0 = gen[Symbol.iterator](),
    $__1; !($__1 = $__0.next()).done; ) {
  var n = $__1.value;
  {
    if (n > 1000)
      break;
    console.log(n);
  }
}
