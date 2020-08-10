	var lastScrollTop = 0;

	setInterval(function () {
		var st = window.pageYOffset || document.documentElement.scrollTop;
		if (lastScrollTop > window.innerHeight) {
			if (st - lastScrollTop >= 5) {
				document.getElementById("pernav").className = "nav-up";
			} else {
				if (lastScrollTop - st >= 5) {
					document.getElementById("pernav").className = "navbar";
				}
			}
		}
		lastScrollTop = st;
	}, 250);