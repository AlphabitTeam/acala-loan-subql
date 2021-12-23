// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export class ExchangeRate implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public block?: bigint;

    public collateralId?: string;

    public debitExchangeRate?: bigint;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save ExchangeRate entity without an ID");
        await store.set('ExchangeRate', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove ExchangeRate entity without an ID");
        await store.remove('ExchangeRate', id.toString());
    }

    static async get(id:string): Promise<ExchangeRate | undefined>{
        assert((id !== null && id !== undefined), "Cannot get ExchangeRate entity without an ID");
        const record = await store.get('ExchangeRate', id.toString());
        if (record){
            return ExchangeRate.create(record);
        }else{
            return;
        }
    }


    static async getByCollateralId(collateralId: string): Promise<ExchangeRate[] | undefined>{
      
      const records = await store.getByField('ExchangeRate', 'collateralId', collateralId);
      return records.map(record => ExchangeRate.create(record));
      
    }


    static create(record: Partial<Omit<ExchangeRate, FunctionPropertyNames<ExchangeRate>>> & Entity): ExchangeRate {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new ExchangeRate(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
