let inputs = document.querySelectorAll("input");
for (input of inputs) {
  input.addEventListener("input", calculate);
}

let finalSkill = document.querySelector(".final");

function showVal(value, id) {
  text = document.querySelector(`[for="${id}"]`);
  text.textContent =
    text.textContent.slice(0, text.textContent.indexOf(":") + 1) + value;
}

function calculate() {
  let result = 0;

  const isLongRange = longrange.checked;
  const isElectrical = electrical.checked;
  const isOptical = optical.checked;

  const KPers = isLongRange ? 8 : isElectrical ? 6 : 5;
  const KDist = isOptical ? 5 : 7;

  const rangef = +range.value;
  const ACf = +ac.value;

  const perceptionf = +perception.value;

  const lightf = light.checked ? 10 - rangef / 6 : 0;
  const implantf = implant.checked ? 3 : 0;
  const ncrf = ncr.checked ? 25 : 0;

  const fastshooterf = fastshooter.checked ? -40 : 0;
  const stablef = stable.checked ? 25 : 0;
  const onehandf = onehand.checked ? 60 : 0;
  const mathematicf = mathematic.checked ? 30 : 0;
  const accuracyf = accuracy.checked ? 0 : -2;
  const officerf = officer.checked ? 5 : 0;

  const accuratef = accurate.checked ? 20 : 0;
  const laserf = laser.checked ? 5 : 0;

  result =
    95 +
    (rangef * (KDist / 2) + ACf) -
    ((perceptionf + accuracyf) * KPers +
      implantf +
      stablef +
      mathematicf +
      onehandf +
      ncrf +
      fastshooterf +
      accuratef +
      lightf +
      laserf +
      officerf);

  finalSkill.textContent =
    finalSkill.textContent.slice(0, finalSkill.textContent.indexOf(":") + 1) +
    Math.round(result);
}
