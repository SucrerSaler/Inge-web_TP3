render() ;
// --------- Bouton Chnage color (1) ---------
color_bouton();
function color_bouton(){
    let i = 0;
    let btn = document.getElementById("color_btn");
    btn.addEventListener("click",(event) => {
        let color = ["blue","yellow"];
        btn.setAttribute("class", color[i]);
        btn.innerHTML = color[i];
        let sq = document.getElementsByClassName("square")[0];
        sq.style.backgroundColor = color[i];
        if (i == 1){
            i = 0;
        }
        else{
            i = 1;
        }
    });
}
// --------- Execute button ---------
var exe_button = document.getElementById("res_btn");
exe_button.onclick= () => { 
    let gros_cercle = {
    taille:80,
    grossir: function (coef){
        let sq = document.getElementsByClassName("square")[0];
        let cir = document.getElementsByClassName("circle")[0];
        let new_size = this.taille+(coef/100);
        sq.style.height = (new_size).toString().concat("px");
        sq.style.width = (new_size).toString().concat("px");
        cir.style.width = (new_size).toString().concat("px");
        cir.style.height = (new_size).toString().concat("px");
    }
    
}
let exe = gros_cercle.grossir.bind(gros_cercle,slider.value);
exe();
}

// --------- Slider value update (2) ---------
var slider = document.getElementById("iterations_slider");
var slider_output = document.getElementById("iterations_count");
slider.oninput = function() { slider_output.innerHTML = this.value}
// --------- Run button (3) ---------
var runned = false;
var run_btn = document.getElementById("run_btn");
run_btn.onclick= () => {
    for (let i = 0; i <= slider.value; i++){
        console.log(i);
    }
    if (!runned){
        pas_chasses();
        runned = true;
    } 
}
// --------- Moving sqaure (4) ---------
function pas_chasses(){
    let mini = 8;
    let maxi = 500;
    let pos = mini;
    let inc = 1;
    let sq = document.getElementsByClassName("square")[0];
    let cir = document.getElementsByClassName("circle")[0];
    setInterval(function () {

    sq.style.left = pos.toString().concat("px");
    cir.style.left = pos.toString().concat("px");
    pos += inc;
    if (pos == maxi){
        inc = -1;
    }
    else if (pos == mini){
        inc = 1;
    }},10);
}
function render() {
    document.getElementById("app").innerHTML = `
    <h1>Constatez la nature monothreadée de JS </h1>
    <h4 style="display:inline">Changez la couleur :</h4>
    <button id="color_btn" class="yellow" >Yellow</button>
    <br>
    <div>
    <button id="res_btn">Execute</button>
    <div id ="results"></div>
    </div>
    <h3>Choisissez le nombre d'itérations désiré pour simuler un calcul lourd et
    ensuite cliquez sur "run":</h3>
    <h4> En principe, le carré cesse de bouger pendant un laps de temps avant de se
    reprendre</h4>
    <div>
    <label>Iterations</label>
    <input
    type="range"
    min="0"
    max="30000"
    value="0"
    id="iterations_slider" />
    <span id="iterations_count">0</span>
    <button id="run_btn">Run</button>
    </div>
    <div class="circle"></div>
    <div class="square"></div>
    `;
}