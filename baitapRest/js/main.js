
let dtbKhoi1 = () =>{
    let toan =document.getElementById("inpToan").value;
    let ly = document.getElementById("inpLy").value;
    let Hoa = document.getElementById("inpHoa").value;
    document.getElementById("tbKhoi1").innerHTML = tinhDTB(Number(toan),Number(ly),Number(Hoa));
}

let dtbKhoi2 = () =>{
    let van =document.getElementById("inpVan").value;
    let su =document.getElementById("inpSu").value;
    let dia =document.getElementById("inpDia").value;
    let english =document.getElementById("inpEnglish").value;
    document.getElementById("tbKhoi2").innerHTML = tinhDTB(Number(van),Number(su),Number(dia),Number(english));
}

let tinhDTB = (...value) =>{
    let array = [];
    let dtb = 0;
    value.map((item, index) => {
        array.push(item);
    });
    for (const key of array) {
       dtb += key;
    }

    return dtb = dtb/(array.length);
}