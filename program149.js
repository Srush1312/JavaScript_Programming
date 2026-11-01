function SumFactors(iNo)
{
    icnt=0;
    isum=0;

    console.log("Sum of:",iNo);

    for(let icnt=1;icnt<=(iNo/2);icnt++) 
    {
        if(icnt%2==0)
        {
            isum=isum+icnt;
        }    
    } 
    
    return isum;
}

function main()
{
    let iRet=0;

    SumFactors(12);

    console.log("Summetion of factors:",iRet);
}

main()