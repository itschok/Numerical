function f(x, func) {
    return eval(func)
}
function Calbi() {
    let funcStr = document.getElementById("func").value;
    let xl = parseFloat(document.getElementById("XL").value);
    let xr = parseFloat(document.getElementById("XR").value);
    let tol = 0.000001;

    let fxl = f(xl, funcStr);
    let fxr = f(xr, funcStr);

    let output = "";
    let iter = 0;
    let mid;

    while ((xr - xl) / 2 > tol) {
        iter++;
        mid = (xl + xr) / 2;
        let fmid = f(mid, funcStr);

        output += `iteration ${iter}: XL=${xl}, XR=${xr}, Mid=${mid}, f(Mid)=${fmid}\n`;

        if (f(mid) == 0) {
            break;
        } else if (fxl * fmid < 0) {
            xr = mid;
            fxr = fmid;
        } else {
            xl = mid;
            fxl = fmid;
        }
    }
    output += `คำตอบประมาณ: ${mid}, จำนวนรอบ: ${iter}`;
    document.getElementById("result").textContent = output;
}
