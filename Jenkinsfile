pipeline {
    agent any

    environment {
        def TIMESTAMP = sh(script: "echo `date +%s`", returnStdout: true).trim()
    }
    stages {
        stage('Build') {
            steps {
                sh 'docker-compose -f docker-compose.jenkins.yml up'
            }
        }
    }
}

