function getComputerChoice()
{
    let a=Math.floor(Math.random() * 3);
    if((a==0))
    {
        return "rock";
    }
    if((a==1))
    {
        return "paper";
    }
    if((a==2))
    {
        return "scissor";
    }
}
function playRound(playerSelection, computerSelection)
{
    if(playerSelection==computerSelection)
    {
        return "It is a tie";
    }
    else if(playerSelection=="rock")
    {
        if(computerSelection=="paper")
        {
            return "You Lose! paper beats rock";
        }
        else{
            return "You Win! rock beats scissor";
        }
    }
    else if(playerSelection=="paper")
    {
        if(computerSelection=="rock")
        {
            return "You Win! paper beats rock";
        }
        else{
            return "You lose! scissors beats rock";
        }
    }
    else if(playerSelection=="scissors")
    {
        if(computerSelection=="rock")
        {
            return "You Lose! rock beats scissors";
        }
        else{
            return "You Win! scissors beats paper";
        }
    }

}
const computerSelection=getComputerChoice();
const playerSelection="rock"; 
console.log(playRound(playerSelection, computerSelection));
