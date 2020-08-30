setInterval(() => {
	const a = document.querySelector('#view-billboard-ad')
	a && a.remove();

	const b = document.querySelector('#view-leaderboard-ad')
	b && b.remove()
}, 500)
