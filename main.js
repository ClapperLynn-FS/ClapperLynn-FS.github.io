let characters=["Mulder","Scully","Skinner","Cigarette smoking Man"]

let mulder=0;
let scully=0;
let skinner=0;
let csm=0;
let other=0;
Survey();
function Survey()
{
    for(let i=0;i<characters.length;i++)
    {
        console.log(characters[i]);
    }


    let answer=prompt("please choose a favorite Character")
    console.log('thank you. Your response has been recorded.')

    if(answer=='Fox Mulder')
    {
        mulder=+1;
    }
    else if(answer=='Dana Scully')
    {
        scully=+1;
    }
    else if(answer=='Walter Skinner')
    {
        skinner=+1;
    }
    else if(answer=='Cigarette Smoking Man')
    {
        csm=+1;
    }
    else
    {
        other=+1;
    }
        console.log('Fox Mulder: '+mulder);
        console.log('Dana Scully: '+scully);
        console.log('Walter Skinner: '+skinner);
        console.log('Cigarette Smoking Man: '+csm);
        console.log('Other: '+other);



}

