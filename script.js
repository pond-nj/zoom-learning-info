const url = ["https://www.youtube.com/embed/-tKVN2mAKRI",
"https://www.youtube.com/embed/uCEEXFywrtA",
"https://www.youtube.com/embed/VNdHd1asf9s"];

const questions = [ ["Question1?",["choice1.1","choice1.2","choice1.3"]], 
["Question2?",["choice2.1","choice2.2","choice2.3"]], 
["Question3?",["choice3.1","choice3.2","choice3.3"]], 
["Question4?",["choice4.1","choice4.2","choice4.3"]], 
];

var page_no = 0;
var total_ans = 0;
const choice_flag = new Array(questions.length).fill(0);
const ans_choice = new Array(questions.length);

const chooseChoice = () => {
    const index = parseInt(event.target.name.split("q-")[1])
    ans_choice[index]=event.target.value;
    console.log(total_ans)
    console.log(index)
    if( choice_flag[index] == 0){
        choice_flag[index]=1;
        total_ans++;
    }
    if( total_ans== questions.length ){
        document.querySelector("#submit").style.display="block";
    }
}

const goto_form = () => {
    window.location.href = "https://docs.google.com/forms/u/0/?tgif=d";
}

const choose_video = (page) => {
    page_no = page
    if(page_no==3){
        // toggle mc
        
        // document.querySelector('#show-mc').classList.toggle('display-none');
        // var inside_ol = '';
        // questions.forEach(function(question, q_no){
        //     inside_ol+='<li class="mb-3">'+question[0];
        //     question[1].forEach(function(choice, c_no){
        //         const name= '"q-' + q_no  + '"';
        //         const id= '"ans-' + q_no +"." + c_no + '"';
        //         const value= '"'+choice+'"';
        //         inside_ol+='<div class="form-check"><input class="form-check-input" type="radio" onclick="chooseChoice()" name=' + name + ' id=' + id + ' value='+value+'><label class="form-check-label" for='+ id + '>';
        //         inside_ol+=choice;
        //         inside_ol+='</label></div>';
        //     })
        //     inside_ol+='</li>';
        // });
        // document.querySelector('ol').innerHTML=inside_ol;
        // document.querySelector('#show-video').classList.toggle('display-none');

    }else{
        document.querySelector('#video').setAttribute("src",url[page_no]);

        // btn id btn1, btn2, btn3
        document.querySelector('#btn'+ ((page_no)%3    +1 )).classList.add('active')
        document.querySelector('#btn'+ (((page_no+1)%3) +1 )).classList.remove('active')
        document.querySelector('#btn'+ (((page_no+2)%3) +1 )).classList.remove('active')
    }
}

const next_video = () => {
    page_no++;
    if(page_no < 3){
        choose_video(page_no);
    }else{
        goto_form();
    }
}



