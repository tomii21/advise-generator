window.onload =async function(){
  const response = await fetch("https://api.adviceslip.com/advice")
  const json = await response.json();
  let id = document.querySelector(".id")
  let advice = document.querySelector(".advice")

  id.append(json.slip.id)
  advice.append(json.slip.advice)
}