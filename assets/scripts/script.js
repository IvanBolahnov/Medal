let solution = (args) => {
  let [a, b, c] = args;
  
  let D = b**2 - (4*a*c);
  let x0 = (-1 * b) / (2 * a);
  let x1 = (-1 * b + D**(1/2)) / (2 * a);
  let x2 = (-1 * b - D**(1/2)) / (2 * a);
  return [a, b, c, x1, x2, D, x0,]
}

let updateHash = (args) => {
  let [a, b, c] = args;
  document.location.hash = a + "_" + b + "_" + c;
}

let updateInputs = (args) => {
  [... document.querySelectorAll(".input__form input")]
  .map((arg, index)=>{
    arg.value = args[index];
  })
}

let getHash = () => {
  if (document.location.hash.length > 1 && document.location.hash.substring(1).split('_').length == 3) {
    return document.location.hash.substring(1).split('_').map((arg) => {
      return Number(arg)
    })
  }
  return false
}

let getInputs = () => {
  let [a, b, c] = [... document.querySelectorAll(".input__form input")]
  .map((arg)=>{
    return Number(arg.value);
  })

  if (a == 0 || a == NaN || b == NaN || c == NaN) {
    return false
  }

  return [a, b, c]
}

let updateBlocks = (solArgs) => {
  let main = document.querySelector("main");
  main.classList.add("main--solutions-opened")
  main.classList.remove("main--solutions-closed")
}

let checkHash = () => {
  if (getHash() != false) {
    let args = getHash()
    updateInputs(args)
    getSolution(getInputs())
    return true
  }
  return false
}

let getSolution = (args) => {
  if (args != false) {
    updateHash(args)
    solArgs = solution(args)
    updateBlocks(solArgs)
    document.querySelector(".input__get-solution").style.display = ""
    updateOutputs(solArgs)
  } else {
    console.error("Неправильные аргументы")
  } 
}

let updateOutputs = (solArgs) => {
  [... document.querySelectorAll(".output__arg--output")]
  .map((arg, index)=>{
    arg.textContent = solArgs[3 + index]
  })
}

[... document.querySelectorAll(".input__form input")]
  .map((arg)=>{
    arg.addEventListener("input", () => {
        document.querySelector(".input__get-solution").style.display = "flex"
    })
  })

checkHash()