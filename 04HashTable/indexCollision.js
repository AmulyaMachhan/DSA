class HashTable{
    constructor(){
        this.table = new Array(127);
        this.size = 0;
    }
    _hash(key){
        let hash = 0;
        for(let i = 0 ; i < key.length ; i++){
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }
    set(key , value){
        const index = this._hash(key);

        if(this.table[index]){
            for(let i =0 ; i < this.table[index].length ; i++){
                if(this.table[index][i][0]===key){
                    this.table[index][i][1] = value;
                    return;
                }
            }
            this.table[index].push([key , value]);
        }else{
            this.table[index] = [];
            this.table[index].push([key,value]);
        }

        this.size++;
    }
    get(key){
        let target = this._hash(key);

        if(this.table[target]){
            for(let i=0 ; i < this.table[target].length ; i++){
                if(this.table[target][i][0] === key){
                    return this.table[target][i][1];
                }
            }
        }
        return undefined;
    }
    remove(key){
        const index = this._hash(key);

        if(this.table[index]&&this.table[index].length){
            for(let i = 0 ; i < this.table[index].length; i++){
                if(this.table[index][i][0] === key){
                    this.table[index].splice(i, 1);
                    this.size--;
                    return true;
                }
            }
        }else{
            return false;
        }
    }
    display(){
        this.table.forEach((values,index) => {
            const chainedValues = values.map(([key, value]) =>{
                return `${key} : ${value}`;
            });

            console.log(`${index} : ${chainedValues}`);
        })
    }
}

const ht = new HashTable;
ht.set("AD", 300);
ht.set("BC" , 200);
ht.set("John" , "White");
ht.set("Marry", "Brunette");

ht.display();

console.log(ht.get("AD"))
console.log(ht.get("BC"))

console.log(ht.remove("AD"));
console.log(ht.remove("dfgd"));

ht.display();