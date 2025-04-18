function generateBoxes() {
    const numPlayers = parseInt(document.getElementById('playerCount').value);
    
    if (isNaN(numPlayers) || numPlayers < 1) {
      alert("Please enter a valid number of players!");
      return;
    }
  
    const col1 = document.getElementById('col1');
    const col2 = document.getElementById('col2');
    col1.innerHTML = '';
    col2.innerHTML = '';
  
    let sizeClass = '';
    if (numPlayers > 8 && numPlayers <= 12) {
      sizeClass = 'small';
    } else if (numPlayers > 12) {
      sizeClass = 'xsmall';
    }
  
    const half = Math.ceil(numPlayers / 2);
  
    for (let i = 1; i <= half; i++) {
      const box1 = document.createElement('div');
      box1.className = `box ${sizeClass}`;
      box1.contentEditable = true;
      box1.innerText = `Box ${i}`;
      col1.appendChild(box1);
    }
  
    for (let i = half + 1; i <= numPlayers; i++) {
      const box2 = document.createElement('div');
      box2.className = `box ${sizeClass}`;
      box2.contentEditable = true;
      box2.innerText = `Box ${i}`;
      col2.appendChild(box2);
    }
  
    // ✅ Show game area
    document.getElementById('gameArea').style.display = 'block';
  
    // ✅ Enable scroll if players > 10
    const scrollWrapper = document.getElementById('scrollWrapper');
    if (numPlayers > 10) {
      scrollWrapper.classList.add('scroll-enabled');
    } else {
      scrollWrapper.classList.remove('scroll-enabled');
    }
  }
  
  function showRandomBoxes() {
    const col1Boxes = document.querySelectorAll('#col1 .box');
    const col2Boxes = document.querySelectorAll('#col2 .box');
  
    if (col1Boxes.length === 0 || col2Boxes.length === 0) return;
  
    const rand1 = Math.floor(Math.random() * col1Boxes.length);
    const rand2 = Math.floor(Math.random() * col2Boxes.length);
  
    const box1 = col1Boxes[rand1].cloneNode(true);
    const box2 = col2Boxes[rand2].cloneNode(true);
  
    const resultArea = document.getElementById('resultArea');
    resultArea.innerHTML = '';
    resultArea.appendChild(box1);
    resultArea.appendChild(box2);
  }
  