pipeline {
  agent any

  stages {
    stage("Build Frontend") {
      steps {
        sh "docker build -t atul/frontend:latest frontend/"
        sh "docker push atul/frontend:latest"
      }
    }

    stage("Build Backend") {
      steps {
        sh "docker build -t atul/backend:latest backend/"
        sh "docker push atul/backend:latest"
      }
    }

    stage("Deploy") {
      steps {
        sh "helm upgrade --install frontend frontend/helm"
        sh "helm upgrade --install backend backend/helm"
      }
    }
  }
}
