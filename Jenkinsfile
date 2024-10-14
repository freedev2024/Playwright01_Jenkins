pipeline {
    agent any 

    environment {
        NODEJS_HOME = tool name: 'NodeJS', type: 'NodeJSInstallation'
        PATH = "${NODEJS_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout your repository code
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install dependencies
                    sh 'npm install'
                }
            }
        }

        stage('Run Playwright Tests') {
            steps {
                script {
                    // Run Playwright tests
                    sh 'npx playwright test'
                }
            }
        }
    }

    post {
        always {
            // Archive test results
            junit 'test-results/**/*.xml' // Adjust path to your test results
            // Optionally collect screenshots or videos if you save them
            archiveArtifacts artifacts: 'screenshots/**/*', allowEmptyArchive: true
            archiveArtifacts artifacts: 'videos/**/*', allowEmptyArchive: true
        }
    }
}
