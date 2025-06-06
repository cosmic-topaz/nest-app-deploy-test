module.exports = {
  apps: [
    {
      name: 'nestjs-app',
      script: 'dist/main.js',
      instances: 'max', // CPU 코어 수만큼 fork
      exec_mode: 'cluster', // cluster 모드
      watch: false,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};