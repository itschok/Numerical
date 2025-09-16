function f(x, funstr){
    return Function("x", "return " + funstr)(x);
}

function cal(){
    let func = document.getElementById("func").value;
    let xl = parseFloat(document.getElementById("XL").value);
    let xr = parseFloat(document.getElementById("XR").value);
    let tol = 0.000001;

    let fxl = f(xl, func);
    let fxr = f(xr, func);

    let mid, mid_old;
    let iter = 0;
    let output = "";
    let error = 1;

    while((xr - xl)/2 > tol){
        iter++;
        mid_old = mid;           // เก็บ mid เก่า
        mid = (xl + xr)/2;       // mid ใหม่
        let fmid = f(mid, func);

        if(iter > 1){
            error = Math.abs(mid - mid_old)/Math.abs(mid);
        }

        output += `Iteration ${iter}: XL=${xl}, XR=${xr}, Mid=${mid}, f(Mid)=${fmid}, Error=${error}\n`;

        if(Math.abs(fmid) < tol){
            break;
        }

        if(fxl * fmid < 0){
            xr = mid;
            fxr = fmid;
        } else {
            xl = mid;
            fxl = fmid;
        }
    }

    output += `คำตอบประมาณ: ${mid}, จำนวนรอบ: ${iter}, Errorสุดท้าย: ${error}`;
    document.getElementById("result").textContent = output;
}
