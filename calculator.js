// When a number is clicked, show it in the current spot
$(".num").on("click", function checkNum(){
    // console.log("this button is a number!")
    $("#current-val").append(this.id);
});

// When an op is clicked, see what kind it is
$(".op").on("click", function checkOp(){

    // Everybody out!
    if (this.id == "clear"){
        // console.log("this is the clear btn!");
        $("#current-val").empty();
        $("#history-val").empty();

    // Okay, now just one at a time..
    } else if(this.id=="backspace"){
        var current = $("#current-val").text();
        if(current){
            current = current.substr(0,current.length-1);
            $("#current-val").html(current);
        }

    // So you wanna solve something, huh?
    } else {
        var current = $("#current-val").text();
        var history = $("#history-val").text();

        // If there's something in history and not in current,
        // we can still do this 😤
        if (current == "" && history != ""){
            // console.log("we can still operate!")
            if(isNaN(history[history.length-1])){
                history= history.substr(0,history.length-1);
            }
        }
        if (current != "" || history != ""){
            history = history + current;
            if (this.id == "solve"){
                var result = eval(history);
                $("#current-val").html(result);
                $("#history-val").empty();
            } else{
                history = history + this.id;
                $("#history-val").html(history);
                $("#current-val").empty();
            }
            // console.log("yo this works");
        } else {

        }
    }
})