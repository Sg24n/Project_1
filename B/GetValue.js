
function getValue() {
    console.clear();
    // .value в конце превращает тип данных htmlelement в универсальный any 
    // благодаря чему его можно превратить в число
    var inDollars = document.getElementById("quantityDollars").value;
    var inCoins = document.getElementById("quantityCoins").value;
    //Получение точки продажи
    var tP1 = document.getElementById("tp1").value;
    var tP2 = document.getElementById("tp2").value;
    var tP3 = document.getElementById("tp3").value;

    //Стоковые значения
    var outP1 = 0
    var outP2 = 0
    var outP3 = 0

    //Рассчёт части от монет
    if (tP1 && tP2 && tP3 > 0){
    //1/6 часть от суммы монет
        clog = 1
        var part = inCoins / 6
            part1 = part,
            part2 = part*2,
            part3 = part*3;
    }
    //1/3 часть от суммы монет
    else if (tP1 && tP2 > 0 || tP2 && tP3 > 0 || tP1 && tP3 > 0) {
        clog = 2
        var part = inCoins / 3,
            part1 = part,
            part2 = part*2,
            part3 = part*2;
    }
    //Часть = сумма монет
    else if (tP1 > 0 || tP2 > 0 || tP3 > 0){
        clog = 3
        var part = inCoins, 
            part1 = inCoins, 
            part2 = inCoins, 
            part3 = inCoins;
    }
    //Присваивание каждому ТП части
    if(tP1>0){outP1 = part1}
    if(tP2>0){outP2 = part2}
    if(tP3>0){outP3 = part3}


    //Цена монеты
    var cost = (inDollars / inCoins);
    //Эквивалент монет в долларах
    var outPD1 = outP1 * tP1;
    var outPD2 = outP2 * tP2;
    var outPD3 = outP3 * tP3;
    //эквивалент в процентах
    var procent1 = (outPD1 * 100) / inDollars;
    var procent2 = (outPD2 * 100) / inDollars;
    var procent3 = (outPD3 * 100) / inDollars;
    var clog;

    //Общий профит в долларах и процентах
    var sumD = outPD1 + outPD2 + outPD3;
    var sumProc = procent1 + procent2 + procent3;

    //Вывод в консоль
    console.log("Алгоритм части: " + clog+
        "\nСтоимость монеты = " + cost +
        "\nЧасть от монет   = " + part+
   
        "\nКол-во монет на продажу " +
        "\nТочка 1 = " + outP1 +
        "\nТочка 2 = " + outP2 +
        "\nТочка 3 = " + outP3+
   
        "\n\tПрофит " +
        "\nТочка $ 1 = " + outPD1 +
        "\nТочка $ 2 = " + outPD2 +
        "\nТочка $ 3 = " + outPD3+
    
        "\nПроцент 1 = " + procent1 + "% " +
        "\nПроцент 2 = " + procent2 + "% " +
        "\nПроцент 3 = " + procent3 + "% "+
        "\nСумма выхода = " + sumD +
        "\nОбщий % =      " + sumProc);
        //получение и присваивание параграфов к переменной
    var str1 = document.getElementById("1");
    var str2 = document.getElementById("2");
    var str3 = document.getElementById("2");
    var str3 = document.getElementById("3");
    var str4 = document.getElementById("4");
    var str5 = document.getElementById("5");
    var str6 = document.getElementById("6");
    //Присваивание полям p1-6 содержимого с помощью интерфейса innerHTML
    str1.innerHTML = 'Цена : ' + cost;
    str2.innerHTML = 'Часть : ' + part
    str3.innerHTML = 'ТП 1 = ' + outP1 +  ' = ' + outPD1+ '$ = ' + procent1 + '%';
    str4.innerHTML = 'ТП 2 = ' + outP2 +  ' = ' + outPD2+ '$ = ' + procent2 + '%';
    str5.innerHTML = 'ТП 3 = ' + outP3 +  ' = ' + outPD3+ '$ = ' + procent3 + '%';
    str6.innerHTML = 'Сумма выхода: ' + sumD + ' = '+sumProc+'%';




}