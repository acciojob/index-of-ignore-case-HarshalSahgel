function indexOfIgnoreCase(s1, s2) {
	let a1 = s1.toLowerCase();
	let a2 = s2.toLowerCase();
	
  if(a2 === 0){
	  return -1;
  }
let substr = a1.indexOf(a2);

	if(substr !== -1){
		return substr;
	}
	else{
		return -1;
	}
}

//  
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
