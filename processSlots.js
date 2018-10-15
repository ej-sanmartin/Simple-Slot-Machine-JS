// Slot machine game
// @param {array} input - multidimensional array (5 by 3) of a slot machine result
// @param {array} winCond - multidimensional array of possible winning combinations
function processSlots(input, winCond)
{
	var winning = 0;
	var score = 0;
	var result = input;
	var winCondArr = winCond

	for(var x = 0; x < winCondArr.length; ++)
	{
		compareWin(input, winCondArr[x]);
	}

	var output = (winning == 1) ? `1 winning line, scoring ${score} points.` : ((winning > 1) ? `${winning} winning line, scoring ${score} points` : `No winning lines, scoring no points`);
	return console.log(output);
};

// win conditions in an array of arrays
var winCond = [[
	[x, , , ,x],
	[ ,x, ,x, ],
	[ , ,x, , ]],
	[
	[ , ,x, , ],
	[ ,x, ,x, ],
	[x, , , ,x]],
	[
	[x,x,x,x,x],
	[ , , , , ],
	[ , , , , ]],
	[
	[ , , , , ],
	[x,x,x,x,x],
	[ , , , , ]],
	[
	[ , , , , ],
	[ , , , , ],
	[x,x,x,x,x]]];


function compareWin(input, winCond)
{
	// winArr has three arrays to represent each row
	var winArr = [
		[],
		[],
		[]
	];
	// if middle column matches with left most column, at least a three match, and thus match is possible
	var isPossibleMatch = false;
	var rows = input.length; // should be 3
	var columns = input[0].length; // should be 5
	var winItem;

	// checks for isPossibleMatch condition
	for(var i = 0; i < rows; i++)
	{
		for(var j = 0; j < rows; j++)
		{
			if(input[i][0] == input[j][2])
			{
				isPossibleMatch = true;
				isPossibleMatch ? winArr[i].unshift(input[i][0]) : continue;
			}
		}
	}

	// This block of tests only runs when 1st and 3rd columns match aka a win is possible
	if(isPossibleMatch){
		for(var row = 0; row < rows; row++)
		{
				for(var column = 0; column < columns; column++)
				{
					if(winCond[row][column] == 'x' && input[row][column] == winArr[row][0])
					{
						winItem = input[row][column];
						winArr[row].unshift();
					}
					// checks for if a win condition is met, minimum 3 matches
					if(winArr.length >= 3)
					{
						winnning++;
					}
				}
		}
	}
	return checkWins(winArr); // returns nothing if program gets to this point
}

// calculates score by comparing winArr to payoutTable object
function checkWins(winArr){
	var payoutTable = {
		1: [0, 0, 5, 10, 20],
		2: [0, 0, 10, 25, 50],
		3: [0, 0, 25, 50, 100]
	}
	var wins = winArr;
	var compareMatches;
	var symbol; // Either 1, 2, or 3

	// goes through each sub array in winArr passed to this function
	for(win in wins){
		compareMatches = win.length;
		symbol = win[0]; // returns the type of symbol that is in the winArr at a particular row. Rest of items in array should be the SAME
		switch(compareMatches)
		{
				case 5: // case of all 5 matches
					switch(symbol)
					{
						case 3: // case if 5 match is with 3 symbol
							score += payoutTable[3][4];
							break;
						case 2: // case if 5 match is with 2 symbol
							score += payoutTable[2][4];
							break;
						case 1: // case if 5 match is with 1 symbol
							score += payoutTable[1][4];
							break;
						default: // if symbol is not recognized by payoutTable, no reward
							break;
					}
					break;
				case 4:
					switch(symbol)
					{
						case 3: // case if 4 match is with 3 symbol
							score += payoutTable[3][3];
							break;
						case 2: // case if 4 match is with 2 symbol
							score += payoutTable[2][3];
							break;
						case 1: // case if 4 match is with 1 symbol
							score += payoutTable[1][3];
							break;
						default: // if symbol is not recognized by payoutTable, no reward
							break;
					}
					break;
				case 3:
					switch(symbol)
					{
						case 3: // case if 3 match is with 3 symbol
							score += payoutTable[3][2];
							break;
						case 2: // case if 3 match is with 2 symbol
							score += payoutTable[2][2];
							break;
						case 1: // case if 3 match is with 1 symbol
							score += payoutTable[1][2]
							break;
						default: // if symbol is not recognized by payoutTable, no reward
							break;
					}
					break;
				default: // if no matches of at least 3, no reward
					break;
		}
	}
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

processSlots(array, winCond);
