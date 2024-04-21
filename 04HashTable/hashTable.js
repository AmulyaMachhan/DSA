class HashTable{
    constructor( ) {
        this.table = new Array(127);
        this.size = 0;
    }
    _hash(key){
        let hash = 0;
        for(let i = 0 ; i<key.length ; i++){
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }
    set(key, value){
        const index = this._hash(key);
        this.table[index] = [key , value];
        this.size++;
    }
    get(key){
        const index = this._hash(key);
        return this.table[index];
    }
    remove(key){
        const index = this._hash(key);

        if(this.table[index] && this.table[index].length > 0){
            this.table[index] = [];
            this.size--;
            return true;
        }else{
            return false;
        }
    }

    display(){
        this.table.forEach( (value , index) => {
            console.log(`${index} : ${value}`)
        }) 
    }
}

const ht = new HashTable;
ht.set("John" , 500);
ht.set("Marry" , "Brunette");
console.log(ht.get("John"));
console.log(ht.get("Marry"));
console.log(ht.size);
ht.display();
