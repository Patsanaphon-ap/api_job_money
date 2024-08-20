import * as cron from 'node-cron';
import { manager } from './src/index';

  try {
      cron.schedule('* * * 1 * *', async function () {
        
          // This job will run every second
          console.log(new Date().toLocaleTimeString());
          await manager.jobdaily.dailyExchangeRate();
          console.log("finish")
        });
  } catch (error) {
    console.log("Error scheduling cron job interfaceStore :", error);
  }

