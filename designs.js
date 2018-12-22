function makeGrid() {

	const Height = document.getElementById('inputHeight').value;
	const Width = document.getElementById('inputWidth').value;
	const canvas = document.getElementById('pixelCanvas');

	canvas.innerHTML = '';

	for (let x = 0; x < Height; x++) {
  	let row = canvas.insertRow(x);

  	for (let y = 0; y < Width; y++) {
    	let cell = row.insertCell(y);

      cell.addEventListener('click', function(event) {
        event.target.style.backgroundColor = document.getElementById('colorPicker').value;
      });
    }
  }
}

document.getElementById('sizePicker').addEventListener('submit', function(event) {
  event.preventDefault();
  makeGrid();
});
