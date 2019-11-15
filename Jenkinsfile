pipeline {
    agent any

    environment {
        def TIMESTAMP = sh(script: "echo `date +%s`", returnStdout: true).trim()
    }
    stages {

        stage('clean') {
            steps {
                sh 'echo $USER $(id -u):$(id -g)'
            }
        }

        stage('Build') {
            steps {
                sh 'CURRENT_UID=$(id -u):$(id -g) docker-compose -f docker-compose.jenkins.yml up --build'
            }
        }
    }
}