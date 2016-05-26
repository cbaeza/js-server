'use strict';

let helpers = {

	getDate: function(){
		return new Date();
	},

	getEnv: function(){
		return JSON.stringify(process.env);
	}
}

export default module = helpers;