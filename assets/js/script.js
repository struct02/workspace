window.sr = ScrollReveal({
  duration : 1000,
  reset    : false
});

sr.reveal( '.header', { origin: 'top', distance : '100%' } );
sr.reveal( '.menu__links', { origin: 'top', distance : '10%' } );
sr.reveal( '.slide-home__line, .b_page__thumb-image', { origin: 'left', distance : '100%' } );
sr.reveal( '.b_page__container-title, .b_page__container-content, #citation-line-1, #citation-line-2, #citation-line-3', { origin: 'left', distance : '10%' } );
sr.reveal( '.a_page__thumb-image, .c_page__thumb-image', { origin: 'right', distance : '100%' } );
sr.reveal( '.a_page__container-content, .a_page__container-title, .d_page__container-content, .d_page__container-title, .slider-home__title, .e_page__container-title, .e_page__container-content', { origin: 'right', distance : '10%' } );
sr.reveal( '.c_page__container-title, .c_page__container-content, .realisation__wrapper, .fullpage h2, .fullpage p', { origin: 'bottom', distance : '20%' } );

sr.reveal( '.a_page__thumb-image, .b_page__thumb-image, .c_page__thumb-image, .header', { delay: 500 });
sr.reveal( '#citation-line-1', { delay: 600 });
sr.reveal( '.slider-home__line, .a_page__container-title, .b_page__container-title, .c_page__container-title, .d_page__container-title, .e_page__container-title, .fullpage h2, .fullpage p, .realisation__wrapper, #citation-line-2, .slider-home__title', { delay: 800 });
sr.reveal( '#citation-line-3', { delay: 1000 });
sr.reveal( '.a_page__container-content, .b_page__container-content, .c_page__container-content, .d_page__container-content, .e_page__container-content, .menu__links', { delay: 1200 });

/* PARALLAX JS */

$('.parallaxjs').paroller({
factor: 0.2,
type: 'background',
direction: 'vertical'
}); 

	
/* INPUT SELECT */

var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 0; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);


/* CITATIONS */

function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

var quotes = [
    ["La maison comme miroir de vie, l’expression construite","et forcément unique d’une intimité en","affinité avec son environnement."],
    ["Une vraie maison d’architecte avec le choix du sur-mesure.","La règle de l’art comme fondation de la","maison haut de gamme."],
	];


var currentQuote = "";
var currentQuote1 = "";
var currentQuote2 = "";
var randomquote = "";

function getQuote() {
	randomquote = Math.floor(Math.random() * quotes.length);
    currentQuote = quotes[randomquote][0];
    currentQuote1 = quotes[randomquote][1];
    currentQuote2 = quotes[randomquote][2];
    if (inIframe()) {
		$('#citation-line-1').attr((currentQuote));
		$('#citation-line-2').attr((currentQuote1));
		$('#citation-line-3').attr((currentQuote2));
    }

	$(document).ready(function () {
	    $('html body').animate({}, 0);	
	    $('#citation-line-1').animate({}, 0, function () {
	        $(this).animate({}, 0);
	        $(this).text(currentQuote);
	    });
	    $('#citation-line-2').animate({}, 0, function () {
	        $(this).animate({}, 0);
	        $(this).text(currentQuote1);
	    });
	    $('#citation-line-3').animate({}, 0, function () {
	        $(this).animate({}, 0);
	        $(this).text(currentQuote2);
	    });
    });    
}

getQuote();

/* NOS VALEURS */

{
	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};

	let win = {width: window.innerWidth, height: window.innerHeight};
	
	const settings = {
		image: {duration: 700, delay: 0, easing: [0.8,0,0.2,1]},
		facts: {duration: 300, delay: 0, easing: [0.8,0,0.2,1]},
		title: {duration: 700, delay: 200, easing: [0.8,0,0.2,1]},
		description: {duration: 700, delay: 400, easing: 'easeOutExpo'},
		pagination: {duration: 300, delay: 400, easing: 'easeInOutQuad'},

		menuCtrl: {duration: 300, easing: [0.2,1,0.3,1]},
		menuItems: {duration: 300, easing: [0.2,1,0.3,1]},
		factsCtrl: {duration: 300, easing: 'linear'},
		gallery: {duration: 800, easing: [0.2,1,0.3,1]},
		navigationCtrls: {duration: 800, easing: [0.8,0,0.2,1]},
		previewCloseCtrl: {duration: 300, easing: 'easeOutExpo'},
		factsItems: {duration: 800, easing: [0.8,0,0.2,1]},
		expander: {duration: 800, easing: [0.8,0,0.2,1]}
	};
	
	class Entry {
        constructor(el) {
            this.DOM = {el: el};
            this.init();
        }
        init() {
			// DOM elements:
			// title
			this.DOM.title = this.DOM.el.querySelector('.valeur__content > .valeur__title');
			charming(this.DOM.title);
			this.DOM.titleLetters = this.DOM.title.querySelectorAll('span');
			// description
			this.DOM.description = this.DOM.el.querySelector('.valeur__content > .valeur__description');
			// image
			this.DOM.image = this.DOM.el.querySelector('.valeur__img > .valeur__img-inner');
			// expander
			this.DOM.expander = this.DOM.el.querySelector('.section__expander');
			// facts
			this.DOM.facts = {
				wrapper: this.DOM.el.querySelector('.section__facts'),
				items: Array.from(this.DOM.el.querySelectorAll('.section__facts > .section__facts-item'))
			};
		}
		show(direction) {
			this.isHidden = false;
			return this.toggle(direction);
		}
		hide(direction) {
			this.isHidden = true;
			return this.toggle(direction);
		}
		toggle(direction) {
			this.direction = direction; 
			return Promise.all([this.toggleTitle(!this.isHidden), 
								this.toggleDescription(!this.isHidden),
								this.toggleImage(!this.isHidden),
								this.toggleFacts(!this.isHidden)]);
		}
		toggleTitle() {
			anime.remove(this.DOM.titleLetters);
			return anime({
				targets: this.DOM.titleLetters,
				duration: settings.title.duration,
				delay: (target, index) => index * 30 + settings.title.delay,
				easing: settings.title.easing,
				translateY: this.isHidden ? [0,this.direction === 'next' ? '-100%' : '100%'] : [this.direction === 'next' ? '100%' : '-100%', 0],
				opacity: {
					value: this.isHidden ? 0 : 1,
					duration: 1,
					delay: (target, index) => this.isHidden ? settings.title.duration + settings.title.delay : settings.title.delay
				}
			}).finished;
		}
		toggleDescription() {
			anime.remove(this.DOM.description);
			return anime({
				targets: this.DOM.description,
				duration: settings.description.duration,
				delay: !this.isHidden ? settings.description.duration * 0.5 + settings.description.delay : settings.description.delay,
				easing: settings.description.easing,
				translateX: this.isHidden ? [0, this.direction === 'next' ? '5%' : '-5%'] : [this.direction === 'next' ? '-5%' : '15%', 0],
				opacity: this.isHidden ? 0 : 1
			}).finished;
		}
		toggleImage() {
			this.DOM.image.style.transformOrigin = !this.isHidden ? `50% ${this.direction === 'next' ? 0 : 100}%` : `50% 50%`;

			anime.remove(this.DOM.image);
			return anime({
				targets: this.DOM.image,
				duration: settings.image.duration,
				delay: settings.image.delay,
				easing: settings.image.easing,
				translateX: this.isHidden ? ['0%',this.direction === 'next' ? '-100%' : '100%'] : [this.direction === 'next' ? '100%' : '-100%','0%'],
				scale: !this.isHidden ? [1,1] : 1,
				opacity: {
					value: this.isHidden ? 0 : 1,
					duration: 1,
					delay: this.isHidden ? settings.image.duration + settings.image.delay : settings.image.delay
				}
			}).finished;
		}
				toggleFacts() {
			anime.remove(this.DOM.facts.items);
			return anime({
				targets: this.DOM.facts.items.slice(0, 2),
				duration: settings.facts.duration,
				delay: (target, index) => {
					return !this.isHidden ? index * 40 + settings.facts.duration * 0.5 + settings.facts.delay : index * 40 + settings.facts.delay;
				},
				easing: settings.facts.easing,
				translateX: this.isHidden ? [this.DOM.facts.ty, this.direction === 'next' ? this.DOM.facts.ty-20 : this.DOM.facts.ty+20] : [this.direction === 'next' ? this.DOM.facts.ty+20 : this.DOM.facts.ty-20, this.DOM.facts.ty],
				opacity: this.isHidden ? 0 : 1
			}).finished;
		}
    };

    class Slideshow {
        constructor(el) {
            this.DOM = {};
            this.DOM.el = el;
            this.init();
        }
        init() {

			this.DOM.factsContainer = this.DOM.el.querySelector('.facts');
			this.DOM.factsCtrls = {
				toggle: this.DOM.factsContainer.querySelector('.facts__toggle'),
				less: this.DOM.factsContainer.querySelector('.facts__toggle > .facts__toggle-inner--less'),
			};
			this.DOM.previewCloseCtrl = this.DOM.factsContainer.querySelector('.button-contentclose');
			this.DOM.pagination = this.DOM.el.querySelector('.nos-valeurs__index .nos-valeurs__index-inner');
			this.DOM.navigation = this.DOM.el.querySelector('.nos-valeurs__nav');
			this.DOM.navigation.prevCtrl = this.DOM.navigation.querySelector('button.nos-valeurs__nav-item--prev');
			this.DOM.navigation.nextCtrl = this.DOM.navigation.querySelector('button.nos-valeurs__nav-item--next');
			this.DOM.entries = Array.from(this.DOM.el.querySelectorAll('.valeur'), entry => new Entry(entry));
			this.entriesTotal = this.DOM.entries.length;
			this.currentPos = 0;

			this.layout();
			// Init/Bind events.
			this.initEvents();
		}
		layout() {
			this.currentEntry = this.DOM.entries[this.currentPos];
			const factEl = this.currentEntry.DOM.facts.items[0];
			const factHeight = factEl.getBoundingClientRect().height + parseFloat(window.getComputedStyle(factEl).marginBottom);
			const paddingFactsStyle = window.getComputedStyle(this.currentEntry.DOM.facts.wrapper);
			const paddingFacts = parseFloat(paddingFactsStyle.paddingTop) + parseFloat(paddingFactsStyle.paddingBottom);
			
			this.factsTranslation = win.height - 2 * factHeight - paddingFacts;
			for ( let i = 0; i <= this.entriesTotal - 1; ++i ) {
				const entry = this.DOM.entries[i];
				entry.DOM.expander.style.transform = `scale3d(0.54,1,1) translate3d(0px,${this.factsTranslation}px,0px)`;
				for ( let j = 0, len = entry.DOM.facts.items.length; j <= len - 1; ++j ) {
					entry.DOM.facts.ty = this.factsTranslation;
					const item = entry.DOM.facts.items[j];
					item.style.transform = `translate3d(0px,${this.factsTranslation}px,0px)`;
					if ( j > 1 ) {
						item.style.opacity = 0;
					}
					else if ( i === this.currentPos ){
						item.style.opacity = 1;
					}
				}
			}
		}
		initEvents() {
			// Navigation
			this.onPrevClick = () => this.navigate('prev');
			this.onNextClick = () => this.navigate('next');
			this.DOM.navigation.prevCtrl.addEventListener('click', this.onPrevClick);
			this.DOM.navigation.nextCtrl.addEventListener('click', this.onNextClick);
			
			// Facts (clickable facts)
			for ( let i = 0; i <= this.entriesTotal - 1; ++i ) {
				const entry = this.DOM.entries[i];
				entry.DOM.facts.items
					 .filter(fact => fact.classList.contains('section__facts-item--clickable'))
					 .forEach(clickableFact => clickableFact.addEventListener('click', () => this.preview(clickableFact.dataset.gallery)));
			}
			
			// Window resize
			this.onResize = () => {
				win = {width: window.innerWidth, height: window.innerHeight};
				this.layout();
				if ( this.isFactsOpen ) {
					// Toggle the factsCtrls state
					this.DOM.factsCtrls.less.style.opacity = 0;
					this.isFactsOpen = !this.isFactsOpen;
					this.toggleNavigationCtrls({opacity: 1, duration: 1});
					this.isFactsAnimating = false;
				}
				if ( this.gallery ) {
					this.DOM.previewCloseCtrl.style.opacity = 0;
					this.toggleGallery(this.gallery, {duration: 1,opacity: 0}).then(() => this.gallery = null);
				}
				this.DOM.el.classList.remove('sections--factsopen');
			};
			window.addEventListener('resize', debounce(() => this.onResize(), 20));
		}
		navigate(direction) {
			if ( this.isEntriesAnimating || this.isFactsAnimating ) return;
			this.isEntriesAnimating = true;
			// Store direction
			this.direction = direction;
			// Update currentPos
			const newPos = this.currentPos = this.direction === 'next' ? 
				this.currentPos < this.entriesTotal - 1 ? this.currentPos + 1 : 0 : 
				this.currentPos = this.currentPos > 0 ? this.currentPos - 1 : this.entriesTotal - 1;

			const newEntry = this.DOM.entries[newPos];

			this.update(newEntry);
		}
		update(newEntry) {
			const updateFn = () => {
				// hide the current entry and show the next/previous one.
				// when both updatePageNumber, hide and show are finished:
				Promise.all([this.currentEntry.hide(this.direction), newEntry.show(this.direction), this.updatePageNumber()]).then(() => {
					this.isEntriesAnimating = false;
					this.currentEntry.DOM.el.classList.remove('valeur--current');
					newEntry.DOM.el.classList.add('valeur--current');
					this.currentEntry = newEntry;
				});
			};

			if ( this.isFactsOpen ) {
				this.toggleFactsContainer().then(updateFn);
			}
			else {
				updateFn();
			}
		}
		updatePageNumber() {
			anime.remove(this.DOM.pagination);
			let halfway = false;
			return anime({
				targets: this.DOM.pagination,
				duration: settings.pagination.duration,
				easing: 'easeInOutQuad',
				translateY: [
					{value: this.direction === 'next' ? '-100%' : '100%', delay: settings.pagination.delay},
					{value: [this.direction === 'next' ? '100%' : '-100%','0%'], delay: settings.pagination.duration}
				],
				opacity: [
					{value: 0, delay: settings.pagination.delay},
					{value: [0,1], delay: settings.pagination.duration}
				],
				update: (anime) => {
					if ( anime.progress >= 50 && !halfway ) {
						halfway = true;
						this.DOM.pagination.innerHTML = `0${this.currentPos + 1}`;
					}
				}
			}).finished;
		}
		
		toggleFactsContainer() {
			if ( this.isFactsAnimating ) {
				return;
			};
			this.isFactsAnimating = true;
			return Promise.all([this.toggleFactsCtrl(), this.animateExpander(), this.animateFactsItems()]).then(() => {
				this.isFactsOpen = !this.isFactsOpen;
				this.isFactsAnimating = false;
			});
		}
				animateExpander(animeconfig) {
			return this.animate(Object.assign({
				targets: this.currentEntry.DOM.expander,
				duration: settings.expander.duration,
				easing: settings.expander.easing,
				delay: !this.isFactsOpen ? 0 : 300,
				translateY: !this.isFactsOpen ? [this.factsTranslation, 0] : this.factsTranslation,
				scaleX: [0.54,0.54]
			}, animeconfig));
		}
		animateFactsItems(animeconfig) {
			return this.animate(Object.assign({
				targets: this.currentEntry.DOM.facts.items,
				duration: settings.factsItems.duration,
				easing: settings.factsItems.easing,
				delay: (target, index, total) => !this.isFactsOpen ? (index+1) * 30 + 150 : (total-index-1) * 30,
				translateY: !this.isFactsOpen ? [this.factsTranslation,0] : this.factsTranslation,
				opacity: (target, index) => !this.isFactsOpen ? 1 : index > 1 ? 0 : 1
			}, animeconfig));
		}
		toggleFactsCtrl(animeconfig) {
			return this.animate(Object.assign({
				duration: settings.factsCtrl.duration,
				easing: settings.factsCtrl.easing,
				opacity: (target, index) => index ? !this.isFactsOpen ? 1 : 0 : !this.isFactsOpen ? 0 : 1
			}, animeconfig));
		}
		togglePreviewCloseCtrl(animeconfig) {
			return this.animate(Object.assign({
				targets: this.DOM.previewCloseCtrl,
				duration: settings.previewCloseCtrl.duration,
				easing: settings.previewCloseCtrl.easing
			}, animeconfig));
		}
		toggleNavigationCtrls(animeconfig) {
			return this.animate(Object.assign({
				targets: [this.DOM.navigation.prevCtrl, this.DOM.navigation.nextCtrl],
				duration: settings.navigationCtrls.duration,
				easing: settings.navigationCtrls.easing
			}, animeconfig));
		}
		animate(opts) {
			anime.remove(opts.targets);
			return anime(opts).finished;
		}
	};

	// Preload all the images in the page..
	imagesLoaded(document.querySelectorAll('img'), () => {
		document.body.classList.remove('loading');
		// Init
		new Slideshow(document.querySelector('.nos-valeurs'));
	});
};


/* GALLERY REA */

var slideIndex = 1;
	showDivs(slideIndex);
	
	function plusDivs(n) {
	  showDivs(slideIndex += n);
	}
	
	function showDivs(n) {
	  var i;
	  var x = document.getElementsByClassName("rea-gallery__img");
	  if (n > x.length) {slideIndex = 1}    
	  if (n < 1) {slideIndex = x.length}
	  for (i = 0; i < x.length; i++) {
	     x[i].style.display = "none";
	  }
	  x[slideIndex-1].style.display = "block";
	}
