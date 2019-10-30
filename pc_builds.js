module.exports = class Pcbuild {
    constructor(name,type,cpu, video_card, motherboard, memory,build_year, storage, drive, power_supply, pccase, price ){
        this.name = name
        this.type = type
        this.cpu = cpu
        this.motherboard = motherboard
        this.video_card = video_card
        this.memory = memory
        this.storage = storage
        this.power_supply = power_supply
        this.drive = drive
        this.pccase = pccase
        this.build_year = build_year
        this.price = price
        this.interested_buyers = []
    }
    printBuyersName(){
        this.interested_buyers.forEach(printName)
    }
}

const printName = Buyer => console.log(Buyer.firstname)