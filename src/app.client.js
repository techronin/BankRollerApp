import _config from 'app.config'
import View    from 'view/app.view'
import Games   from 'games'

if (window) {
	window.App = {}
}

document.addEventListener('DOMContentLoaded',()=>{
	if (process.env.APP_BUILD_FOR_WINSERVER) {
		setTimeout(()=>{
			Games.startMesh()
			Games.startChannelsGames()
		}, 5000)
		return
	}

	let view = new View()

	if (window.App) {
		window.App.view = view
		window.Games = Games
		setTimeout(()=>{
			Games.startMesh()
		}, 500)

		setTimeout(()=>{
			Games.startChannelsGames()
		}, 1500)
	}
})

// Background job's
// require('./app.background.js')
