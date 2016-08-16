'use strict';

var hooks = {
	afterAbeAttributes: function afterAbeAttributes(obj, str, json, abe) {
		obj.hint = abe.getAttr(str, 'hint')
		return obj
	},
	afterEditorInput: function afterEditorInput(htmlString, params, abe) {
		if(typeof params.hint !== 'undefined' && params.hint !== null && params.hint !== '') {
			htmlString = htmlString + '<span class="abe-hint help-block"><span class="glyphicon glyphicon-info-sign"></span>' + params.hint + '</span>'
		}

		return htmlString;
	}
};

exports.default = hooks;