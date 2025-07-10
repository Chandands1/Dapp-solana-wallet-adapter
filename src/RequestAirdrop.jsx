

export function RequestAirdrop(){

    function requestAirdrop(){
        alert("Hi there");
    }

    return(
        <div>
            <input type="text" placeholder="Amount..." />
            <button onClick={requestAirdrop}>Request Airdrop</button>
        </div>
    )
}