let btn_rightnow = $(".btn.btn-success.btn-lg")[0]
let btn_sorry = $(".btn.btn-success.btn-lg")[1]
let btn_del = $(".btn.btn-danger.btn-lg")[0]
setInterval(() => {
        let skill = $("tbody")[0]
        let skill1_num = Number(skill.children[1].cells[2].textContent.split(" ")[0])
        let btn_skill1 = skill.children[1].cells[3].children[0]
        let skill2_num = Number(skill.children[2].cells[2].textContent.split(" ")[0])
        let btn_skill2 = skill.children[2].cells[3].children[0]
        let cur_skill_num = Number($(".col-12.text-center.mt-2")[1].children[1].textContent.split(" ")[1])
        let skill1_level = Number(skill.children[1].children[1].textContent)
        let skill2_level = Number(skill.children[2].children[1].textContent)
        for(let i = 0; i < 10; i++){
            btn_rightnow.click()
        }
        if(cur_skill_num > skill1_num+skill2_num){
            for(let i = 0; i < 10; i++){
                btn_rightnow.click()
            }
            btn_skill2.click()
            btn_skill1.click()
        }
        else if(cur_skill_num >= skill2_num){
            for(let i = 0; i < 10; i++){
                btn_rightnow.click()
            }
            btn_skill2.click()
        }
        else if(cur_skill_num >= skill1_num){
            for(let i = 0; i < 10; i++){
                btn_rightnow.click()
            }
            btn_skill1.click()
        } 
        else{
            for(let i = 0; i < 100; i++){
                btn_rightnow.click()
            }
        }
        if(skill1_level >= 10000 && skill2_level >= 10000){
            btn_del.click()
        }
    }, 0.01
)