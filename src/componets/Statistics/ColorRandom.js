function randomColor() {
  var r = () => (Math.random() * 256) >> 0;

  return `rgb(${r()}, ${r()}, ${r()})`;
}

export default randomColor;
