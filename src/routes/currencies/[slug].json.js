import { api } from './_api.js';

const lookup = new Map();
api.forEach(currency => {
	lookup.set(currency.slug, JSON.stringify(currency));
});

export function get(req, res, next) {
	const { slug } = req.params;

	if (lookup.has(slug)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(lookup.get(slug));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found :()`
		}));
	}
}
