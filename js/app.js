function gen_cap() {
    // console.log(Math);
    // console.log(Math.random());
    data1 = Math.round(10 * Math.random());
    // console.log(data1);
    data2 = Math.round(10 * Math.random());
    // console.log(data2);
    str = `${data1} + ${data2}`;
    console.log(str);
    document.getElementById("captcha").innerHTML = str;
    sum = data1 + data2;
    console.log(sum);
    document.getElementById("txt").value = "";
  }

  function check_cap() {
    rec = document.querySelector("#txt").value;
    console.log(rec);

    if (rec == sum) {
      document.getElementById("right").innerHTML =
        "Congratulations! Your answer is correct.";
    } else {
      document.getElementById("wrong").innerHTML =
        "Woops! You have given wrong answer.";
    }
    setTimeout(function () {
      document.getElementById("right").innerHTML = "";
    }, 3000);
    setTimeout(function () {
      document.getElementById("wrong").innerHTML = "";
    }, 3000);
  }