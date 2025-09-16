function f(x, funcs){
    return eval(funcs);
}

function Calculator(){
    let func = document.getElementById("func").value;
    let xl = parseFloat(document.getElementById("XL").value);
    let xr = parseFloat(document.getElementById("XR").value);
    let fxl = f(xl, func);
    let fxr = f(xr, func);
    let mid;
    let iter = 0;
    let tol = 0.000001;
    let output = "";

    while((xr - xl)/2 > tol){
        iter++;
        mid = (xl + xr)/2;
        let fmid = f(mid, func);
        output += `${iter},${xl},${xr},${mid},${fmid}\n`;

        if(fmid == 0){
            break;
        } else if(fmid * fxl < 0){
            xr = mid;
            fxr = fmid;
        } else {
            xl = mid;
            fxl = fmid;
        }
    }

    output += `Root ≈ ${mid}`;
    document.getElementById("result").textContent = output;
}
