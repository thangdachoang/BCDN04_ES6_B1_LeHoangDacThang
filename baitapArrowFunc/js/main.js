const colorList = ["pallet","viridian","pewter","cerulean","vermillion","lavender","celadon","saffron","fuschia","cinnabar"];

let rederBtn = () =>{
    content =""
    colorList.map((color, index) => {
        if(index == 0){ 
        content += `
            <buttton class="color-button ${color} active" onclick="changeColor('${color}')"></buttton>
        `
        }else{
            content += `
            <buttton class="color-button ${color}" onclick="changeColor('${color}')" ></buttton>
        `
        }
});
    document.getElementById("colorContainer").innerHTML= content;
}
rederBtn();

let changeColor = (color) =>{
    document.getElementById("house").className = `house ${color}`;
    let activeELE = document.querySelector(".active").classList.remove("active");

    document.querySelector(`#colorContainer .${color}`).className = `color-button ${color} active`;

}

