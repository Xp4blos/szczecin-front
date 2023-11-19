export class User{
    constructor(
        public name?: string, 
        public lastName?: string, 
        public photo?:string, 
        public description?:string,
        public email?: string,
        public dOb?: string,
        public friends?: User[]
        ){}
}