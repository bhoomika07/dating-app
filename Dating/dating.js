var users=[{
    name: 'KATHY',
    gender:'F',
    hobby:'Partying',
},
{
    name: 'JASON',
    gender:'M',
    hobby:'Partying',
},
{
    name: 'GINA',
    gender:'F',
    hobby:'Hanging out',
},
{
    name: 'ALBERT',
    gender:'M',
    hobby:'Reading',
},
{
    name: 'ROSA',
    gender:'F',
    hobby:'Reading',
},
{
    name: 'GOOFER',
    gender:'M',
    hobby:'Hanging out',
},
];
window.addEventListener('load',function(){
    var results=document.getElementById('results');
    function search(){
        //get hobby
        var hobbyField=document.getElementById('hobby');
        var hobby=hobbyField.value;
        console.log(hobby);
        //get gender
        var genderField=document.getElementById('gender');
        var x=genderField.selectedIndex;
        var gender=genderField.options[x].value;
        console.log(gender);
        var res='';
        len=users.length;
        for(var i=0;i<len;i++){
            //check gender
            if(gender=='B' || gender==users[i].gender){
                //check hobby
                if(hobby=='' || hobby==users[i].hobby){
                    res+='<div class="person-row">\
                    <div class="person-info">\
                    <section>\
                    <i class="fas fa-heart"></i>\
                    <div>'+ users[i].name+'</div>\
                    <div>'+users[i].hobby+'</div></div>\
                    <button>Add as a friend.</button></section></div>';
                }
            }
        }
        results.innerHTML=res;
    }
        var y=document.getElementById('searchBtn');
        y.addEventListener('click',search);
});