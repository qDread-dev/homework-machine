window.onload = function(){
    let exSqrtInput = document.getElementById('sqrtIn');
    let exSqrtOutput = document.getElementById('sqrtOut');
    let pyLegA = document.getElementById('pyLegA');
    let pyLegB = document.getElementById('pyLegB');
    let pyLegC = document.getElementById('pyLegC');
    let aFindB = document.getElementById('aFindB');
    let bFindB = document.getElementById('bFindB');
    let cFindB = document.getElementById('cFindB');

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

    document.getElementById('sqrtInput').oninput = function(){
      let input = document.getElementById('sqrtInput');
      let output = document.getElementById('sqrtOutput');
      simplifySqrt(input, output, k);
    }

    
    document.getElementById('equation').oninput = function(){
      let input = document.getElementById('equation');
      let output = document.getElementById('output');
      output.value = eval(input.value);
    };
    
    exSqrtInput.oninput = function(){
      
      exSqrtOutput.value = Math.sqrt(exSqrtInput.value);
      
    };
    pyLegA.oninput = function(){
      pyLegB.oninput = function(){
          
           pyLegC.value = pyLegA.value * pyLegA.value + pyLegB.value * pyLegB.value;
          simplifySqrt(pyLegC, pyLegC, k);
          
      };
    };
    aFindB.oninput = function(){
      cFindB.oninput = function(){
        let aSquared = aFindB.value * aFindB.value;
        let cSquared = cFindB.value * cFindB.value;
        bFindB.value = cSquared - aSquared;
          simplifySqrt(bFindB, bFindB, k);
      };
    };

    
};
