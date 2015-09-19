if (typeof wc_clock === "undefined"){

	var wc_clock = {		
			
		// start clock
		start: function( clock_id, wageObject ) {
			
			var second = 0;
			
			// display wage
			var print_wage_id 	= 'wage-' + clock_id;
			var print_wage 		= document.getElementById( print_wage_id );
			
			// display seconds passed
			var print_sec_id 	= 'sec-' + clock_id;
			var print_sec 		= document.getElementById( print_sec_id );

			// display minutes passed
			var print_min_id 	= 'min-' + clock_id;
			var print_min 		= document.getElementById( print_min_id );
			
			
			window.setInterval(function() {	
			
				// increase current income
				wageObject.current_income( wageObject.get_wage('sec') );				
				
				// print out income
				document.getElementById(clock_id).innerHTML = wageObject.get_wage('current', 2);
								
				if( print_sec !== null )
					print_sec.innerHTML = second++;				
					
				if( print_min !== null )
				{
					print_min.innerHTML = ( second < 60 ) ? 0 : Math.round(second / 60);						
				}
								
			}, 1000);
			
			if( print_wage !== null )
				print_wage.innerHTML = wageObject.get_wage();
			
		},	
								
		// return the current time
		time: function() {
			return Date();
		}
	}
}