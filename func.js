function f(x, funcStr) {
  return Function("x", "return " + funcStr)(x);
}

function bisection() {
  let funcStr = document.getElementById("func").value;
  let a = parseFloat(document.getElementById("XL").value);
  let b = parseFloat(document.getElementById("XR").value);
  let tol = parseFloat(document.getElementById("tolerance").value);
  let fa = f(a, funcStr);
  let fb = f(b, funcStr);
  let output = "";

  let mid = (a + b) / 2;
  let iter = 0;

  while ((b - a) / 2 > tol) {
    iter++;
    mid = (a + b) / 2;
    let fmid = f(mid, funcStr);

    output += `รอบที่ ${iter}: a=${a}, b=${b}, mid=${mid}, f(mid)=${fmid}\n`;

    if (fmid === 0) {
      break;
    } else if (fa * fmid < 0) {
      b = mid;
      fb = fmid;
    } else {
      a = mid;
      fa = fmid;
    }
  }

  output += `\n✅ คำตอบประมาณ: ${mid} (จำนวนรอบ: ${iter})`;
  document.getElementById("result").textContent = output;
}
