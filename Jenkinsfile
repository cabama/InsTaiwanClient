pipeline {
    agent any

    environment {
        SERVICE = 'adserver-report-extraction-task'
        CONTAINER = 'adserver-report-extraction-task-container'
        IMAGE_REPOSITORY = 'eu.gcr.io/maximal-record-121815/'
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