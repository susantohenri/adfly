var proxies = ["95.165.182.18:38950","188.166.223.181:80","94.254.19.237:58661","180.250.54.27:53281","149.28.130.10:3128","92.247.169.149:57565","213.6.31.210:36127","122.102.45.233:8080","62.99.178.46:59679","80.243.8.126:52292"]
// var proxy = proxies[Math.floor(Math.random() * proxies.length - 1)]
const Nightmare = require('nightmare')

function loop (i) {
	proxy = proxies[i]
	if (!proxy) return false
	var nm = Nightmare({
		show:false, 
		webPreferences: {images: false}, 
		typeInterval: 20, 
		switches:{'proxy-server': proxy}, 
		openDevTools: false,
		waitTimeout: 10000
	})
	nm.goto('http://dapalan.com/7e8U')
		.wait('.mwButton[href]')
		.click('.mwButton[href]')
		.wait('body')
		.end()
		.then(() => {
			console.log(proxy, true)
			loop(i+1)
		})
		.catch((e) => {
			console.log(proxy, false)
			loop(i+1)
		})
}

loop(0)