/**
 * Script to determine whether a device is a mobile, tablet, console, or desktop experience
**/
function getDeviceType(testAgent)
{
  /** Set up **/
	var ua;

	/** function takes parameter to allow testing, if no parameter is present set it equal to the navigator user agent **/
	if (testAgent)
	{
		ua = testAgent;
	}
	else
	{
		ua = navigator.userAgent;
	}
	/** Set up an object with matches set to boolean values for maintainability **/
	var comparisons = 
	{
		/** consoles **/
		nintendo: Boolean(ua.match(/nintendo/i)),
		playstation: Boolean(ua.match(/playstation/i)),
		xbox: Boolean(ua.match(/xbox/i)),

		/** iOS **/
		ipod: Boolean(ua.match(/ipod/i)),
		iphone: Boolean(ua.match(/iphone/i)),
		ipad: Boolean(ua.match(/ipad/i)),
		
		/** Android **/
		android: Boolean(ua.match(/android/i)),

		/** Other mobile **/
		blackberry: Boolean(ua.match(/blackberry/i)),
		palm: Boolean(ua.match(/(palmos|palmsource| pre\/)/i)),
		windowsMobile: Boolean(ua.match(/(windows phone os|windows ce|windows mobile)/i)),
		miscMobile: Boolean(ua.match(/(opera mini|iemobile|sonyericsson|smartphone)/i)),
		mobile: Boolean(ua.match(/mobile/i)),
		
		/** Other tablets **/
		playbook: Boolean(ua.match(/playbook/i)),
		tabletPC: Boolean(ua.match(/tablet pc/i)),
		kindle: Boolean(ua.match(/kindle/i))
	};

	/** Actual logic for determining device type **/

	/** check to see if device is a console **/
	if (comparisons.nintendo || comparisons.playstation || comparisons.xbox)
	{
		return "console";
	}
	/** check to see if device is tablet **/
	else if (comparisons.ipad || comparisons.playbook || comparisons.tabletPC || comparisons.kindle || (comparisons.android && (!comparisons.mobile)))
	{
		return "tablet";
	}
	/** check to see if device is mobile **/
	else if (comparisons.ipod || comparisons.iphone || comparisons.android || comparisons.blackberry || comparisons.palm || comparisons.windowsMobile || comparisons.miscMobile || comparisons.mobile)
	{
		return "mobile";
	}
	/** if it is none of the previous device types, it is almost certainly a desktop - at least for analytics purposes **/
	else
	{
		return "desktop";
	}
}
