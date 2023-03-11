// DOM variables
const parents = document.querySelectorAll(".test-result");
const icons = document.querySelectorAll(".icon");
const score = document.querySelector(".average-number");
const path = "./data.json";

// fetch data from file
fetch(path)
	.then((response) => response.json())
	.then((jsonData) => {
		let sum = 0;
		parents.forEach((parent, i) => {
			// assign summary values
			parent.querySelector(".number").innerText = jsonData[i].score;
			// assign image sources
			icons[i].src = jsonData[i].icon;

			// get sum of summary results
			sum += +parent.querySelector(".number").innerText;
		});
		// assign score
		score.innerText = Math.round(sum / parents.length);
	})
	.catch((error) => alert(error));
