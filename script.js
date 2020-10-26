var isMobile = false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
	isMobile = true;
}

const animateCSS = (element, animation, prefix = 'animate__') =>
	// We create a Promise and return it
	new Promise((resolve, reject) => {

	const animationName = `${prefix}${animation}`;
	const node = element;//document.querySelector(element);

	node.classList.add(`${prefix}animated`, animationName);

	// When the animation ends, we clean the classes and resolve the Promise
	function handleAnimationEnd() {
	  node.classList.remove(`${prefix}animated`, animationName);
	  resolve('Animation ended');
	}

	node.addEventListener('animationend', handleAnimationEnd, {once: true});
});