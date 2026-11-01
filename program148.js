function DisplayFactors(iNo)
{
    console.log("Factors of:",iNo)
    for(let icnt=1;icnt<=(iNo/2);icnt++) 
    {
        if(icnt%2==0)
        {
            console.log(icnt);
        }    
    }      
}

function main()
{
    DisplayFactors(12);
}

main()