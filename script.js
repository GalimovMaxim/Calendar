function fun2() {
    alert("Здесь представлены события на этот празднычный день.");
    text2 = document.querySelector("#info")
    text2.innerHTML = 'День Весны и Труда. Этот день считается символом весны, он олицетворяет собой уважение к любому созидательному труду. Традиция встречать этот праздник насчитывает уже много лет.'
   

}

function fun3() {
    alert("Здесь представлены события на этот празднычный день.");
    text3 = document.querySelector("#info")
    text3.innerHTML = 'День Победы. Праздник победы Красной армии и советского народа над нацистской Германией в Великой Отечественной войне 1941—1945 годов.'
   

}

but2 = document.querySelector("#m1")
but2.addEventListener('click', fun2)


but2 = document.querySelector("#m9")
but2.addEventListener('click', fun3)
labek.addEventListener("")