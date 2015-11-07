var postcss = require('postcss');

var matchInfrared =   /(?:^|\s)infrared\(\s*(.+)\s*\)(?:\s|$)/;
var matchBackground = /^background.*$/;
var matchFilter =     /^(-[^-]+-)?filter$/;

module.exports = postcss.plugin('postcss-infrared-filter', function () {
	return function (css) {
		// walk filter declarations
		css.walkDecls(matchFilter, function (decl) {
			// detect infrared value
			var infrared = (decl.value.match(matchInfrared) || [])[1];

			if (!infrared) return;

			// get decl parent
			var parent = decl.parent;

			// clone infrared rule
			var clone = decl.parent.cloneBefore();

			// remove filter
			decl.remove();

			// empty clone of all declarations
			clone.removeAll();

			//  add background declarations to clone
			parent.nodes.forEach(function (afterdecl) {
				if (matchBackground.test(afterdecl.prop)) clone.append(afterdecl);
			});

			// update clone selectors
			clone.selectors = clone.selectors.map(function (selector) {
				return selector + '::after';
			});

			// add infrared declarations to clone
			clone.append(
				{ prop: 'content', value: '""' },
				{ prop: 'display', value: 'block' },
				{ prop: 'filter', value: 'invert(1) saturate(.75) hue-rotate(' + infrared + 'deg)' },
				{ prop: 'height', value: '100%' },
				{ prop: 'mix-blend-mode', value: 'color' },
				{ prop: 'position', value: 'absolute' },
				{ prop: 'width', value: '100%' }
			);
		});
	};
});
