pipeline {
    agent any

    environment {
        def TIMESTAMP = sh(script: "echo `date +%s`", returnStdout: true).trim()
    }
    stages {

        stage('clean') {
            steps {
                sh 'echo $USER'
                sh 'rm -rf build/*'
                sh 'rm -rf build/.gitkeep'
                sh 'chown -R jenkins build'
            }
        }

        stage('Build') {
            steps {
                sh 'docker-compose -f docker-compose.jenkins.yml up --build'
            }
        }
    }
}