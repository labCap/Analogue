(() => {
    "use strict";
    const burger = document.querySelector(".icon-menu");
    const nav = document.querySelector(".nav");
    const overlay = document.querySelector(".overlay-menu");
    const spoilersTitle = document.querySelectorAll(".spoilers__title");
    const spoilersItem = document.querySelectorAll(".spoilers__item");
    burger.addEventListener("click", (() => {
        burger.classList.toggle("menu-open");
        nav.classList.toggle("menu-open");
        overlay.classList.toggle("menu-open");
        document.body.classList.toggle("_lock");
    }));
    overlay.addEventListener("click", (() => {
        burger.classList.toggle("menu-open");
        nav.classList.toggle("menu-open");
        overlay.classList.toggle("menu-open");
        document.body.classList.toggle("_lock");
    }));
    for (let i = 0; i < spoilersTitle.length; i++) {
        const thisSpoilersTitle = spoilersTitle[i];
        const thisSpoilersItem = spoilersItem[i];
        thisSpoilersTitle.addEventListener("click", (() => {
            thisSpoilersTitle.classList.toggle("active");
            thisSpoilersItem.classList.toggle("active");
        }));
    }
    const animItems = document.querySelectorAll("._anim-items");
    if (animItems.length > 0) {
        window.addEventListener("scroll", animOnScroll);
        function animOnScroll() {
            for (let i = 0; i < animItems.length; i++) {
                const animItem = animItems[i];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;
                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                if (animItemHeight > window.innerHeight) animItemPoint = window.innerHeight - window.innerHeight / animStart;
                if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) animItem.classList.add("_active-anim"); else if (!animItem.classList.contains("_anim-no-hide")) animItem.classList.remove("_active-anim");
            }
        }
        function offset(el) {
            const rect = el.getBoundingClientRect(), scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {
                top: rect.top + scrollTop,
                left: rect.left + scrollLeft
            };
        }
        setTimeout((() => {
            animOnScroll();
        }), 500);
    }
    window["FLS"] = true;
})();