function checkSpeed() {
    const speedInput = document.getElementById('speedInput');
    const pointsOutput = document.getElementById('pointsOutput');
  
    // Parse the input value as a number
    const speed = Number(speedInput.value);
  
    // Set the speed limit and demerit points
    const speedLimit = 70;
    const pointsPerDemerit = 5;
    const maxPoints = 12;
  
    // Calculate the demerit points
    let demeritPoints = 0;
    if (speed <= speedLimit) {
      pointsOutput.textContent = 'Points: 0';
      return;
    } else {
      demeritPoints = Math.floor((speed - speedLimit) / pointsPerDemerit);
    }
  
    // Output the demerit points
    pointsOutput.textContent = `Points: ${demeritPoints}`;
  
    // Check if the license should be suspended
    if (demeritPoints > maxPoints) {
      pointsOutput.textContent += ' - License suspended';
    }
  }
  