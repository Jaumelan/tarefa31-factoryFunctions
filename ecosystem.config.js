module.exports = {
    apps: [
      {
        script: './backend/index.js',
        //args: 'start',
        cwd: './backend/',
        name: 'Backend',
        watch: true
      },
      {
        script: './frontend/main.js',
        //args: 'start',
        cwd: './frontend/',
        name: 'Frontend',
        watch: true
      }
    ]
  }