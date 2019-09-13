console.log(`Finishing loading all stuff before scripts`);
window.addEventListener("load", function(){

    var script_list = [
        "https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js",
        "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
        "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" ];

    for (let i = 0; i < script_list.length; i++) {
        let element = script_list[i];
        var script = document.createElement("script");
        script.src=element;
        this.document.body.appendChild(script);
        
    }
    var t2 = Date.now();
    delta2 = t2 - t0;
    console.log(`Done!`);
    console.log(`Delta2: ${delta2}`);
})