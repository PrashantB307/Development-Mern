function yolo() {
    var a = 10;
    function cb () {
        console.log("Hello How are You ?");
    }
    // function to be executed ( CallBack fun) , time(mili sec.)
    //after which cb fun.  to be axecuted.
    setTimeout(cb, 4000);  // 4000 ms  ==> 4sec
    console.log(a);
}

yolo();