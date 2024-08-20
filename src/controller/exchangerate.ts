 import axios from "axios";
 import sequelize from "../config/mysql.config";
 import * as Sequelize from "sequelize";
 import { country_exchange_rate } from "../models/country_exchangerate";
 import env from "../config/env.config";

 export class JobExchangeRate {
    async dailyExchangeRate() {
        try{
            let config = {
                method: "get",
                maxBodyLength: Infinity,
                url: env.URLEXCHANGERATE,
                headers: {},
              };
            const response = await axios.request(config);
            await this.updateDailyExchangeRate(response.data);
        }catch(e) {
           console.log(e)
        }
    }
    
    async updateDailyExchangeRate(data:any): Promise<void> {
        const transaction = await sequelize.transaction();
        try{
            console.log("dataCollect")
            for (let rate of data.responseContent) {
                // Creating a record within the transaction
                const created = await country_exchange_rate.create({
                    period: rate['period'],
                    currency_id: rate['currency_id'],
                    country_name: rate['countryName'],
                    currency_name_th: rate['currency_name_th'],
                    currency_name_eng: rate['currency_name_eng'],
                    buying_sight: rate['buying_sight'],
                    buying_transfer: rate['buying_transfer'],
                    selling: rate['selling'],
                    flag_path: rate['flagPath'],
                    is_active: true,
                    created_at: Sequelize.literal('NOW()'),
                    updated_at: Sequelize.literal('NOW()')
                }, { transaction });
    
                console.log('Created:', created);
            }
            await transaction.commit();
        }catch(e){
            await transaction.rollback();
            console.log(e)
        }
    }
}
