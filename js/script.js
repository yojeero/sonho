
/* clock */		
	let updateClock = () => {
  let currentDate = new Date();
	let daysOfWeek = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	];
	let currentDay = daysOfWeek[currentDate.getDay()];
	let currentHours = String(currentDate.getHours()).padStart(2, "0");
	let currentMinutes = String(currentDate.getMinutes()).padStart(2, "0");
	let currentTime = `${currentHours}:${currentMinutes}`;

	document.getElementById("time").textContent = `${currentTime}`;
	document.getElementById("day").textContent = `${currentDay}`;
	};
	// Update the clock every second (1 seconds)
	setInterval(updateClock, 1000);
	updateClock();

