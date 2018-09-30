module.exports =  function makeExchange(currency) {
  let minCoins = {};

	if (currency >= 10000) { 
		minCoins.error = `You are rich, my friend! We don't have so much coins for exchange`;
		
		return minCoins;
	}

	if (currency >= 50) {
		minCoins.H = 0;

		while (currency >= 50) {
			if (currency >= 50) {
				currency = currency - 50;
				minCoins.H = minCoins.H + 1;
			}
		}
	}

	if (currency < 50 && currency >= 25) {
		minCoins.Q = 0;
		
		while (currency >= 25) {
			if (currency >= 25) {
				currency = currency - 25;
				minCoins.Q = minCoins.Q + 1;
			}
		}
	}

	if (currency < 25 && currency >= 10) {
		minCoins.D = 0;

		while (currency >= 10) {
			if (currency >= 10) {
				currency = currency - 10;
				minCoins.D = minCoins.D + 1;
			}
		}
	}	

	if (currency < 10 && currency >= 5) {
		minCoins.N = 0;
		
		while(currency >= 5) {
			if(currency >= 5) {
				currency = currency - 5;
				minCoins.N = minCoins.N + 1;
			}
		}
	} 

	if (currency < 5 && currency >= 1) {
		minCoins.P = 0;

		while (currency >= 1) {
			if (currency >= 1) {
				currency = currency - 1;
				minCoins.P = minCoins.P + 1;
			}
		}
	}	

	return minCoins;
}