import DatabaseHelper from '../database/DataBasesHelper'

const db = new DatabaseHelper();

export default class TrainingService {
  static getTrainings() {
    return db.listTrainings();
  }

  static addTraining(training) {
    return db.addTraining(training);
  }

  static async startTraining(data) {
    console.log("Starting training with data:", data);
    
    
    const trainingRecord = {
      name: `Training ${new Date().toISOString()}`,
      date: new Date().toISOString(),
      duration: '1h',
      dataSize: '100MB',
      epochs: 10,
      accuracy: 0.95
    };
    
    await this.addTraining(trainingRecord);
  }

  static async downloadModel(url) {
    // Implementation to download the model
  }

  static async trainModel(model, data) {
    // Implementation to train the model
  }

  static async sendModelToServer(model) {
    // Implementation to send the updated model to the server
  }
}