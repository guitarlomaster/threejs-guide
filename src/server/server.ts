import path from 'path';
import http from 'http';
import express from 'express';

class App {
	private server: http.Server;
	private port = 3000;

	constructor() {
		const app = express();
		app.use(express.static(path.join(__dirname, '../client')));
		// app.use('/build/three.module.js', express.static(path.join(__dirname, '../../node_modules/three/build/three.module.js')));
		// app.use('/jsm/controls/OrbitControls', express.static(path.join(__dirname, '../../node_modules/three/examples/jsm/controls/OrbitControls.js')));
		// app.use('/jsm/libs/stats.module', express.static(path.join(__dirname, '../../node_modules/three/examples/jsm/libs/stats.module.js')));
		// app.use('/jsm/libs/dat.gui.module', express.static(path.join(__dirname, '../../node_modules/three/examples/jsm/libs/dat.gui.module.js')));

		this.server = new http.Server(app);
	}

	public Start() {
		this.server.listen(this.port, () => {
			console.log( `Server listening on Port ${this.port}.` );
		})
	}
}

new App().Start();
