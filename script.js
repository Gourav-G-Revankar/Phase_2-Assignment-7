function insrt(num) {
    $("#output-value").text($("#output-value").text() + num);
}

function eql() {
    $("#output-value").text(eval($("#output-value").text()));
}

function cLear() {
    $("#output-value").text('');
}

function backspace() {
    value =  $("#output-value").text();
    $("#output-value").text(value.substring(0,value.length - 1));
}