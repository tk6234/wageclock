/**
 * Create a new wage and clock object
 * 
 * Accepts
 *
 * @wage: hourly wage
 * @outputID: output container ID
 */

function createNewWageClock(hourly_wage, output_id)
{
	var wage  = Object.create(wc_wage);
	var clock = Object.create(wc_clock);
	
	wage.set_wage( hourly_wage );
	
	clock.start(output_id, wage);
}