function triangleArea (a, b, c){
    const s = (a + b + c) / 2;
    const A = s * (s - a) * (s - b) * (s - c);
    let area = Math.sqrt(A);
    area = area.toFixed(2);
    area = parseFloat(area); 
    return area;
}
console.log(triangleArea(3, 6, 7));