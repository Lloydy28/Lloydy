// create a variable to hold your NFT's
const NFTs = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(_game, _name, _roles) {
    const NFT = {
        "game":  _game,
        "name": _name,
        "roles": _roles,
    }
    NFTs.push (NFT);
    console.log ("Minted: " + _game);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for(let i = 0; i < NFTs.length; i++){
        console.log("\nID \t\t\t\t" + (i + 1));
        console.log("\ngame: \t\t\t" + NFTs[i].game);
        console.log("name: \t\t\t" + NFTs[i].name);
        console.log("roles: \t\t\t" + NFTs[i].roles);
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply () {
    console.log("\n" + NFTs.length);
}

// call your functions below this line
let myNFT1 = mintNFT("Valorant", "Jett", "Dueslist"); 
let myNFT2 = mintNFT("LeagueofLegends", "Jhin", "ADC"); 
let myNFT3 = mintNFT("DOTA2", "Rubick", "Support"); 
let myNFT4 = mintNFT("MobileLegends", "Badang", "Fighter"); 
let myNFT5 = mintNFT("GenshinImpact", "Diluc", "Carry"); 
listNFTs();
getTotalSupply();
