// Créer la classe de l'élément personnalisé
console.log("test 1")
class Montre extends HTMLElement {
    constructor() {
        self = super();
        console.log("test")

        // Créer le shadow DOM
        const shadow = self.attachShadow({mode: 'open'});

        // Créer la feuille de style interne
        const style = document.createElement("style");
        style.textContent = `
            /*Style général*/
        `;
        shadow.appendChild(style);

        // Créer le template de la montre
        /*const tempMontre = document.createElement("template");
        tempMontre.id = "tempMontre";
        shadow.appendChild(tempMontre);*/

        /*const template = document.getElementById("tempMontre");
        const clone = document.importNode(template.content, true);
        const pMontre = document.createElement("p");
        clone.appendChild(pMontre);*/

        // Créer le contenu de la montre
        const pMontre = document.createElement("p");
        shadow.appendChild(pMontre);

        // Créer la selection et les options du mode d'affichage
        const selectDisplay = document.createElement("select");
        const selectDisplayLabel = document.createElement("label");
        const modeDigital = document.createElement("option");
        const modeClockwise = document.createElement("option");

        selectDisplay.name = "ModeDisplay";
        selectDisplayLabel.for = "ModeDisplay";
        selectDisplayLabel.textContent = "Mode d'affichage ";
        selectDisplay.selected = modeDigital;

        modeDigital.textContent = "Digital";
        modeDigital.value = "Digital";
        modeDigital.selected = true;

        modeClockwise.textContent = "Clockwise";
        modeClockwise.value = "Clockwise";

        shadow.appendChild(selectDisplayLabel);
        selectDisplay.appendChild(modeDigital);
        selectDisplay.appendChild(modeClockwise);
        shadow.appendChild(selectDisplay);

        self.setAttribute("modedisplay", selectDisplay.value);

        // Créer la selection du mode des données et les options
        const select = document.createElement("select");
        const selectLabel = document.createElement("label");
        const modeNone = document.createElement("option");
        const modeH = document.createElement("option");
        const modeD = document.createElement("option");
        const modeHD = document.createElement("option");
        const modeChrono = document.createElement("option");
        const modeCAR = document.createElement("option");

        select.name = "Mode";
        selectLabel.for = "Mode";
        selectLabel.textContent = "Mode ";

        modeNone.textContent = "None";
        modeNone.value = "None";
        modeNone.selected = "None";

        modeH.textContent = "Heure";
        modeH.value = "H";

        modeD.textContent = "Date";
        modeD.value = "D";

        modeHD.textContent = "Heure et date";
        modeHD.value = "HD";

        modeChrono.textContent = "Chronomètre";
        modeChrono.value = "Chrono";

        modeCAR.textContent = "Compte-à-rebours";
        modeCAR.value = "CAR";

        shadow.appendChild(selectLabel);
        select.appendChild(modeNone);
        select.appendChild(modeH);
        select.appendChild(modeD);
        select.appendChild(modeHD);
        select.appendChild(modeChrono);
        select.appendChild(modeCAR);
        shadow.appendChild(select);

        // Créer la div des boutons et préparer les boutons
        const divBtn = document.createElement("div");
        divBtn.id = "divBtn";

        const startBtn = document.createElement("button");
        startBtn.textContent = "Start";
        startBtn.disabled = false;
        divBtn.appendChild(startBtn);

        const stopBtn = document.createElement("button");
        stopBtn.textContent = "Stop";
        stopBtn.addEventListener("click",()=>{
            clearInterval(intervalId);

            startBtn.disabled = false;
            stopBtn.disabled = true;
            pauseBtn.disabled = true;

            // Réinitialiser les variables nécessaires
            sec = 0;
            min = 0;
            hour = 0;
        })
        stopBtn.disabled = true;
        divBtn.appendChild(stopBtn);
        

        const pauseBtn = document.createElement("button");
        pauseBtn.textContent = "Pause";
        // Valeur de l'état de la pause
        var pause = 0;
        pauseBtn.addEventListener("click",()=>{
            clearInterval(intervalId);
            
            startBtn.disabled = false;
            stopBtn.disabled = true;
            pauseBtn.disabled = true;
            pause = 1;
        })
        pauseBtn.disabled = true;
        divBtn.appendChild(pauseBtn);

        // Définir les variables de stockage des heures
        var hour;
        var min;
        var sec;
        var day;
        var month;
        var year;

        // Créer l'identifiant de stockage des intervalles
        let intervalId;

        // Définir les fonctions Chrono et CAR
        function Chrono() {};
        function CAR() {};

        selectDisplay.addEventListener("change",() => { 
            self.setAttribute("modedisplay", selectDisplay.value);
        });

        select.addEventListener("change",() => {
            clearInterval(intervalId);

            // Rétablir l'état des boutons
            startBtn.disabled = false;
            stopBtn.disabled = true;
            pauseBtn.disabled = true;

            if (select.value == "H") {
                self.setAttribute("mode", "H");

                intervalId = setInterval(()=>{
                    // Créer et stocker la date actuelle
                    let date = new Date();
                    hour = date.getHours();
                    min = date.getMinutes();
                    sec = date.getSeconds();
                    
                    // Afficher l'heure
                    if (self.getAttribute("modedisplay") == "Digital") {
                        pMontre.textContent = " " + hour.toString().padStart(2, '0') + ":" + min.toString().padStart(2, '0') + ":" + sec.toString().padStart(2, '0');
                    } else if (self.getAttribute("modedisplay") == "Clockwise") {
                        pMontre.textContent = "Not yet available";
                    }
                },1000)
            } else if (select.value == "D") {
                self.setAttribute("mode", "D");

                intervalId = setInterval(()=>{
                    // Créer et stocker la date actuelle
                    let date = new Date();
                    day = date.getDate();
                    month = date.getMonth();
                    year = date.getFullYear();
                    
                    // Afficher la date
                    if (self.getAttribute("modedisplay") == "Digital") {
                        pMontre.textContent = " " + day.toString().padStart(2, '0') + "/" + month.toString().padStart(2, '0') + "/" + year.toString();
                    } else if (self.getAttribute("modedisplay") == "Clockwise") {
                        pMontre.textContent = "Not yet available";
                    }
                },1000)
            } else if (select.value == "HD") {
                self.setAttribute("mode", "HD");

                intervalId = setInterval(()=>{
                    // Créer et stocker la date actuelle
                    let date = new Date();
                    hour = date.getHours();
                    min = date.getMinutes();
                    sec = date.getSeconds();
                    day = date.getDate();
                    month = date.getMonth();
                    year = date.getFullYear();
                    
                    // Afficher l'heure et la date
                    if (self.getAttribute("modedisplay") == "Digital") {
                        pMontre.textContent = " " + hour.toString().padStart(2, '0') + ":" + min.toString().padStart(2, '0') + ":" + sec.toString().padStart(2, '0')
                        + " - " + day.toString().padStart(2, '0') + "/" + month.toString().padStart(2, '0') + "/" + year.toString();
                    } else if (self.getAttribute("modedisplay") == "Clockwise") {
                        pMontre.textContent = "Not yet available";
                    }
                },1000)
            } else if (select.value == "Chrono") {
                self.setAttribute("mode", "Chrono");

                // Afficher la div des boutons
                shadow.appendChild(divBtn);
                
                // Supprimer l'autre listener sur le btn start
                startBtn.removeEventListener("click",CAR());

                startBtn.addEventListener("click",function Chrono() {
                    // Réinitialiser les variables nécessaires
                    if (pause == 0) {
                        sec = 0;
                        min = 0;
                        hour = 0;
                    } else if (pause == 1) {
                        pause = 0;
                    }
                    
        
                    intervalId = setInterval(()=>{
                        // MAJ les valeurs du chrono
                        sec++;
                        if (sec == 60) {
                            sec = 0;
                            min++;
                            if (min == 60) {
                                hour++;
                            }
                        }
                        // Actualiser le chrono
                        if (self.getAttribute("modedisplay") == "Digital") {
                            pMontre.textContent = " " + hour.toString().padStart(2, '0') + ":" + min.toString().padStart(2, '0') + ":" + sec.toString().padStart(2, '0');
                        } else if (self.getAttribute("modedisplay") == "Clockwise") {
                            pMontre.textContent = "Not yet available";
                        }
                    },1000)
        
                    startBtn.disabled = true;
                    stopBtn.disabled = false;
                    pauseBtn.disabled = false;
                });

                pauseBtn.addEventListener("click", function Chrono() {

                })
                
            }  else if (select.value == "CAR") {
                self.setAttribute("mode", "CAR");

                // Afficher la div des boutons
                shadow.appendChild(divBtn);

                // Supprimer l'autre listener sur le btn start
                startBtn.removeEventListener("click",Chrono());

                startBtn.addEventListener("click",function CAR() {
                    // Réinitialiser les variables nécessaires
                    if (pause == 0) {
                        sec = 0;
                        min = 1;
                        hour = 1;
                    } else if (pause == 1) {
                        pause = 0;
                    }
        
                    intervalId = setInterval(()=>{
                        // MAJ les valeurs du compte-à-rebours
                        sec--;
                        if (sec < 0) {
                            sec = 59;
                            min--;
                            if (min < 0) {
                                min = 59;
                                hour--;
                            }
                        }
                        if (sec <= 0 && min <= 0 && hour <= 0) {
                            // Signaler la fin et terminer l'intervalle
                            pMontre.textContent = "Terminé";
                            clearInterval(intervalId);
                        } else {
                            // Actualiser le compte-à-rebours
                            if (self.getAttribute("modedisplay") == "Digital") {
                                pMontre.textContent = " " + hour.toString().padStart(2, '0') + ":" + min.toString().padStart(2, '0') + ":" + sec.toString().padStart(2, '0');
                            } else if (self.getAttribute("modedisplay") == "Clockwise") {
                                pMontre.textContent = "Not yet available";
                            }
                        }
                    },1000)

                    startBtn.disabled = true;
                    stopBtn.disabled = false;
                    pauseBtn.disabled = false;
                });

            } else {
                pMontre.textContent = "";
            }
        });
    }
}

// Définir l'élément personnalisé
customElements.define("montre-custom", Montre);