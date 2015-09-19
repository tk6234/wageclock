if (typeof wc_wage === "undefined"){

	var wc_wage = {				
	
		wage_by_sec:    0.00,   // wage by second
		wage_by_hour: 	0.00, 	// wage by hour
		wage_by_minute: 0.00, 	// wage by minute		
		
		currentIncome: 	0.00,	// current earnings
			
		// return hourly wage
		get_wage: function( interval, toFixed ) {			
			switch( interval )
			{
				case 'sec':
					var wage = this.wage_by_sec;
				break;
				
				case 'min':
					var wage = this.wage_by_minute;
				break;
				
				case 'current':
					var wage = this.currentIncome;
				break;
				
				default:
					var wage = this.wage_by_hour ;
				break;
			}

			if( typeof toFixed === "undefined" )		
				return wage;
									
			return wage.toFixed( toFixed );
		},
		
		// set hourly wage
		set_wage: function( w ) {
			this.wage_by_hour 	= w.toFixed(2);
			this.wage_by_sec 	= this.wage_by('sec');
			this.wage_by_minute = this.wage_by('min'); 	
		},		
		
		// add to current wage
		current_income: function( wage ){
			this.currentIncome = ( this.currentIncome + wage );
		},
				
		// wage per interval of time
		wage_by: function( interval, toFixed ) {
			switch( interval )
			{
				case 'min':
					var intvl = 60;
				break;
				
				case 'sec':
					var intvl = 60 * 60;
				break;
			}
						
			if( typeof toFixed === "undefined" )		
				return this.wage_by_hour / intvl;
			
			return (this.wage_by_hour / intvl).toFixed( toFixed );			
		},		
	}
}