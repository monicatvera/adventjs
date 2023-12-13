function calculateTime(deliveries) {
  let counter = 0;
  const DATE_DEFAULT = "1999-05-18T";
  const today = new Date(DATE_DEFAULT + "00:00:00");
  for (let hours of deliveries) {
    const result = new Date(DATE_DEFAULT + hours).getTime();
    counter += result - today.getTime();
  }
  const siete = new Date(DATE_DEFAULT + "07:00:00").getTime();
  today.setMilliseconds(counter);
  const diff = siete - today.getTime();

  if (diff > 0) {
    return `-${new Date(diff).toISOString().slice(11, 19)}`;
  } else {
    return new Date(Math.abs(diff)).toISOString().slice(11, 19);
  }
}
