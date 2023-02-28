let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment () {
	count = count + 1
	countEl.innertext = count

}

function save () {
	let countStr = count + " - "
	saveEl.innerText += countStr
	console.log(count)
}
