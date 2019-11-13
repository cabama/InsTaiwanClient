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
                sh 'chown -R source_data'
            }
        }

        stage('Build') {
            steps {
                sh 'echo $USER'
                sh 'docker-compose -f docker-compose.jenkins.yml up'
            }
        }
    }
}