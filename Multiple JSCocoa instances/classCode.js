/*

	Class code shared by all

*/


	var magic = 0

	Class('SharedAdder < NSObject').definition = function ()
	{
		Method('add:and:').encoding('int int int').fn = function(a, b)
		{
			log('Objc class method adding ' + a + ' and ' + b)
            log(NSMakeRect(1, 1, 1, 1));
			return a+b+magic
		}
	}
	
	

//	log('SharedAdder=' + SharedAdder)
