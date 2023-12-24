const URL = "https://658760e80164db130fc9de4b.mockapi.io/api/v1"

export const medidas = async ()=>{
    var cabecera = {
        "Content-Type": "application/json",
    }
    const datos = await (await fetch(URL + "/medida", {
        method: "GET",
        headers: cabecera
    })).json();
    return datos;
}

export const promedio = async ()=>{
    var cabecera = {
        "Content-Type": "application/json",
    }
    const datos = await (await fetch(URL + "/promedio/4", {
        method: "GET",
        headers: cabecera
    })).json();
    return datos;
}