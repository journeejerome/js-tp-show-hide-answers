(function () {
    const Answer={
        init(){
            document.documentElement.className = "js-enabled";
            for(const element of document.querySelectorAll('button')){
                element.addEventListener('click', ()=>{
                    this.showAnswer(element);
                });
                element.addEventListener('focus', ()=>{
                    this.focus(element);
                });
            }
        },
        showAnswer(element){
            this.aria = element.getAttribute("aria-controls");
            console.log(this.aria);
            console.log(element.getAttribute("aria-expanded"));
            if(element.getAttribute("aria-expanded") === "true"){
                console.log("test");
                document.querySelector(`p[id="${this.aria}"`).style.display = "none";
                document.querySelector(`button[aria-controls="${this.aria}"`).setAttribute("aria-expanded", "false");
            }else{
                document.querySelector(`p[id="${this.aria}"`).style.display = "block";
                document.querySelector(`button[aria-controls="${this.aria}"`).setAttribute("aria-expanded", "true");
            }
        },
        focus(element){
            element.classList.add("focus");
        }
    }
    Answer.init();
})();