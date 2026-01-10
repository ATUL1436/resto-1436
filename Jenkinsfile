pipeline {
  agent any

  environment {
    DOCKERHUB_USER = "atul1436"
    FRONTEND_IMAGE = "atul/frontend"
    BACKEND_IMAGE  = "atul/backend"
  }

  stages {

    stage("Checkout Code") {
      steps {
        git branch: 'main',
            url: 'https://github.com/ATUL1436/Atulreso-1436'
      }
    }

    stage("Build Frontend Image") {
      steps {
        sh """
          docker build -t $FRONTEND_IMAGE:latest frontend/
          docker push $FRONTEND_IMAGE:latest
        """
      }
    }

    stage("Build Backend Image") {
      steps {
        sh """
          docker build -t $BACKEND_IMAGE:latest backend/
          docker push $BACKEND_IMAGE:latest
        """
      }
    }

    stage("Deploy to AKS using Helm") {
      steps {
        sh """
          helm upgrade --install frontend frontend/helm
          helm upgrade --install backend backend/helm
        """
      }
    }
  }
}
