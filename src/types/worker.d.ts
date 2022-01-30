declare module 'worker-loader!*' {
  class WebpackWorker extends Worker {
    construction();
  }

  export default WebpackWorker;
}