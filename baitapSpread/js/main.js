
let getText = () =>{
    let text = document.querySelector(".heading").innerHTML;
    let chars = [...text];
    let content = "";
    console.log(chars);
    chars.forEach(element => {
        if(element != " " ){
            content+= `
                <span>${element}</span>
            `
        }
    });
    document.querySelector(".heading").innerHTML = content;
}
getText();