// ==UserScript==
// @id           Rifqifam
// @name         Rifqifam
// @namespace    http://tampermonkey.net/
// @version      1.1.0
// @description  SiakWar Quick Select
// @author       Muhammad Rifqi Fameizy
// @match        https://academic.ui.ac.id/main/CoursePlan/CoursePlanEdit
// ==/UserScript==

(function() {
    var i, j, now;
    var matkul_code = ["DDK-A", "EMONLA", "EKN", "Ekbang-B", "ESDMK-A", "Eksyar"]
    var matkul_len = matkul_code.length;
    var cnt = 0;
    console.log('Matkul picked :')
    for(i = 0;i < matkul_len;i++){
        console.log(matkul_code[i])
    }
    console.log("=======Pencarian Mata Kuliah Dimulai!!=======")
    for (i = 0;i <= 800;i++){
        now = 'r'+i.toString();
        //console.log(now)
        if(document.getElementById(now) != null) {
            for(j = 0;j < matkul_len;j++){
                const variableParent = document.getElementById(now);
                const variableChild = variableParent.querySelector('a');
                const variableButton = variableParent.querySelector('input');
                if(variableChild.textContent != matkul_code[j]) continue;
                console.log("Mata Kuliah " + matkul_code[j] + " ditemukan ");
                cnt++
                console.log("Clicking !");
                if(!variableButton.checked){
                }
                break;
            }
        }
        else{
          continue;
        }

    }
    var scrollingElement = (document.scrollingElement || document.body);
    scrollingElement.scrollTop = scrollingElement.scrollHeight;
    alert("Berhasil Tercentang : "+ cnt);
})();
