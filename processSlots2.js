// Slot Machine
// @param {array} input - multidimensional array (5 by 3) of a slot machine result
function processSlots2(input)
{
	var winning = 0;
	var score = 0;

	// pass array to check if it passes win conditions, returns winning and score
	winConditionOne(input);
	winConditionTwo(input);
	winConditionThree(input);

	var output = (winning == 1) ? `1 winning line, scoring ${score} points.` : ((winning > 1) ? `${winning} winning line, scoring ${score} points` : `No winning lines, scoring no points`);
	console.log(output);
};

/*
	Checks for this win condition:
		x---x
		-x-x-
		--x--
*/
// @param {array} input - multidimensional array (5 by 3) of a slot machine result
function winConditionOne(input)
{
	var winArrOne = [];
	if(input[0][0] == input[0][4]) // First row, 5 match possible
	{
		var winValOneConOne = input[0].slice(0, 1);
		winArrOne.unshift(winValOneConOne);

		if(input[1][1] == input[1][3] && input[1][1] == input[0][0]) // Second row, 5 match possible
		{
			var winValTwoConOne = input[1].slice(1, 2);
			winArrOne.unshift(winValTwoConOne);

			if(input[2][2] == input[0][0]) // Third row, 5 match
			{
				var winValThreeConOne = input[2].slice(2, 3);
				winArrOne.unshift(winValThreeConOne);
				winArrOne.unshift(winValThreeConOne); // Does this three times to give winArrOne the arr.length needed to be compared
				winArrOne.unshift(winValThreeConOne); // accurately in checkWins function
				return checkWins(winArrOne);
			} else {
				return checkWins(winArrOne); // Ends with just two items in winArrOne because if the third column does not match, 3 match is IMPOSSIBLE
			}
		} else if (input[1][1] == input[2][2] && input[1][1] == input[0][0]) // Second Row, 3 match possible
		{
			var winValFourConOne = input[1].slice(1, 2);
			winArrOne.unshift(winValFourConOne);
			return checkWins(winArrOne);
		} else { // If 3 match not possible here, then no win from this function's condition
			return checkWins(winArrOne);
		}
	} else if (input[0][0] == input[1][3]) // First row, 4 match possible
	{
		var winValFiveConOne = input[0].slice(0, 1);
		winArrOne.unshift(winValFiveConOne);

		if(input[1][1] == input[1][3] && input[1][1] == input[0][0]) // Second Row, 4 match possible
		{
			var winValSixConOne = input[1].slice(1, 2);
			winArrOne.unshift(winValSixConOne);

			if(input[2][2] == input[0][0]) // Third row, 4 match
			{
				var winValSevenConOne = input[2].slice(2, 3);
				winArrOne.unshift(winValSevenConOne);
				winArrOne.unshift(winValSevenConOne); // Does this two times to give winArrOne the arr.length needed to be compared accurately in checkWins function
				return checkWins(winArrOne);
			} else {
				return checkWins(winArrOne); // No middle column match, no win
			}
		} else {
			if(input[1][1] == input[2][2] && input[1][1] == input[0][0]) // Second Row, 3 match possible
			{
				var winValEightConOne = input[1].slice(1, 2);
				winArrOne.unshift(winValEightConOne);
				return checkWins(winArrOne); // checkWins should have at least one win at this point
			} else {
				return checkWins(winArrOne); // No wins as middle column does not match
			}
		}
	} else if (input[0][0] == input[1][1] == input[2][2]) { // 3 match possible, checks from the getgo if this pattern is present
		var winValNineConOne = input[0].slice(0, 1);
		winVarrOne.unshift(winValNineConOne);
		winVarrOne.unshift(winValNineConOne);
		winVarrOne.unshift(winValNineConOne);
		return checkWins(winArrOne);
	}
	return checkWins(winArrCondOne);
}

/*
	Checks for this win condition:
		--x--
		-x-x-
		x---x
	Will basically be very nearly the same to winConditionOne, no doubt a way to refactor
	but I'm brute forcing this exam now...
*/
// @param {array} input - multidimensional array (5 by 3) of a slot machine result
function winConditionTwo(input)
{
	var winArrTwo = [];
	if(input[2][0] == input[2][4]) // Third row, 5 match possible
	{
		var winValOneConTwo = input[2].slice(0, 1);
		winArrTwo.unshift(winValOneConTwo);

		if(input[1][1] == input[1][3] && input[1][1] == input[2][0]) // Second row, 5 match possible
		{
			var winValTwoConTwo = input[1].slice(1, 2);
			winArrTwo.unshift(winValTwoConTwo);

			if(input[0][2] == input[2][0]) // First row, 5 match
			{
				var winValThreeConTwo = input[0].slice(2, 3);
				winArrTwo.unshift(winValThreeConTwo);
				winArrTwo.unshift(winValThreeConTwo); // Does this three times to give winArrOne the arr.length needed to be compared
				winArrTwo.unshift(winValThreeConTwo); // accurately in checkWins function
				return checkWins(winArrTwo);
			} else {
				return checkWins(winArrTwo); // Ends with just two items in winArrTwo because if the third column does not match, 3 match is IMPOSSIBLE
			}
		} else if (input[1][1] == input[0][2] && input[1][1] == input[2][0]) // Second Row, 3 match possible
		{
			var winValFourConTwo = input[1].slice(1, 2);
			winArrTwo.unshift(winValFourConTwo);
			return checkWins(winArrTwo);
		} else { // If 3 match not possible here, then no win from this function's condition
			return checkWins(winArrTwo);
		}
	} else if (input[2][0] == input[1][3]) // Third row, 4 match possible
	{
		var winValFiveConTwo = input[2].slice(0, 1);
		winArrTwo.unshift(winValFiveConTwo);

		if(input[1][1] == input[1][3] && input[1][1] == input[2][0]) // Second Row, 4 match possible
		{
			var winValSixConTwo = input[1].slice(1, 2);
			winArrTwo.unshift(winValSixConTwo);

			if(input[0][2] == input[2][0]) // First row, 4 match
			{
				var winValSevenConTwo = input[2].slice(2, 3);
				winArrTwo.unshift(winValSevenConTwo);
				winArrTwo.unshift(winValSevenConTwo); // Does this two times to give winArrTwo the arr.length needed to be compared accurately in checkWins function
				return checkWins(winArrTwo);
			} else {
				return checkWins(winArrTwo); // No middle column match, no win
			}
		} else {
			if(input[1][1] == input[2][2] && input[1][1] == input[2][0]) // Second Row, 3 match possible
			{
				var winValEightConTwo = input[1].slice(1, 2);
				winArrTwo.unshift(winValEightConTwo);
				return checkWins(winArrTwo); // checkWins should have at least one win at this point
			} else {
				return checkWins(winArrTwo); // No wins as middle column does not match
			}
		}
	} else if (input[2][0] == input[1][1] == input[0][2]) { // 3 match possible, checks from the getgo if this pattern is present
		var winValNineConTwo = input[2].slice(0, 1);
		winVarrOne.unshift(winValNineConTwo);
		winVarrOne.unshift(winValNineConTwo);
		winVarrOne.unshift(winValNineConTwo);
		return checkWins(winArrTwo);
	}
	return checkWins(winArrTwo);
}

/*
	Checks for this win condition:
		xxxxx     -----     -----
		-----  or xxxxx  or -----
		-----     -----     xxxxx
*/
// @param {array} input - multidimensional array (5 by 3) of a slot machine result
function winConditionTwo(input)
{
	var winArr = [
	  [], // Top Row
	  [], // Middle Row
	  [] // Bottom Row
	]

	var arrFiveMatch = input; // Sets value to entire input
	var arrFourMatch = input.slice(0, 4); // Sets value to first 4 of the items from input
	var arrThreeMatch = input.slice(0, 3); // Sets value to first 3 of the items from input
	// Checks if all values of array is equal, 5 match
	for(var i = 0; i < winArr.length; i++){
		if(arrFiveMatch[i].every((val, i, arr) => val === arr[0]))
		{
			winArr[i] = [i, i, i, i, i]; // If true, set winArr of that index equal to an array with 5 elements of the same symbol
		} else if (arrFourMatch[i].every((val, i, arr) => val === arr[0]))
		{
			winArr[i] = [i, i, i, i]; // If true, set winArr of that index equal to an array with 4 elements of the same symbol
		} else if (arrThreeMatch[i].every((val, i, arr) => val === arr[0]))
		{
			winArr[i] = [i, i, i] // If true, set winArr of that index equal to an array with 3 elements of the same symbol
		}
	}

	var winArrThreeTop = checkWins(winArr[0]); // sets value to result of passing first array in winArr to checkWins
	var winArrThreeMiddle = checkWins(winArr[1]); // sets value to result of passing second array in winArr yo checkWins
	var winArrThreeBottom = checkWins(winArr[2]); // sets value to result of passing third array in winArr to checkWins

	return [winArrThreeTop, winArrThreeMiddle, winArrThreeTop];
}

// Takes in an arr from winCondition functions and compares with payout table
// to determine winnings and scores
// TODO: payout table not clear, must get a clearer table and then update checkWins to account for other awards for winnign
// @param {array} arr - array from
function checkWins(arr)
{
	// If player has a winning line (3 to 5 matches within a line)
	if(arr.length === 5) // For the case the array has all 5 matches
	{
		winning++;
		if(arr[0] === 1) // For symbol 1
		{
			return score += 20;
		} else if (arr[0] === 2) // For symbol 2
		{
			return score += 50;
		} else if (arr[0] === 3) // For symbol 3
		{
			return score += 100;
		}
	}

	if(arr.length === 4) // For the case the array has oly 4 matches
	{
		winning++;
		if(arr[0] === 1) // For symbol 1
		{
			return score += 10;
		} else if (arr[0] === 2) // For symbol 2
		{
			return score += 25;
		} else if (arr[0] === 3) // For symbol 3
		{
			return score += 50;
		}
	}

	if(arr.length === 3) // For the case the array has oly 3 matches
	{
		winning++;
		if(arr[0] === 1) // For symbol 1
		{
			return score += 5;
		} else if (arr[0] === 2) // For symbol 2
		{
			return score += 10;
		} else if (arr[0] === 3) // For symbol 3
		{
			return score += 25;
		}
	}
	// No win conditions met?
	return;
}


// examples input
var array = [
	[1,0,0,0,1],
	[0,1,0,1,0],
	[0,0,1,0,0]
];
// Output: '1 winning line, scoring 20 points.'

var array2 = [
	[2,4,2,2,3],
	[1,1,1,4,1],
	[3,3,3,4,2]
];
// Output: '2 winning lines, scoring a total 30 points.'

processSlots2(array);
processSlots2(array);
