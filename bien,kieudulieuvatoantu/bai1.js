function calculate() {
    const physics = parseFloat(document.getElementById('physics').value);
    const chemistry = parseFloat(document.getElementById('chemistry').value);
    const biology = parseFloat(document.getElementById('biology').value);

    const total = physics + chemistry + biology;
    const average = total / 3;

    document.getElementById('result').innerText =
        `Tổng điểm: ${total.toFixed(2)}, Điểm trung bình: ${average.toFixed(2)}`;
    document.write("tổng điểm : " + total);
    document.write("điểm trung bình : "+ average);
}


