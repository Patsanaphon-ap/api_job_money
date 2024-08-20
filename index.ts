import * as cron from 'node-cron';
import { manager } from './src/index';

  try {
      cron.schedule('* * * 1 * *', function () {
        
          // This job will run every second
          console.log(new Date().toLocaleTimeString());
          manager.jobdaily.dailyExchangeRate();
        });
  } catch (error) {
    console.log("Error scheduling cron job interfaceStore :", error);
  }

