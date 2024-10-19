function convert() {
    const value = parseFloat(document.getElementById("value").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let result;

    if (isNaN(value))
    {
        alert("Please enter a valid value.");
        return;
    }
    if (fromUnit === "km" && toUnit === "m")
    {
        result = value * 1000; 
    } 
    else if (fromUnit === "km" && toUnit === "mm") 
    {
        result = value * 1000000;
    }
    else if (fromUnit === "m" && toUnit === "km")
    {
        result = value / 1000; 
    } 
    else if (fromUnit === "m" && toUnit === "mm") 
    {
        result = value * 1000; 
    } 
    else if (fromUnit === "mm" && toUnit === "km") 
    {
        result = value / 1000000;
    } 
    else if (fromUnit === "mm" && toUnit === "m") 
    {
        result = value / 1000;        
    }
    else
    {
        result = value; 
    }
    document.getElementById("result").innerText = result;
}