function f(x,funstr){
    return eval(funstr);
}
function calbi(){
    let funcstr= document.getElementById("func").value;
    let xl =  parseFloat(document.getElementById("XL").value);
    let xr = parseFloat(document.getElementById("XR").value);
    let tol = 0.000001;
    let fxl = f(xl,funcstr);
    let fxr = f(xr,funcstr);
    let output="";
    let mid;
    let iter=0;
    while ((xr - xl) / 2 > tol){
        iter++;
        mid = (xl+xr)/2;
        let fmid=f(mid,funcstr);
        output += `iteration ${iter}: XL=${xl}, XR=${xr}, Mid=${mid}, f(Mid)=${fmid}\n`;


        if (fmid===0)  {
            break;
        }
        else if (fxl*fmid<0){
            xl = mid;
            fxl = fmid;
        }
        else{
            xr = mid;
            fxr= fmid;
        }
    }
    output += `คำตอบประมาณ: ${mid}, จำนวนรอบ: ${iter}`;
    document.getElementById("result").textContent= output;
}