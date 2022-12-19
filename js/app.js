(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    let arrow = document.querySelectorAll(".arrow");
    for (var i = 0; i < arrow.length; i++) arrow[i].addEventListener("click", (e => {
        let arrowParent = e.target.parentElement.parentElement;
        console.log(arrowParent);
        arrowParent.classList.toggle("showMenu");
    }));
    let sidebar = document.querySelector(".sidebar");
    let sidebarTog = document.querySelector(".toggle");
    let homeSection = document.querySelector(".home-section");
    sidebarTog.addEventListener("click", (() => {
        sidebar.classList.toggle("close");
        homeSection.classList.toggle("close");
    }));
    window["FLS"] = true;
    isWebp();
})();