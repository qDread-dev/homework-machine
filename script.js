window.onload = function(){
    let basicInput = document.getElementById('equation');
    let basicOutput = document.getElementById('output');
    let exSqrtInput = document.getElementById('sqrtIn');
    let exSqrtOutput = document.getElementById('sqrtOut');
    let pyLegA = document.getElementById('pyLegA');
    let pyLegB = document.getElementById('pyLegB');
    let pyLegC = document.getElementById('pyLegC');
    let aFindB = document.getElementById('aFindB');
    let bFindB = document.getElementById('bFindB');
    let cFindB = document.getElementById('cFindB');
    let simpSqrtInput = document.getElementById('sqrtInput');
    let simpSqrtOutput = document.getElementById('sqrtOutput');
    let k = 1;

    function simplifySqrt(simpSqrtInput, simpSqrtOutput, k){
      for (let i = 1; i * i <= simpSqrtInput.value; i++)
      {
        if (simpSqrtInput.value % (i * i) == 0)
        {
          k = i;
        }
      }
      if (simpSqrtInput / (k * k) === null)
      {
        simpSqrtOutput.value = k;
      }
      if (simpSqrtInput.value / (k * k) == 1)
      {
        simpSqrtOutput.value = k;
      }
      else if (simpSqrtInput.value / (k * k) > 1)
      {
        if (k == "1")
        {
          simpSqrtOutput.value = "\u{221A}" + (simpSqrtInput.value / (k * k));
        }
        else
        {
          simpSqrtOutput.value = k + "\u{221A}" + (simpSqrtInput.value / (k * k));
        }
      }
    };

    simpSqrtInput.oninput = function(){
      simplifySqrt(simpSqrtInput, simpSqrtOutput, k)
    };
    
    basicInput.oninput = function(){
      basicOutput.value = eval(basicInput.value);
    };
    
    exSqrtInput.oninput = function(){
      
      exSqrtOutput.value = Math.sqrt(exSqrtInput.value);
      
    };
    pyLegA.oninput = function(){
      pyLegB.oninput = function(){
          
          let unSimp = pyLegA.value * pyLegA.value + pyLegB.value * pyLegB.value;
          simplifySqrt(unSimp, pyLegC.value, k);
      };
    };
    aFindB.oninput = function(){
      cFindB.oninput = function(){
        let aSquared = aFindB.value * aFindB.value;
        let cSquared = cFindB.value * cFindB.value;
        bFindB.value = cSquared - aSquared;
      };
    };

    
};
