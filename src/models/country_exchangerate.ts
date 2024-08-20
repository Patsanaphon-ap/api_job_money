import * as Sequelize from "sequelize";
import sequelize from "../config/mysql.config";

export const country_exchange_rate = sequelize.define(
    "country_exchange_rate",
    {
        id: {
            type: Sequelize.INTEGER,
            field: "id",
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,  // Auto-increment for the primary key
        },
        period: {
            type: Sequelize.STRING(10),
            field: "period",
        },
        currency_id: {
            type: Sequelize.STRING(5),
            field: "currency_id",
            allowNull: false,
        },
        country_name: {
            type: Sequelize.STRING(255),
            field: "country_name",
            allowNull: false,
        },
        currency_name_th: {
            type: Sequelize.STRING(255),
            field: "currency_name_th",
            allowNull: false,
        },
        currency_name_eng: {
            type: Sequelize.STRING(255),
            field: "currency_name_eng",
        },
        buying_sight: {
            type: Sequelize.DOUBLE,
            field: "buying_sight",
            allowNull: false,
        },
        buying_transfer: {
            type: Sequelize.DOUBLE,
            field: "buying_transfer",
        },
        selling: {
            type: Sequelize.DOUBLE,
            field: "selling",
        },
        flag_path: {
            type: Sequelize.STRING(255),
            field: "flag_path",
        },
        is_active: {
            type: Sequelize.BOOLEAN,
            field: "is_active",
            allowNull: false,
            defaultValue: true,
        },
        created_at: {
            type: Sequelize.DATE,
            field: "create_at",
            defaultValue: Sequelize.literal("NOW()"),
        },
        updated_at: {
            type: Sequelize.DATE,
            field: "update_at",
            defaultValue: Sequelize.literal("NOW()"),
        },
    },
    {
        timestamps: false,  
        freezeTableName: true,  
    }
);